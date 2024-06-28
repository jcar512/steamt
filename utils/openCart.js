import { setUser } from "./handleUsers.js";
import { loadCards } from "./loadCards.js";
import { totalSum } from "./handlePricing.js";
import { totalSumWithDiscount } from "./handlePricing.js";

import { Alert } from "../js/modules/alert.js";
import { CartCard } from "../js/modules/cartCard.js";

export function openCart() {
  const cartCardContainer = document.querySelector("#cartCardContainer");
  const cartModal = document.querySelector("#cartModal");
  const cartTotalPrice = document.querySelector("#cartTotalPrice");
  const cartTotalPriceWithDiscount = document.querySelector(
    "#cartTotalPriceWithDiscount",
  );
  const categoriesContainer = document.querySelector("#categories");
  const usersContainer = document.querySelector("#usersContainer");

  const gameList = JSON.parse(localStorage.getItem("gameList"));

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const userCartItems = currentUser.cart;

  //Chequeo que los juegos sigan disponibles
  const cartItems = gameList.filter((game) => {
    return userCartItems.find(
      (userGame) => userGame.id === game.id && userGame.title === game.title,
    );
  });

  if (cartItems.length !== 0) {
    //En caso de que se haya eliminado un juego se quita del carrito de usuario
    if (cartItems !== userCartItems) {
      currentUser.cart = cartItems;
      setUser(currentUser);
    }

    cartCardContainer.replaceChildren();

    loadCards(cartItems, cartCardContainer, CartCard);

    if (cartItems.length > 3) {
      cartTotalPrice.classList.add("line-through");
      cartTotalPrice.innerText = `UYU ${totalSum(cartItems)}`;
      cartTotalPriceWithDiscount.classList.replace("invisible", "visible");
      cartTotalPriceWithDiscount.innerText = `UYU ${totalSumWithDiscount(cartItems)}`;
    } else {
      cartTotalPriceWithDiscount.classList.replace("visible", "invisible");
      cartTotalPrice.classList.remove("line-through");
      cartTotalPrice.innerText = `UYU ${totalSum(cartItems)}`;
    }

    if (cartModal.classList.contains("opacity-0")) {
      cartModal.classList.replace("opacity-0", "opacity-100");
      cartModal.classList.replace("invisible", "visible");

      usersContainer.classList.replace("visible", "invisible");
      usersContainer.classList.replace("opacity-100", "opacity-0");

      categoriesContainer.classList.replace("visible", "invisible");
      categoriesContainer.classList.replace("opacity-100", "opacity-0");
    } else {
      cartModal.classList.replace("opacity-100", "opacity-0");
      cartModal.classList.replace("visible", "invisible");
    }
  } else {
    const alert = new Alert("El carrito se encuentra vacío", "secondary");

    alert.setAlertBgColor();
    alert.removeAlert();
  }
}

import { loadCards } from "./loadCards.js";
import { totalPriceSum } from "./totalPriceSum.js";

import { CartCard } from "../js/modules/cartCard.js";

export function openCart() {
  const cartCardContainer = document.querySelector("#cartCardContainer");
  const cartTotalPrice = document.querySelector("#cartTotalPrice");
  const cartModal = document.querySelector("#cartModal");

  const cartItems = JSON.parse(localStorage.getItem("currentUser")).cart;

  cartCardContainer.replaceChildren();

  loadCards(cartItems, cartCardContainer, CartCard);

  cartTotalPrice.innerText = `UYU ${totalPriceSum(cartItems)}`;

  if (cartModal.classList.contains("opacity-0")) {
    cartModal.classList.replace("opacity-0", "opacity-100");
    cartModal.classList.replace("invisible", "visible");
  } else {
    cartModal.classList.replace("opacity-100", "opacity-0");
    cartModal.classList.replace("visible", "invisible");
  }
}

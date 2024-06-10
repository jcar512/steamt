import { defaultGameList } from "../utils/defaultGameList.js";
import { loadCards } from "../utils/loadCards.js";
import { searchByName } from "../utils/searchByName.js";
import { totalPriceSum } from "../utils/totalPriceSum.js";

import { Card } from "./modules/card.js";
import { CartCard } from "./modules/cartCard.js";

const cardContainer = document.querySelector("#cardContainer");
const cartCardContainer = document.querySelector("#cartCardContainer");
const searchInput = document.querySelector("#searchInput");
const cartTotalPrice = document.querySelector("#cartTotalPrice");
const cartBtn = document.querySelector("#cartBtn");
const cartModal = document.querySelector("#cartModal");

document.addEventListener("DOMContentLoaded", function () {
  let gameList;

  if (JSON.parse(localStorage.getItem("gameList"))) {
    gameList = JSON.parse(localStorage.getItem("gameList"));
  } else {
    gameList = defaultGameList;
    localStorage.setItem("gameList", JSON.stringify(defaultGameList));
  }

  loadCards(gameList, cardContainer, Card);

  cartBtn.addEventListener("click", function () {
    //Abre el carrito
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartCardContainer.replaceChildren();

    loadCards(cartItems, cartCardContainer, CartCard);

    cartTotalPrice.innerText = `UYU ${totalPriceSum(cartItems)}`;

    cartModal.style.display = "block";
  });

  window.addEventListener("click", function (event) {
    //Si se hace click fuera del modal se cierra
    if (event.target.id.includes("modal") || event.target.id === "cartModal") {
      event.target.style.display = "none";
    } else if (
      event.target.id === "cart" ||
      event.target.id === "cartPriceContainer"
    ) {
      cartModal.style.display = "none";
    }
  });

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") searchByName(searchInput.value);
  });
});

import { loadCards } from "../utils/loadCards.js";
import { searchByName } from "../utils/searchByName.js";
import { loadLocalStorage } from "../utils/loadLocalStorage.js";
import { openCart } from "../utils/openCart.js";
import { closeModal } from "../utils/closeModal.js";

import { Card } from "./modules/card.js";

const cardContainer = document.querySelector("#cardContainer");
const searchInput = document.querySelector("#searchInput");
const cartBtn = document.querySelector("#cartBtn");

document.addEventListener("DOMContentLoaded", function () {
  loadLocalStorage();

  const gameList = JSON.parse(localStorage.getItem("gameList"));

  loadCards(gameList, cardContainer, Card);

  cartBtn.addEventListener("click", function () {
    openCart();
  });

  window.addEventListener("click", function (event) {
    closeModal(event);
  });

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") searchByName(searchInput.value);
  });
});

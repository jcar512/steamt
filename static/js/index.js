import { closeModal } from "../utils/closeModal.js";
import { createCart } from "../utils/createCart.js";
import {
  clearCategories,
  loadCategories,
  searchByName,
  showCategoriesContainer,
} from "../utils/handleCategories.js";
import {
  loadUserName,
  loadUsers,
  setDefaultUser,
  showUsers,
} from "../utils/handleUsers.js";
import { loadCards } from "../utils/loadCards.js";
import { loadLocalStorage } from "../utils/loadLocalStorage.js";
import { openCart } from "../utils/openCart.js";

import { Card } from "./modules/card.js";

const cardContainer = document.querySelector("#cardContainer");
const cartBtn = document.querySelector("#cartBtn");
const categoriesButton = document.querySelector("#categoriesButton");
const categoriesContainer = document.querySelector("#categories");
const searchInput = document.querySelector("#searchInput");

document.addEventListener("DOMContentLoaded", function () {
  loadLocalStorage();

  const gameList = JSON.parse(localStorage.getItem("gameList"));

  loadCards(gameList, cardContainer, Card);

  loadUsers();

  setDefaultUser();

  loadUserName();

  createCart();

  showUsers();

  showCategoriesContainer(categoriesButton, categoriesContainer);

  loadCategories(gameList, categoriesContainer);

  clearCategories(gameList, cardContainer);

  cartBtn.addEventListener("click", function () {
    openCart();
  });

  window.addEventListener("click", function (event) {
    closeModal(event);
  });

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter")
      searchByName(searchInput.value, gameList, cardContainer);
  });
});

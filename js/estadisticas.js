import { closeModal } from "../utils/closeModal.js";
import { createCart } from "../utils/createCart.js";
import { loadLocalStorage } from "../utils/loadLocalStorage.js";
import { openCart } from "../utils/openCart.js";

import { loadUsers, setDefaultUser, showUsers } from "../utils/handleUsers.js";

const cartBtn = document.querySelector("#cartBtn");

document.addEventListener("DOMContentLoaded", function () {
  loadLocalStorage();

  const gameList = JSON.parse(localStorage.getItem("gameList"));

  loadUsers();

  setDefaultUser();

  createCart();

  showUsers();

  cartBtn.addEventListener("click", function () {
    openCart();
  });

  window.addEventListener("click", function (event) {
    closeModal(event);
  });
});

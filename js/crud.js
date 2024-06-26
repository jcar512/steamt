import { loadLocalStorage } from "../utils/loadLocalStorage.js";
import { addNewGame } from "../utils/addNewGame.js";
import { updateForm, modifyGame } from "../utils/modifyGame.js";
import { enableDeleteButton, deleteGame } from "../utils/deleteGame.js";
import { createCart } from "../utils/createCart.js";
import { openCart } from "../utils/openCart.js";
import { closeModal } from "../utils/closeModal.js";

const cartBtn = document.querySelector("#cartBtn");
const crudFormAdd = document.querySelector("#crudFormAdd");
const crudFormModify = document.querySelector("#crudFormModify");
const crudFormDelete = document.querySelector("#crudFormDelete");
const gameIdModify = document.querySelector("#gameIdModify");
const gameIdDelete = document.querySelector("#gameIdDelete");

document.addEventListener("DOMContentLoaded", function () {
  loadLocalStorage();

  const gameList = JSON.parse(localStorage.getItem("gameList"));

  createCart();

  cartBtn.addEventListener("click", function () {
    openCart();
  });

  crudFormAdd.addEventListener("submit", function (event) {
    event.preventDefault();
    addNewGame(gameList, crudFormAdd);
  });

  crudFormModify.addEventListener("submit", function (event) {
    event.preventDefault();
    modifyGame(gameList, crudFormModify);
  });

  crudFormDelete.addEventListener("submit", function (event) {
    event.preventDefault();
    deleteGame(gameList, gameIdDelete);
  });

  gameIdDelete.addEventListener("change", function () {
    enableDeleteButton(gameList, gameIdDelete);
  });

  gameIdModify.addEventListener("change", function () {
    updateForm(gameList);
  });

  window.addEventListener("click", function (event) {
    closeModal(event);
  });
});

import { addNewGame } from "../utils/addNewGame.js";
import { closeModal } from "../utils/closeModal.js";
import { createCart } from "../utils/createCart.js";
import { deleteGame, enableDeleteButton } from "../utils/deleteGame.js";
import { loadLocalStorage } from "../utils/loadLocalStorage.js";
import { modifyGame, updateForm } from "../utils/modifyGame.js";
import { openCart } from "../utils/openCart.js";
import { updateSelectDropdown } from "../utils/updateSelectDropdown.js";

const cartBtn = document.querySelector("#cartBtn");
const crudFormAdd = document.querySelector("#crudFormAdd");
const crudFormModify = document.querySelector("#crudFormModify");
const crudFormDelete = document.querySelector("#crudFormDelete");
const modifySelect = document.querySelector("#modifySelect");
const deleteSelect = document.querySelector("#deleteSelect");

document.addEventListener("DOMContentLoaded", function () {
  loadLocalStorage();

  const gameList = JSON.parse(localStorage.getItem("gameList"));

  createCart();

  cartBtn.addEventListener("click", function () {
    openCart();
  });

  updateSelectDropdown(gameList, modifySelect);

  updateSelectDropdown(gameList, deleteSelect);

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
    deleteGame(gameList, deleteSelect);
  });

  deleteSelect.addEventListener("change", function () {
    enableDeleteButton(gameList, deleteSelect);
  });

  modifySelect.addEventListener("change", function () {
    updateForm(gameList);
  });

  window.addEventListener("click", function (event) {
    closeModal(event);
  });
});

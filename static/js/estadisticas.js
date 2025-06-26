import { closeModal } from "../utils/closeModal.js";
import { createCart } from "../utils/createCart.js";
import {
  loadUserName,
  loadUsers,
  setDefaultUser,
  showUsers,
} from "../utils/handleUsers.js";
import { loadLocalStorage } from "../utils/loadLocalStorage.js";
import { openCart } from "../utils/openCart.js";
import { listSales, totalRevenue } from "../utils/handleStatistics.js";

const cartBtn = document.querySelector("#cartBtn");

document.addEventListener("DOMContentLoaded", function () {
  loadLocalStorage();

  loadUsers();

  setDefaultUser();

  loadUserName();

  createCart();

  showUsers();

  listSales();

  totalRevenue();

  cartBtn.addEventListener("click", function () {
    openCart();
  });

  window.addEventListener("click", function (event) {
    closeModal(event);
  });
});

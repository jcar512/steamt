import { createCart } from "../utils/createCart.js";
import { openCart } from "../utils/openCart.js";
import { closeModal } from "../utils/closeModal.js";

const cartBtn = document.querySelector("#cartBtn");

document.addEventListener("DOMContentLoaded", function () {
  createCart();

  cartBtn.addEventListener("click", function () {
    openCart();
  });

  window.addEventListener("click", function (event) {
    closeModal(event);
  });
});

import { openCart } from "../utils/openCart.js";
import { closeModal } from "../utils/closeModal.js";

const cartBtn = document.querySelector("#cartBtn");

document.addEventListener("DOMContentLoaded", function () {
  cartBtn.addEventListener("click", function () {
    openCart();
  });

  window.addEventListener("click", function (event) {
    closeModal(event);
  });
});

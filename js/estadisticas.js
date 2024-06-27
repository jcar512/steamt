import { createCart } from "../utils/createCart.js";
import { openCart } from "../utils/openCart.js";
import { closeModal } from "../utils/closeModal.js";

import { createUserList } from "../utils/createUserList.js";

const cartBtn = document.querySelector("#cartBtn");

document.addEventListener("DOMContentLoaded", function () {
  createUserList();

  createCart();

  cartBtn.addEventListener("click", function () {
    openCart();
  });

  window.addEventListener("click", function (event) {
    closeModal(event);
  });
});

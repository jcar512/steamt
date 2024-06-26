import { loadCards } from "./loadCards.js";
import { totalPriceSum } from "./totalPriceSum.js";

import { CartCard } from "../js/modules/cartCard.js";

export function openCart() {
  const cartCardContainer = document.querySelector("#cartCardContainer");
  const cartTotalPrice = document.querySelector("#cartTotalPrice");
  const cartModal = document.querySelector("#cartModal");

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  cartCardContainer.replaceChildren();

  loadCards(cartItems, cartCardContainer, CartCard);

  cartTotalPrice.innerText = `UYU ${totalPriceSum(cartItems)}`;

  cartModal.style.display = "block";
}

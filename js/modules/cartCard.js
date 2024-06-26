import { totalPriceSum } from "../../utils/totalPriceSum.js";

import { Card } from "./card.js";

export class CartCard extends Card {
  createCartCard() {
    /* --- Card --- */
    const card = document.createElement("div");
    this.cardContainer.appendChild(card);
    card.id = `cartCard${this.id}`;
    card.classList =
      "flex justify-between bg-slate-900 p-4 rounded-md shadow-2xl";

    /* --- Div para imagen y titulo del juego --- */
    const leftContainer = document.createElement("div");
    card.appendChild(leftContainer);
    leftContainer.classList = "flex space-x-4";

    /* --- Imagen --- */
    const gameImage = document.createElement("img");
    leftContainer.appendChild(gameImage);
    gameImage.src = this.img;
    gameImage.alt = `${this.title}-image`;
    gameImage.classList = "max-h-36 rounded-md";

    /* --- Titulo --- */
    const title = document.createElement("h3");
    leftContainer.appendChild(title);
    title.classList = "text-xl";
    title.innerHTML = this.title;

    /* --- Div para precio y boton de eliminar --- */
    const rightContainer = document.createElement("div");
    card.appendChild(rightContainer);
    rightContainer.classList = "flex flex-col place-self-end";

    /* --- Precio del juego --- */
    const gamePrice = document.createElement("p");
    rightContainer.appendChild(gamePrice);
    gamePrice.classList = "text-lg min-w-24";
    gamePrice.innerText = `UYU ${this.price}`;

    /* --- Boton eliminar --- */
    const deleteCartItem = document.createElement("button");
    rightContainer.appendChild(deleteCartItem);
    deleteCartItem.id = `deleteCartItem${this.id}`;
    deleteCartItem.value = this.id;
    deleteCartItem.classList =
      "mt-4 place-self-end bg-red-900 hover:bg-red-700 rounded p-2 ease-in-out duration-500";
    deleteCartItem.type = "button";

    deleteCartItem.addEventListener("click", function () {
      const cartTotalPrice = document.querySelector("#cartTotalPrice");

      const cartItems = JSON.parse(localStorage.getItem("cartItems"));

      const newList = cartItems.filter(
        (game) => game.id !== parseInt(this.value),
      );

      localStorage.setItem("cartItems", JSON.stringify(newList));

      cartTotalPrice.innerText = `UYU ${totalPriceSum(newList)}`;

      card.remove();
    });

    /* --- Icono para el boton eliminar --- */
    const deleteIcon = document.createElement("img");
    deleteCartItem.appendChild(deleteIcon);
    deleteIcon.src = "../images/icons/trash-2.svg";
    deleteIcon.alt = "deleteIcon";
  }
}

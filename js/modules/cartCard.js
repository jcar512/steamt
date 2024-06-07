import { Card } from "./card";

export class CartCard extends Card {
  createCartCard() {
    /* --- Card --- */
    const card = document.createElement("div");
    this.cardContainer.appendChild(card);
    card.id = `cartCard${this.id}`;
    card.classList = "bg-slate-900 p-4 rounded-md shadow-2xl";

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
    title.classList = "text-2xl";
    title.innerHTML = this.title;

    /* --- Div para precio y boton de eliminar --- */
    const rightContainer = document.createElement("div");
    card.appendChild(rightContainer);
    rightContainer.classList = "flex flex-col place-self-end";

    /* --- Precio del juego --- */
    const gamePrice = document.createElement("p");
    rightContainer.appendChild(gamePrice);
    gamePrice.classList = "text-xl";
    gamePrice.innerText = this.price;

    /* --- Boton eliminar --- */
    const deleteCartItem = document.createElement("button");
    rightContainer.appendChild(deleteCartItem);
    deleteCartItem.classList =
      "mt-4 place-self-end bg-red-900 hover:bg-red-700 rounded p-2 ease-in-out duration-500";
    deleteCartItem.type = "button";

    /* --- Icono para el boton eliminar --- */
    const deleteIcon = document.createElement("img");
    deleteCartItem.appendChild(deleteIcon);
    deleteIcon.src = "images/icons/trash-2.svg";
    deleteIcon.alt = "deleteIcon";
  }
}

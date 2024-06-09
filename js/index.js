import { defaultGameList } from "../utils/defaultGameList.js";

import { Card } from "./modules/card.js";
import { CartCard } from "./modules/cartCard.js";

const cardContainer = document.querySelector("#cardContainer");
const cartCardContainer = document.querySelector("#cartCardContainer");
const searchInput = document.querySelector("#searchInput");
const cartTotalPrice = document.querySelector("#cartTotalPrice")
const cartBtn = document.querySelector("#cartBtn");
const cartModal = document.querySelector("#cartModal");

function loadCards(list, cardContainer) {
  //Ordeno por orden alfabetico de los titulos
  const orderedList = list.sort((a, b) => a.title.localeCompare(b.title));

  //uso {id, title, description, price, categories, img} en lugar de ===> (elemento) elemento.id, elemento.img, etc...
  //para hacerlo mas intuitivo, se le llama destructurar
  orderedList.forEach(({ id, title, description, price, categories, img }) => {
    const card = new Card(
      id,
      cardContainer,
      title,
      description,
      price,
      categories,
      img,
    );

    card.createCard();
  }); //uso forEach para loopear a traves de gameList y generar una card por cada juego
}

function loadCartCards(list, cardContainer) {
  //Ordeno por orden alfabetico de los titulos
  const orderedList = list.sort((a, b) => a.title.localeCompare(b.title));

  //uso {id, title, description, price, categories, img} en lugar de ===> (elemento) elemento.id, elemento.img, etc...
  //para hacerlo mas intuitivo, se le llama destructurar
  orderedList.forEach(({ id, title, description, price, categories, img }) => {
    const card = new CartCard(
      id,
      cardContainer,
      title,
      description,
      price,
      categories,
      img,
    );

    card.createCartCard();
  }); //uso forEach para loopear a traves de gameList y generar una card por cada juego
}

function totalPriceSum(list) {
  const totalPrice = list.reduce((previous, current) => {
    return previous + current.price
  }, 0)

  return totalPrice > 3 ? (totalPrice * 0.85).toFixed(2) : totalPrice;
}

function searchByName(name) {
  const newGameList = gameList.filter((game) =>
    game.title.toLowerCase().includes(name),
  );

  cardContainer.replaceChildren();

  loadCards(newGameList, cardContainer);
}

document.addEventListener("DOMContentLoaded", function() {
  let gameList

  if (JSON.parse(localStorage.getItem("gameList"))) {
    gameList = JSON.parse(localStorage.getItem("gameList"));
  } else {
    gameList = defaultGameList
    localStorage.setItem("gameList", JSON.stringify(defaultGameList))
  }

  loadCards(gameList, cardContainer);

  cartBtn.addEventListener("click", function() {
    //Abre el carrito
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartCardContainer.replaceChildren();

    loadCartCards(cartItems, cartCardContainer);

    cartTotalPrice.innerText = `UYU ${totalPriceSum(cartItems)}`

    cartModal.style.display = "block";
  });

  window.addEventListener("click", function(event) {
    //Si se hace click fuera del modal se cierra
    if (event.target.id.includes("modal") || event.target.id === "cartModal") {
      event.target.style.display = "none";
    }
  });

  searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") searchByName(searchInput.value);
  });
});

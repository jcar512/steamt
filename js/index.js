import { Card } from "./modules/card.js";
import { gameList } from "./modules/utils/gameList.js";

const cardContainer = document.querySelector("#cardContainer");
const searchInput = document.querySelector("#searchInput");
const cartBtn = document.querySelector("#cartBtn");
const cart = document.querySelector("#cart");

function loadCards(list) {
  //Ordeno por orden alfabetico de los titulos
  const orderedList = list.sort((a, b) => a.title.localeCompare(b.title));

  //uso {id, title, description, price, categories, img} en lugar de ===> (elemento) elemento.id, elemento.img, etc...
  //para hacerlo mas intuitivo, se le llama destructurar
  orderedList.forEach(({ id, title, description, price, categories, img }) => {
    const card = new Card(id, title, description, price, categories, img);
    card.createCard();
  }); //uso forEach para loopear a traves de gameList y generar una card por cada juego
}

function searchByName(name) {
  const newGameList = gameList.filter((game) =>
    game.title.toLowerCase().includes(name),
  );

  cardContainer.replaceChildren();

  loadCards(newGameList);
}

document.addEventListener("DOMContentLoaded", function() {
  loadCards(gameList);

  cartBtn.addEventListener("click", function() {
    //Abre el carrito
    cart.style.display = "flex";
  });

  window.addEventListener("click", function(event) {
    //Si se hace click fuera del modal se cierra
    if (event.target.id.includes("modal") || event.target.id === "cart") {
      event.target.style.display = "none";
    }
  });

  searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") searchByName(searchInput.value);
  });
});

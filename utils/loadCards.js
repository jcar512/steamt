import { Card } from "../js/modules/card.js";
import { CartCard } from "../js/modules/cartCard.js";

export function loadCards(list, cardContainer, className) {
  //Ordeno por orden alfabetico de los titulos
  const orderedList = list.sort((a, b) => a.title.localeCompare(b.title));

  //uso {id, title, description, price, categories, img} en lugar de ===> (elemento) elemento.id, elemento.img, etc...
  //para hacerlo mas intuitivo, se le llama destructurar
  orderedList.forEach(({ id, title, description, price, categories, img }) => {
    const card = new className(
      id,
      cardContainer,
      title,
      description,
      price,
      categories,
      img,
    );

    if (className === Card) {
      card.createCard();
    } else if (className === CartCard) {
      card.createCartCard();
    }
  }); //uso forEach para loopear a traves de gameList y generar una card por cada juego
}

import { Alert } from "./alert.js";

export class Card {
  id;
  cardContainer;
  title;
  description;
  price;
  categories;
  img;

  constructor(id, cardContainer, title, description, price, categories, img) {
    this.id = id;
    this.cardContainer = cardContainer;
    this.title = title;
    this.description = description;
    this.price = price;
    this.categories = categories;
    this.img = img;
  }

  createCard() {
    /* --- Card --- */
    const card = document.createElement("div"); //creo un div por cada loop
    this.cardContainer.appendChild(card); //meto el div recien creado dentro del cardContainer
    card.id = `card${this.id}`; // le asigno una id a ese div
    card.classList = "max-w-96 shadow-2xl rounded-md";

    /* --- Imagen del juego --- */
    const image = document.createElement("img");
    card.appendChild(image); //meto el img recien creado dentro del div recien creado
    image.src = this.img; //creo un img y le paso la ruta de la imagen del elemento actual
    image.alt = `${this.title}-image`;
    image.classList = "rounded-t-md";

    /* --- Div para informacion del juego --- */
    const infoContainer = document.createElement("div");
    card.appendChild(infoContainer);
    infoContainer.classList = "flex flex-col justify-between p-2";

    /* --- Titulo --- */
    const gameTitle = document.createElement("h3");
    infoContainer.appendChild(gameTitle);
    gameTitle.classList = "text-2xl xl:h-16 lg:h-24 h-16 mb-2";
    gameTitle.innerText = this.title;

    /* --- Div para el precio y botones --- */
    const priceContainer = document.createElement("div");
    infoContainer.appendChild(priceContainer);
    priceContainer.classList = "flex justify-between items-center";

    /* --- Precio del juego --- */
    const gamePrice = document.createElement("p");
    priceContainer.appendChild(gamePrice);
    gamePrice.innerText = `UYU ${this.price}`;

    /*--- Div para los botones de la card ---*/
    const buttonsContainer = document.createElement("div");
    priceContainer.appendChild(buttonsContainer);
    buttonsContainer.classList = "flex space-x-2";

    /* --- Boton para mostrar la descripcion del juego --- */
    const infoButton = document.createElement("button");
    buttonsContainer.appendChild(infoButton);
    infoButton.classList =
      "bg-green-900 hover:bg-green-700 rounded p-2 ease-in-out duration-500";

    /* --- Icono lupa */
    const lensIcon = document.createElement("img");
    infoButton.appendChild(lensIcon);
    lensIcon.src = "images/icons/zoom-in.svg";

    /* --- Boton para agregar al carrito --- */
    const buyButton = document.createElement("button");
    buttonsContainer.appendChild(buyButton);
    buyButton.id = `addGame${this.id}`
    buyButton.classList =
      "relative bg-green-900 hover:bg-green-700 rounded p-2 ease-in-out duration-500";

    buyButton.addEventListener("click", function() {
      //Agregar datos de juego a local storage, en caso de que se encuentre el id no se realiza la accion
      const gameList = JSON.parse(localStorage.getItem("gameList"));

      const game = gameList.find((game) => this.id === `addGame${game.id}`);

      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      const itemAlreadyInCart = cartItems.find((item) => item.id === game.id);

      if (itemAlreadyInCart) {
        console.log("already in cart");
        const alertModal = new Alert("El juego ya se encuenta en el carrito", "secondary");
        alertModal.setAlertBgColor();
        //alertModal.showAlert();
        alertModal.removeAlert();
      } else {
        cartItems.push(game);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        const alertModal = new Alert("El juego ha sido agregado al carrito", "primary");
        //alertModal.showAlert();
        alertModal.setAlertBgColor();
        alertModal.removeAlert();
      }
    });

    /* ---Icono para boton de agregar al carrito */
    const buyButtonText = document.createElement("span");
    buyButton.appendChild(buyButtonText);
    buyButtonText.innerText = "+";
    buyButtonText.classList =
      "absolute -top-2 right-0 text-xl text-white font-bold";

    const cartIcon = document.createElement("img");
    buyButton.appendChild(cartIcon);
    cartIcon.src = "images/icons/shopping-cart.svg";

    /* ------------- Modal ------------- */

    const modal = document.createElement("div");
    this.cardContainer.appendChild(modal);
    modal.id = `modal${this.id}`;
    modal.classList =
      "hidden backdrop-opacity-20 backdrop-invert fixed top-0 left-0 z-10 w-full h-full";

    /*----Mostrar modal----*/
    infoButton.addEventListener("click", function() {
      /*  Hago que se muestre el modal al hacer click en cada infoButton cambiando
      el display de none a flex  */
      modal.style.display = "flex";
    });

    /*----Card del modal----*/
    const modalCard = document.createElement("div");
    modal.appendChild(modalCard);
    modalCard.classList =
      "mx-auto mt-32 mb-auto max-w-96 shadow-2xl bg-slate-900 rounded-md";

    /*----Imagen del modal----*/
    const descriptionImage = document.createElement("img");
    modalCard.appendChild(descriptionImage);
    descriptionImage.src = this.img;
    descriptionImage.alt = "descriptionImage";
    descriptionImage.classList = "rounded-t-md";

    const descriptionContainer = document.createElement("div");
    modalCard.appendChild(descriptionContainer);
    descriptionContainer.classList = "p-8";

    /*----Descripcion----*/
    const gameDescription = document.createElement("p");
    descriptionContainer.appendChild(gameDescription);
    gameDescription.classList = "text-lg";
    gameDescription.innerText = this.description;

    /*----Categorias----*/
    const gameCategories = document.createElement("p");
    descriptionContainer.appendChild(gameCategories);
    gameCategories.classList = "text-lg font-bold mt-5";
    gameCategories.innerText = `Género: ${this.categories.join(", ")}`;
  }
}

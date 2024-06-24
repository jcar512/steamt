import { defaultGameList } from "../utils/defaultGameList.js";

const crudFormAdd = document.querySelector("#crudFormAdd");
const crudFormModify = document.querySelector("#crudFormModify");
const crudFormDelete = document.querySelector("#crudFormDelete");
const gameIdModify = document.querySelector("#gameIdModify");

function addNewGame(gameList) {
  let gameId = 1;

  let idIsAlreadyUsed = gameList.find((game) => game.id === gameId);

  while (idIsAlreadyUsed) {
    gameId++;
    idIsAlreadyUsed = gameList.find((game) => game.id === gameId);
  }

  const formData = new FormData(crudFormAdd);

  const area = formData.get("categories");
  const lines = area
    .replace(/\r\n/g, "\n")
    .split("\n")
    .filter((line) => line); //https://stackoverflow.com/a/59897290

  console.log(formData.get("gameImg"));

  const fileReader = new FileReader();

  fileReader.readAsDataURL(formData.get("gameImg"));

  fileReader.addEventListener("load", function () {
    const url = fileReader.result;

    const game = {
      id: gameId,
      title: formData.get("title"),
      description: formData.get("description"),
      price: parseInt(formData.get("price")),
      categories: lines,
      img: url,
    };

    gameList.push(game);

    localStorage.setItem("gameList", JSON.stringify(gameList));

    console.log(gameList);
  });
}

function modifyGame(gameList) {
  const formData = new FormData(crudFormModify);

  const area = formData.get("categories");
  const lines = area
    .replace(/\r\n/g, "\n")
    .split("\n")
    .filter((line) => line); //https://stackoverflow.com/a/59897290

  console.log(formData.get("gameImg"));

  const fileReader = new FileReader();

  fileReader.readAsDataURL(formData.get("gameImg"));

  fileReader.addEventListener("load", function () {
    const url = fileReader.result;

    const game = {
      id: parseInt(gameIdModify.value),
      title: formData.get("title"),
      description: formData.get("description"),
      price: parseInt(formData.get("price")),
      categories: lines,
      img: url,
    };

    gameList.push(game);

    localStorage.setItem("gameList", JSON.stringify(gameList));

    console.log(gameList);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  let gameList = JSON.parse(localStorage.getItem("gameList")) || [];

  if (gameList.length === 0) gameList = defaultGameList;

  crudFormAdd.addEventListener("submit", function (event) {
    event.preventDefault();
    addNewGame(gameList);
  });

  crudFormModify.addEventListener("submit", function () {});

  crudFormDelete.addEventListener("submit", function () {});

  gameIdModify.addEventListener("change", function () {
    const game = gameList.find(
      (game) => game.id === parseInt(gameIdModify.value),
    );

    console.log(game);

    const title = document.querySelector("#titlePut");
    title.value = game.title;

    const description = document.querySelector("#descriptionPut");
    description.value = game.description;

    const price = document.querySelector("#pricePut");
    price.value = game.price;

    const categories = document.querySelector("#categoriesPut");
    categories.value = game.categories;
  });
});

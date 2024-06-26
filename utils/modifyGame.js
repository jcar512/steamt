import { Game } from "../js/modules/game.js";

export function updateForm(gameList) {
  const gameIdModify = document.querySelector("#gameIdModify");

  const game = gameList.find(
    (game) => game.id === parseInt(gameIdModify.value),
  );

  const inputs = document.querySelectorAll(".disabledInput");

  if (!game) {
    inputs.forEach((input) => {
      input.disabled = true;
      input.value = "";
    });
  } else {
    inputs.forEach((input) => {
      input.disabled = false;
    });

    const gameImg = document.querySelector("#gameImgPut");
    gameImg.value = "";

    const title = document.querySelector("#titlePut");
    title.value = game.title;

    const description = document.querySelector("#descriptionPut");
    description.value = game.description;

    const price = document.querySelector("#pricePut");
    price.value = game.price;

    const categories = document.querySelector("#categoriesPut");
    categories.value = game.categories;
  }
}

export function modifyGame(gameList, form) {
  const gameBefore = gameList.find(
    (game) => game.id === parseInt(gameIdModify.value),
  );

  const formData = new FormData(form);

  const area = formData.get("categoriesPut");
  const lines = area
    .replace(/\r\n/g, "\n")
    .split("\n")
    .filter((line) => line); //https://stackoverflow.com/a/59897290

  const img = formData.get("gameImg");

  if (img) {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(img);

    fileReader.addEventListener("load", function () {
      const imgURL = fileReader.result;

      const game = new Game(
        parseInt(gameIdModify.value),
        formData.get("titlePut"),
        formData.get("descriptionPut"),
        parseInt(formData.get("pricePut")),
        lines,
        imgURL,
      );

      gameList.splice(indexOf(gameBefore), 1, game);

      localStorage.setItem("gameList", JSON.stringify(gameList));
    });
  } else {
    const game = new Game(
      parseInt(gameIdModify.value),
      formData.get("titlePut"),
      formData.get("descriptionPut"),
      parseInt(formData.get("pricePut")),
      lines,
      gameBefore.img,
    );

    console.log(game);

    gameList.splice(gameList.indexOf(gameBefore), 1, game);

    localStorage.setItem("gameList", JSON.stringify(gameList));
  }
}

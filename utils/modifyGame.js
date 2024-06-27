import { confirmModal } from "./confirmModal.js";

import { Alert } from "../js/modules/alert.js";
import { Game } from "../js/modules/game.js";

export function updateForm(gameList) {
  const gameId = document.querySelector("#modifySelect").value;

  const game = gameList.find((game) => game.id === parseInt(gameId));

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
  const gameSelected = document.querySelector("#modifySelect");

  const gameBefore = gameList.find(
    (game) => game.id === parseInt(gameSelected.value),
  );

  const formData = new FormData(form);

  const area = formData.get("categoriesPut");
  const lines = area
    .replace(/\r\n/g, "\n")
    .split("\n")
    .filter((line) => line); //https://stackoverflow.com/a/59897290

  const img = formData.get("gameImg");

  confirmModal(`Seguro que desea modificar ${formData.get("titlePut")}`).then(
    (confirmed) => {
      if (confirmed) {
        if (img) {
          const fileReader = new FileReader();

          fileReader.readAsDataURL(img);

          fileReader.addEventListener("load", function () {
            const imgURL = fileReader.result;

            const game = new Game(
              gameBefore.id,
              formData.get("titlePut"),
              formData.get("descriptionPut"),
              parseInt(formData.get("pricePut")),
              lines,
              imgURL,
            );

            gameList.splice(indexOf(gameBefore), 1, game);

            localStorage.setItem("gameList", JSON.stringify(gameList));

            gameSelected.value = "default";
            updateForm(gameList);

            const alert = new Alert(
              `${game.title}
            ha sido modificado!`,
              "primary",
            );
            alert.setAlertBgColor();
            alert.removeAlert();
          });
        } else {
          const game = new Game(
            gameBefore.id,
            formData.get("titlePut"),
            formData.get("descriptionPut"),
            parseInt(formData.get("pricePut")),
            lines,
            gameBefore.img,
          );

          gameList.splice(gameList.indexOf(gameBefore), 1, game);

          localStorage.setItem("gameList", JSON.stringify(gameList));

          gameSelected.value = "default";
          updateForm(gameList);

          const alert = new Alert(
            `${game.title}
          ha sido modificado!`,
            "primary",
          );
          alert.setAlertBgColor();
          alert.removeAlert();
        }
      }
    },
  );
}

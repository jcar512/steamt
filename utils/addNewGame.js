import { confirmModal } from "./confirmModal.js";

import { Alert } from "../js/modules/alert.js";
import { Game } from "../js/modules/game.js";

export function addNewGame(gameList, form) {
  let gameId = 1;

  let idIsAlreadyUsed = gameList.find((game) => game.id === gameId);

  while (idIsAlreadyUsed) {
    gameId++;
    idIsAlreadyUsed = gameList.find((game) => game.id === gameId);
  }

  const formData = new FormData(form);

  const area = formData.get("categories");
  const lines = area
    .replace(/\r\n/g, "\n")
    .split("\n")
    .filter((line) => line);

  const img = formData.get("gameImg");

  confirmModal(`Seguro que desea añadir ${formData.get("title")}`).then(
    (confirmed) => {
      if (confirmed) {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(img);

        fileReader.addEventListener("load", function () {
          const imgURL = fileReader.result;

          const game = new Game(
            gameId,
            formData.get("title"),
            formData.get("description"),
            parseInt(formData.get("price")),
            lines,
            imgURL,
          );

          gameList.push(game);

          const gameImg = document.querySelector("#gameImg");
          gameImg.value = "";

          const title = document.querySelector("#title");
          title.value = "";

          const description = document.querySelector("#description");
          description.value = "";

          const price = document.querySelector("#price");
          price.value = "";

          const categories = document.querySelector("#categories");
          categories.value = "";

          localStorage.setItem("gameList", JSON.stringify(gameList));

          const alert = new Alert(
            `${game.title} 
            ha sido añadido!`,
            "primary",
          );
          alert.setAlertBgColor();
          alert.removeAlert();
        });
      }
    },
  );
}

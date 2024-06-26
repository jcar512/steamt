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
    .filter((line) => line); //https://stackoverflow.com/a/59897290

  const img = formData.get("gameImg");

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

    localStorage.setItem("gameList", JSON.stringify(gameList));
  });
}

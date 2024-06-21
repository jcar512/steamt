const crudForm = document.querySelector("#crudForm");

function addNewGame() {
  const gameList = JSON.parse(localStorage.getItem("gameList"));

  let gameId = 1;

  let idIsAlreadyUsed = gameList.find((game) => game.id === gameId);

  while (idIsAlreadyUsed) {
    gameId++;
    idIsAlreadyUsed = gameList.find((game) => game.id === gameId);
  }

  const formData = new FormData(crudForm);

  const area = formData.get("categories");
  const lines = area
    .replace(/\r\n/g, "\n")
    .split("\n")
    .filter((line) => line); //https://stackoverflow.com/a/59897290

  console.log(lines);
  const game = {
    id: gameId,
    title: formData.get("title"),
    description: formData.get("description"),
    price: formData.get("price"),
    categories: lines,
    img: formData.get("gameImg"),
  };

  gameList.push(game);
  console.log(gameList);
}

document.addEventListener("DOMContentLoaded", function () {
  crudForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addNewGame();
  });
});

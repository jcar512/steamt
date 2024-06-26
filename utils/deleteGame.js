export function enableDeleteButton(gameList, formInput) {
  const game = gameList.find((game) => game.id === parseInt(formInput.value));

  const confirmDelete = document.querySelector("#confirmDelete");

  if (!game) {
    confirmDelete.disabled = true;
  } else {
    confirmDelete.disabled = false;
  }
}

export function deleteGame(gameList, formInput) {
  const game = gameList.find((game) => game.id === parseInt(formInput.value));

  gameList.splice(gameList.indexOf(game), 1);

  localStorage.setItem("gameList", JSON.stringify(gameList));
}

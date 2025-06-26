export function updateSelectDropdown(gameList, selectInput) {
  gameList.forEach((game) => {
    const option = document.createElement("option");
    selectInput.appendChild(option);

    option.value = game.id;
    option.innerText = `${game.title}`;
  });
}

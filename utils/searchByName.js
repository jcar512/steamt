export function searchByName(name) {
  const newGameList = gameList.filter((game) =>
    game.title.toLowerCase().includes(name),
  );

  cardContainer.replaceChildren();

  loadCards(newGameList, cardContainer, Card);
}

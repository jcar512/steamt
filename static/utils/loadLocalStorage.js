import { defaultGameList } from "./defaultGameList.js";

export function loadLocalStorage() {
  let gameList = JSON.parse(localStorage.getItem("gameList")) || [];

  if (gameList.length === 0) {
    gameList = defaultGameList;
    localStorage.setItem("gameList", JSON.stringify(gameList));
  }
}

import { confirmModal } from "./confirmModal.js";
import { updateSelectDropdown } from "./updateSelectDropdown.js";

import { Alert } from "../js/modules/alert.js";

export function enableDeleteButton(gameList, formSelect) {
  const game = gameList.find((game) => game.id === parseInt(formSelect.value));

  const confirmDelete = document.querySelector("#confirmDelete");

  if (!game) {
    confirmDelete.disabled = true;
  } else {
    confirmDelete.disabled = false;
  }
}

export function deleteGame(gameList, formSelect) {
  const game = gameList.find((game) => game.id === parseInt(formSelect.value));

  const confirmDelete = document.querySelector("#confirmDelete");

  /* ---------------------------------------------------------------------------------------------- */
  confirmModal(`Seguro que desea eliminar ${game.title}?`).then((confirmed) => {
    if (confirmed) {
      gameList.splice(gameList.indexOf(game), 1);

      confirmDelete.disabled = true;

      localStorage.setItem("gameList", JSON.stringify(gameList));

      formSelect.replaceChildren();

      const defaultOption = document.createElement("option");
      defaultOption.value = "default";
      defaultOption.innerText = "-- Seleccionar juego --";
      formSelect.appendChild(defaultOption);

      formSelect.value = "default";

      updateSelectDropdown(gameList, formSelect);

      const alert = new Alert(
        `${game.title} 
        ha sido eliminado!`,
        "secondary"
      );
      alert.setAlertBgColor();
      alert.removeAlert();
    }
  });
  /* ---------------------------------------------------------------------------------------------- */
}

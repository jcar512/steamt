export function confirmModal(confirmMessage) {
  const modal = document.querySelector("#confirmModal");
  const confirmBtn = document.querySelector("#confirmButton");
  const cancelBtn = document.querySelector("#cancelButton");
  const modalText = document.querySelector("#confirmModalText");

  return new Promise((resolve) => {
    modalText.innerText = `${confirmMessage}`;

    modal.classList.replace("opacity-0", "opacity-100");
    modal.classList.replace("invisible", "visible");

    confirmBtn.addEventListener("click", function () {
      modal.classList.replace("opacity-100", "opacity-0");
      modal.classList.replace("visible", "invisible");
      resolve(true);
    });

    cancelBtn.addEventListener("click", function () {
      modal.classList.replace("opacity-100", "opacity-0");
      modal.classList.replace("visible", "invisible");
      resolve(false);
    });
  });
}

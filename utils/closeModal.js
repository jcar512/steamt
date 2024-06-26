export function closeModal(event) {
  const cartModal = document.querySelector("#cartModal");

  //Si se hace click fuera del modal se cierra
  if (event.target.id.includes("modal") || event.target.id === "cartModal") {
    event.target.classList.replace("opacity-100", "opacity-0");
    event.target.classList.replace("visible", "invisible");
  } else if (
    event.target.id === "cart" ||
    event.target.id === "cartPriceContainer"
  ) {
    cartModal.classList.replace("opacity-100", "opacity-0");
    cartModal.classList.replace("visible", "invisible");
  }
}

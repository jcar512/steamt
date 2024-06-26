export function closeModal(event) {
  const cartModal = document.querySelector("#cartModal");

  //Si se hace click fuera del modal se cierra
  if (event.target.id.includes("modal") || event.target.id === "cartModal") {
    event.target.style.display = "none";
  } else if (
    event.target.id === "cart" ||
    event.target.id === "cartPriceContainer"
  ) {
    cartModal.style.display = "none";
  }
}

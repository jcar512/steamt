export function createCart() {
  const cartModal = document.createElement("div");
  cartModal.id = "cartModal";
  cartModal.classList =
    "invisible opacity-0 ease-in-out transition-all duration-500 backdrop-blur-sm bg-white/30 fixed top-0 left-0 z-10 w-full h-full";
  document.querySelector("main").appendChild(cartModal);

  const cart = document.createElement("div");
  cart.id = "cart";
  cart.classList = "flex mx-auto mt-32 mb-auto w-3/4 h-3/4";
  cartModal.appendChild(cart);

  const cartCardContainer = document.createElement("div");
  cartCardContainer.id = "cartCardContainer";
  cartCardContainer.classList = "overflow-auto space-y-4 pr-3 w-4/6 mr-8";
  cart.appendChild(cartCardContainer);

  const cartPriceContainer = document.createElement("div");
  cartPriceContainer.id = "cartPriceContainer";
  cartPriceContainer.classList = "w-2/6";
  cart.appendChild(cartPriceContainer);

  const div = document.createElement("div");
  div.classList = "bg-slate-900 rounded-md p-4";
  cartPriceContainer.appendChild(div);

  const textContainer = document.createElement("div");
  textContainer.classList = "flex justify-between mb-20";
  div.appendChild(textContainer);

  const text = document.createElement("p");
  text.innerText = "Total estimado:";
  textContainer.appendChild(text);

  const totalPriceContainer = document.createElement("div");
  textContainer.appendChild(totalPriceContainer);

  const totalPrice = document.createElement("p");
  totalPrice.id = "cartTotalPrice";
  totalPrice.classList = "text-xl font-bold";
  totalPriceContainer.appendChild(totalPrice);

  const totalPriceWithDiscount = document.createElement("p");
  totalPriceWithDiscount.id = "cartTotalPriceWithDiscount";
  totalPriceWithDiscount.classList = "invisible text-xl font-bold";
  totalPriceContainer.appendChild(totalPriceWithDiscount);

  const buttonContainer = document.createElement("div");
  div.appendChild(buttonContainer);

  const button = document.createElement("button");
  button.id = "confirmPurchaseButton";
  button.classList =
    "w-full font-bold bg-green-900 hover:bg-green-700 rounded p-2 ease-in-out duration-500";
  button.innerText = "Finalizar compra";
  buttonContainer.appendChild(button);

  button.addEventListener("click", function () {
    console.log("finzalizar compra");
  });
}

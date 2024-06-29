export function totalSum(list) {
  const totalSum = list.reduce((previous, current) => {
    return previous + current.price;
  }, 0);

  return totalSum;
}

export function totalSumWithDiscount(list) {
  const totalSumWithDiscount = (totalSum(list) * 0.85).toFixed(2);

  return totalSumWithDiscount;
}

export function setCartPrice(list) {
  const cartTotalPrice = document.querySelector("#cartTotalPrice");
  const cartTotalPriceWithDiscount = document.querySelector(
    "#cartTotalPriceWithDiscount"
  );

  if (list.length > 3) {
    cartTotalPrice.classList.add("line-through");
    cartTotalPrice.innerText = `UYU ${totalSum(list)}`;
    cartTotalPriceWithDiscount.classList.replace("invisible", "visible");
    cartTotalPriceWithDiscount.innerText = `UYU ${totalSumWithDiscount(list)}`;
  } else {
    cartTotalPriceWithDiscount.classList.replace("visible", "invisible");
    cartTotalPrice.classList.remove("line-through");
    cartTotalPrice.innerText = `UYU ${totalSum(list)}`;
  }
}

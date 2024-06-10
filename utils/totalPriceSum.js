export function totalPriceSum(list) {
  const totalSum = list.reduce((previous, current) => {
    return previous + current.price;
  }, 0);

  const finalPrice = list.length > 3 ? (totalSum * 0.85).toFixed(2) : totalSum;

  return finalPrice;
}

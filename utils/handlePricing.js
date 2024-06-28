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

export function listSales() {
  const salesList = document.querySelector("#salesContainer");

  const soldGames = JSON.parse(localStorage.getItem("sales"));

  if (soldGames) {
    soldGames.forEach((sale) => {
      const li = document.createElement("li");
      salesList.appendChild(li);
      li.innerText = `Juego: ${sale.title} | Ventas: ${sale.quantity} | Total recaudado: ${sale.revenue} `;
    });
  }
}

export function totalRevenue() {
  const totalRevenue = document.querySelector("#totalRevenue");

  const soldGames = JSON.parse(localStorage.getItem("sales"));

  if (soldGames) {
    const totalRevenueSum = soldGames.reduce((previous, current) => {
      return previous + current.revenue;
    }, 0);

    totalRevenue.innerText = `UYU ${totalRevenueSum}`;
  }
}

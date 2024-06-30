export function listSales() {
  const salesList = document.querySelector("#salesContainer");

  const soldGames = JSON.parse(localStorage.getItem("sales"));

  if (soldGames) {
    const li = document.createElement("li");
    salesList.appendChild(li);
    li.classList = "grid grid-cols-3 space-x-3 border-b";

    const p = document.createElement("p");
    li.appendChild(p);
    p.classList = "border-r text-center font-bold";
    p.innerText = "Título";

    const p2 = document.createElement("p");
    li.appendChild(p2);
    p2.classList = "border-r text-center font-bold";
    p2.innerText = "Ventas";

    const p3 = document.createElement("p");
    li.appendChild(p3);
    p3.classList = "text-center font-bold";
    p3.innerText = "Recaudado";

    soldGames.forEach((sale, index) => {
      const li = document.createElement("li");
      salesList.appendChild(li);
      li.classList =
        index === soldGames.length - 1
          ? "grid grid-cols-3 space-x-3"
          : "grid grid-cols-3 space-x-3 border-b";

      const p = document.createElement("p");
      li.appendChild(p);
      p.classList = "border-r text-center";
      p.innerText = sale.title;

      const p2 = document.createElement("p");
      li.appendChild(p2);
      p2.classList = "border-r text-center";
      p2.innerText = sale.quantity;

      const p3 = document.createElement("p");
      li.appendChild(p3);
      p3.classList = "text-center";
      p3.innerText = `UYU ${sale.revenue}`;
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

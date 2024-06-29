import { confirmModal } from "./confirmModal.js";
import { setUser } from "./handleUsers.js";
import { listSales, totalRevenue } from "./handleStatistics.js";

import { Alert } from "../js/modules/alert.js";
import { Sale } from "../js/modules/sale.js";

export function confirmSale() {
  confirmModal("¿Seguro que desea finalizar la compra?").then((confirmed) => {
    if (confirmed) {
      completeSale();

      if (window.location.pathname === "/pages/estadisticas.html") {
        listSales();
        totalRevenue();
      }

      const alert = new Alert("¡Compra exitosa!", "primary");
      alert.setAlertBgColor();
      alert.removeAlert();
    }
  });
}

export function completeSale() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const cartItems = currentUser.cart;
  //Traigo las ventas o creo un array vacio en caso de que no exista ninguna
  const sales = JSON.parse(localStorage.getItem("sales")) || [];

  //Por cada juego del carrito creo una nueva venta, si el carrito tiene mas
  //de tres juegos le aplico el descuento
  const newSales =
    cartItems.length > 3
      ? cartItems.map((game) => {
          return new Sale(
            game.title,
            1,
            Math.round(parseInt(game.price) * 0.85)
          );
        })
      : cartItems.map((game) => {
          return new Sale(game.title, 1, parseInt(game.price));
        });

  //Por cada nueva venta busco si ya se realizo una venta del mismo juego, en
  //caso de que no sea asi agrego el titulo a la lista de ventas, pero si ya
  //existe el titulo solo le sumo a la cantidad vendida y al dinero recaudado
  newSales.forEach((newSale) => {
    const findSale = sales.find((sale) => sale.title === newSale.title);

    if (!findSale) {
      sales.push(newSale);
    } else {
      findSale.quantity++;
      findSale.revenue += newSale.revenue;
    }
  });

  //Vacio el carrito del usuario
  currentUser.cart = [];
  setUser(currentUser);

  localStorage.setItem("sales", JSON.stringify(sales));

  //Cierro el carrito
  cartModal.classList.replace("opacity-100", "opacity-0");
  cartModal.classList.replace("visible", "invisible");
}

export class Sale {
  constructor(title, quantity, revenue) {
    this.title = title;
    this.quantity = quantity;
    this.revenue = revenue;
  }

  showInfo() {
    console.log(`Título: ${this.title}
      Cantidad vendido: ${this.quantity}
      Dinero recaudado: ${this.revenue}`);
  }
}

export class User {
  constructor(id, username, cart) {
    this.id = id;
    this.username = username;
    this.cart = cart;
  }

  showUserInfo() {
    console.log(`Id: ${id}
      Usuario: ${this.username}
        Carrito:`);
    this.cart.forEach((item) => {
      console.log(`${item}`);
    });
  }
}

export class User {
  constructor(username, cart) {
    this.username = username;
    this.cart = cart;
  }

  showUserInfo() {
    console.log(`Usuario: ${this.username}
        Carrito:`);
    this.cart.forEach((item) => {
      console.log(`${item}`);
    });
  }
}

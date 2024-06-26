export class Game {
  constructor(id, title, description, price, categories, img) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.categories = categories;
    this.img = img;
  }

  toString() {
    console.log(`Id: ${this.id}
        Title: ${this.title}
        Description: ${this.description}
        Price: ${this.price}
        Categories: ${this.categories}
        Img: ${this.img}`);
  }
}

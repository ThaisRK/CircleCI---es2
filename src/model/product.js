/* eslint linebreak-style: ["error", "windows"] */

// Para poder ser importado em outro arquivo
export default class Product {
  constructor(description, buyPrice, sellPrice, stock) {
    this.description = description;
    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
    this.stock = stock;
  }
}

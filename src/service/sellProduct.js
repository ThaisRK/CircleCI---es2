/* eslint linebreak-style: ["error", "windows"] */

/**
 * A quantidade vendida pode ser de 1 ou mais unidades;
 * ---> Se estoque ficar negativo, uma exception deve ser lançada
 * ---> O valor de venda não pode ser maior que valor de compra
 *
 * @param {*} product
 * @param {*} amount
 */

// import Product from '../model/product'
// Assim o Product pode ser usado neste arquivo

export default function sellProduct(product, amount) {
  product.stock -= amount;
  return product;
}

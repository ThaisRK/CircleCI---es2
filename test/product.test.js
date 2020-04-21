/* eslint linebreak-style: ["error", "windows"] */

// A quantidade vendida pode ser de 1 ou mais unidades;
import Product from '../src/model/product';
import sell from '../src/service/sellProduct';


test('Deve validar baixa de estoque da venda de 1 unidade', () => {
  // Product(valor de compra, valor de venda, estoque)
  let produto = new Product('celular', 500.00, 900.00, 10);
  sell(produto, 1);
  expect(produto.stock).toBe(9);
});

test('Deve validar baixa de estoque da venda de MAIS DE 1 unidade', () => {
  // Product(valor de compra, valor de venda, estoque)
  let produto = new Product('celular', 500.00, 900.00, 10);
  sell(produto, 3);
  expect(produto.stock).toBe(7);
});


test('Quando uma venda não houver estoque suficiente a transação deverá ser cancelada e o estoque não deverá ser alterado', () => {
  let produto = new Product('celular', 500.00, 900.00, 1);
  sell(produto, 2);
  expect(produto.stock).toBe(produto.stock);
});

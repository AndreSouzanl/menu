import { produtos } from "@/data/dados/data_produtos";

//funcao que busca por categoria
export function filtrarProdutos(categoria) {
  return produtos.filter((produto) => produto.categoria === categoria);
}
// variavel que recebe os pratos entrado quando componente e renderizado
export const produtosEntradas = filtrarProdutos("Entradas");

export function buscarProdutos(textoDigitado) {
  return produtos.filter(
    (prod) =>
      prod.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
      prod.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
  );
}

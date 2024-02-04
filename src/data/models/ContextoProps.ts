export interface ContextoProps {
  carrinho: Array<object>;
  produtoType?: {
    nome: string,
    quantidade: number,
    preco: number
  };
  setCarrinho: (items: Array<object>) => void | (() => []);
  total: () => number;
}
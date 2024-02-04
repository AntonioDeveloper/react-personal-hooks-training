import AdicionarProduto from "@/components/template/AdicionarProduto";
import Carrinho from "@/components/template/Carrinho";
import FinalizarCompra from "@/components/template/FinalizarCompra";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { createContext, useState } from "react";
import { ContextoProps } from "../../data/models/ContextoProps";

export let Contexto = createContext({} as ContextoProps);

export default function () {

  const [carrinho, setCarrinho] = useState<ContextoProps['carrinho']>([]);

  const ctx = {
    carrinho,
    setCarrinho,
    total() {
      const r = carrinho?.reduce((acc: number, produto: any) => acc + produto.preco, 0);
      return r;
    }
  }

  return (
    <Contexto.Provider value={ctx}>
      <Pagina titulo="Loja" subtitulo="Compartilhando informações entre múltiplos componentes com contexto">
        <Flex col gap={4}>
          <Flex gap={4}>
            <AdicionarProduto />
            <FinalizarCompra />
          </Flex>
          <Carrinho />
        </Flex>
      </Pagina >
    </Contexto.Provider>
  )
}
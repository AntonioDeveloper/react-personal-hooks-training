import InputFormatado from "@/components/formulario/InputFormatado";
import BotaoMemoizado from "@/components/template/BotaoMemoizado";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState, useCallback } from "react";

export default function () {

  const [quantidade, setQuantidade] = useState(0);

  const finalizar = useCallback(function (e: any) {
    e.preventDefault();
    window.alert("Compra finalizada!");
    setQuantidade(0);
  }, []);

  return (
    <Pagina titulo="Memoizando Funoes" subtitulo="Entendendo o hook useCallback">
      <Display texto="Quantos produtos você quer?" />
      <form>
        <Flex col center>
          <InputFormatado tipo="number" valor={quantidade} onInput={(e) => setQuantidade(+e.target.value)} />
          <BotaoMemoizado texto="Confirmar" onClick={finalizar}></BotaoMemoizado>
        </Flex>
      </form>
    </Pagina>
  )
}
import InputFormatado from "@/components/formulario/InputFormatado";
import InputFormatadoComReferencia from "@/components/formulario/InputFormatadoComReferencia";
import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useRef } from "react";

export default function () {

  const referencia = useRef<any>();

  function apagar() {
    referencia.current.apagar();
  }

  function textoPadrao() {
    referencia.current.textoPadrao();
  }

  return (<Pagina titulo="Modificando uma referência" subtitulo="Usando useRef e useImperativeHandle">
    <Flex col center>
      <InputFormatadoComReferencia tipo="text" label="Digite o texto" ref={referencia} />
      <Flex center>
        <Botao texto="apagar" onClick={apagar}></Botao>
        <Botao texto="padrão" onClick={textoPadrao}></Botao>
      </Flex>
    </Flex>
  </Pagina>)
}
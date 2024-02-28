import InputFormatado from "@/components/formulario/InputFormatado";
import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function () {

  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [res, setRes] = useState(0);

  console.log(val1, val2, res);
  return (
    <Pagina titulo="Soma com useState" subtitulo="Exemplo de soma com useState">
      <Flex col centerCross>
        <Display texto="Faça uma soma"></Display>
        <Flex center>
          <InputFormatado tipo="number" valor={val1} onInput={(e) => { setVal1(+e.target.value) }} />
          <span className="text-4xl ml-2">+</span>
          <InputFormatado tipo="number" valor={val2} onInput={(e) => { setVal2(+e.target.value) }} />
          <Botao cor="bg-orange-400" texto="=" onClick={
            function () {
              if (val1 > 0 && val2 > 0) {
                return setRes(val1 + val2);
              } else {
                return setRes(-99999999);
              }
            }}
          ></Botao>
        </Flex>
        <Display texto={res} />
      </Flex>
    </Pagina>
  )
}
import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState, useLayoutEffect, useRef } from "react";

export default function () {
  const elementDivRef = useRef<HTMLDivElement>(null);
  const elementDisplayRef = useRef<any>();

  let [cor, setCor] = useState("");
  let [displayTxt, setDisplayTxt] = useState("Clique em Sortear Cor");

  function geraCorAleatoria() {
    const numeroAleatorioHexadecimal = Math.floor(Math.random() * 0xffffff);
    cor = numeroAleatorioHexadecimal.toString(16);
    console.log(cor, `#${cor}`);
    return `#${cor}`;
  }

  useEffect(() => {

    if (elementDivRef.current) {
      if (cor) {
        elementDivRef.current.style.display = "block";
        elementDivRef.current.style.backgroundColor = cor;
        setDisplayTxt("Clique em Apagar cor ou em Sortear cor para nova cor");
      } else {
        setDisplayTxt("Clique em Sortear cor");
        elementDivRef.current.style.display = "none";
      }
    }

  }, [cor]);

  return (
    <Pagina titulo="Gerador de Cor" subtitulo="Criando exemplos mais complexos com useLayoutEffect">
      <Flex>
        <Botao texto="Sortear Cor" onClick={() => { setCor(geraCorAleatoria()) }} />
        <Botao texto="Apagar Cor" onClick={() => { setCor("") }} />
      </Flex>
      <Display texto={displayTxt} />
      <div ref={elementDivRef} className={`h-32 w-32 `}></div>
    </Pagina>
  )
}
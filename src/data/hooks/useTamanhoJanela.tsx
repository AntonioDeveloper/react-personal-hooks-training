import { useEffect, useState } from "react";

let largura: number;
let altura: number;

export default function useTamanhoJanela() {
  const [tamanhoJanela, setTamanhoJanela] = useState({ largura: 0, altura: 0 });

  const windowNotUndefined = typeof window !== undefined;

  useEffect(() => {

    if (windowNotUndefined) {

      window.addEventListener("resize", () => {
        largura = window.innerWidth;
        altura = window.innerHeight;

        return { largura, altura }
      })
    }

    function tamanhoMudou() {
      setTamanhoJanela({ largura, altura });
    }

    window.addEventListener("resize", tamanhoMudou);

    return () => {
      window.removeEventListener("resize", tamanhoMudou);
    }
  }, []);

  function entre(min: number, max: number) {
    return (tamanhoJanela.largura >= min) && (tamanhoJanela.largura < max);
  }

  const dimensoes = {
    sm: entre(640, 768),
    md: entre(768, 1024),
    lg: entre(1024, 1280),
    xl: entre(1280, 1536),
    xl2: entre(1536, Number.MAX_VALUE)
  }

  const tamanhoVerdadeiro = Object.entries(dimensoes).filter((el) => el[1]);

  return tamanhoVerdadeiro[0]?.[0];
}


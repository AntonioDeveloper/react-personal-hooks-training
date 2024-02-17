import { createContext, useEffect, useState } from "react";
import secoesMenu from "../constants/secoesMenu";
import useBoolean from "../hooks/useBoolean";
import useTamanhoJanela from "../hooks/useTamanhoJanela";
import { useRouter } from "next/router";

const ContextoMenu = createContext({} as any);

export function MenuProvider(props: any) {

  const [mini, toggleMini, miniTrue, miniFalse] = useBoolean(false);

  const [secoes, setSecoes] = useState<any>(secoesMenu);

  let tamanho = useTamanhoJanela();

  const router = useRouter();

  useEffect(() => {
    if (tamanho === "md" || tamanho === "sm") {
      miniTrue();
    }
    if (tamanho === "lg" || tamanho === "xl" || tamanho === "2xl") {
      miniFalse();
    }
  }, [tamanho]);

  useEffect(() => {
    setSecoes(() => selecionarItem(router.asPath));
  }, [router.asPath]);

  function selecionarItem(url: string) {
    let novasSecoes = secoes?.map((secao: any) => {
      let novosItens = secao.itens.map((item: any) => {
        return { ...item, selecionado: item.url === url }
      });
      return { ...secao, items: novosItens };
    });
    return novasSecoes;
  }


  return (
    <ContextoMenu.Provider value={{ secoes, mini, toggleMini }}>
      {props.children}
    </ContextoMenu.Provider>
  );
}

export default ContextoMenu;
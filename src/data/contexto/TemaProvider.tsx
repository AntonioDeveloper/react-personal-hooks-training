import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, createContext, useState } from "react";

const ContextoTema = createContext({} as any);

export function TemaProvider(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) {
  const cores = ["blue-500", "red-400", "pink-500", "orange-500", "green-500", "purple-500",
    "yellow-600"];

  const [corDestaque, setCorDestaque] = useState<any>();

  const ctx = { cores, corDestaque, setCorDestaque };

  return (
    <ContextoTema.Provider value={ctx}>
      {props.children}
    </ContextoTema.Provider>
  )
}

export default ContextoTema;

import { useContext } from "react";
import ContextoTema from "../contexto/TemaProvider";

export default function useTema() {
  return useContext(ContextoTema)
}
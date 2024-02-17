import { useContext } from "react"
import ContextoMenu from "../contexto/MenuProvider"

export default function useMenu() {
  return useContext(ContextoMenu);
}
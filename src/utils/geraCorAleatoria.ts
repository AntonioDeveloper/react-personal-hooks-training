import { getRGBColor } from "./convertColorToRGB";

export default function geraCorAleatoria() {
  let cor = "";
  const numeroAleatorioHexadecimal = Math.floor(Math.random() * 0xffffff);
  cor = numeroAleatorioHexadecimal.toString(16);
  return `#${cor}`;
}
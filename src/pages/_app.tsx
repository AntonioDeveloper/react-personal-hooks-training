import "../styles/globals.css";
import type { AppProps } from "next/app";
import { TemaProvider } from "@/data/contexto/TemaProvider";
import { MenuProvider } from "@/data/contexto/MenuProvider";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <TemaProvider>
            <MenuProvider>
                <Component {...pageProps} />
            </MenuProvider>
        </TemaProvider>
    );
}

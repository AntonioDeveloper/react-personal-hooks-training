import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
        { pattern: /^gap-/ },
        { pattern: /^w-/ },
        { pattern: /^h-/ },
        { pattern: /^text-/ },
        { pattern: /^bg-/ },
    ],
    plugins: [require("tailwind-scrollbar")],
    geraCorAleatoria: function () {
        let cor = "";
        const numeroAleatorioHexadecimal = Math.floor(Math.random() * 0xffffff);
        cor = numeroAleatorioHexadecimal.toString(16);
        console.log(cor, `#${cor} hex`);
        return `#${cor}`;
    },
};
module.exports = config;

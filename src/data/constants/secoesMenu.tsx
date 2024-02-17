import { IconNumbers, IconUsers, IconArrowsLeftRight, IconMathGreater, IconLetterCase, IconRefreshAlert, IconSection, IconAppWindow, IconDimensions, IconLock, IconShoppingCart } from "@tabler/icons";

const secoesMenu = [
  {
    titulo: "Essenciais",
    aberta: true,
    itens: [
      {
        titulo: "Contador",
        url: "/essenciais/contador",
        tag: "useState",
        icone: <IconNumbers />
      },
      {
        titulo: "Votação",
        url: "/essenciais/votacao",
        tag: "useState",
        icone: <IconUsers />
      },
      {
        titulo: "Consulta À API",
        url: "/essenciais/consultaAPI",
        tag: "useEffect",
        icone: <IconArrowsLeftRight />
      },
      {
        titulo: "Maior",
        url: "/essenciais/maior",
        tag: "useEffect",
        icone: <IconMathGreater />
      },
      {
        titulo: "Contador de Caracteres",
        url: "/essenciais/contagemCaracters",
        tag: "useEffect",
        icone: <IconLetterCase />
      },
      {
        titulo: "State VS Referência",
        url: "/essenciais/stateVSRef",
        tag: "useRef",
        icone: <IconRefreshAlert />
      },
      {
        titulo: "Referenciando elementos",
        url: "/essenciais/refElemento",
        tag: "useRef",
        icone: <IconSection />
      },
      {
        titulo: "Contagem Caracteres Ref",
        url: "/essenciais/contagemCaracteresRef",
        tag: "useRef",
        icone: <IconLetterCase />
      },
    ],
  },
  {
    titulo: "Personalizados",
    aberta: true,
    itens: [
      {
        titulo: "Modal",
        url: "/personalizados/modal",
        tag: "personalizados",
        icone: <IconAppWindow />
      },
      {
        titulo: "Tamanho Janela",
        url: "/personalizados/tamanhoJanela",
        tag: "personalizados",
        icone: <IconDimensions />
      },
      {
        titulo: "Validando Senha",
        url: "/personalizados/senha",
        tag: "personalizados",
        icone: <IconLock />
      },
    ]
  },
  {
    titulo: "Contexto",
    aberta: true,
    itens: [
      {
        titulo: "Loja",
        url: "/contexto/loja",
        tag: "useContext",
        icone: <IconShoppingCart />
      },
    ]
  },
];

export default secoesMenu;
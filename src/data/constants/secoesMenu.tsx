import { IconNumbers, IconUsers, IconArrowsLeftRight, IconMathGreater, IconLetterCase, IconRefreshAlert, IconSection, IconAppWindow, IconDimensions, IconLock, IconShoppingCart, IconPin, IconForms, IconColorSwatch, IconDatabase } from "@tabler/icons";

const secoesMenu = [
  {
    titulo: "Essenciais",
    aberta: false,
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
    aberta: false,
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
    aberta: false,
    itens: [
      {
        titulo: "Loja",
        url: "/contexto/loja",
        tag: "useContext",
        icone: <IconShoppingCart />
      },
    ]
  },
  {
    titulo: "Outros",
    aberta: true,
    itens: [
      {
        titulo: "Memoizando elementos",
        url: "/outros/memoizacao",
        tag: "useMemo",
        icone: <IconPin />
      },
      {
        titulo: "Memoizando Funçoes",
        url: "/outros/memoizandoFuncoes",
        tag: "useCallback",
        icone: <IconPin />
      },
      {
        titulo: "Formulário 1",
        url: "/outros/formularioImperativeHandle",
        tag: "useImperativeHandle",
        icone: <IconForms />
      },
      {
        titulo: "Gerador de Cor",
        url: "/outros/geradorDeCor",
        tag: "useLayoutEffect",
        icone: <IconColorSwatch />
      },
      {
        titulo: "Soma com State",
        url: "/outros/somaState",
        tag: "useState",
        icone: <IconDatabase />
      },
    ]
  },
];

export default secoesMenu;
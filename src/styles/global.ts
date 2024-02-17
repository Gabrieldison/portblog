// styles.js (ou o nome do seu arquivo de estilos)
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  body {
    background: ${(props) => props.theme["background"]};
    -webkit-font-smoothing: antialiased;
  }

  /* Ajustes para tornar os botões mais responsivos */
  button {
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem; /* Ajuste o padding conforme necessário */
  }

  /* Adicione mais estilos globais conforme necessário */
`;

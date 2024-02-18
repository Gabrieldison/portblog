// styles.js (ou o nome do seu arquivo de estilos)

import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const MainContainer = styled.main`
  max-width: 950px;
  margin: auto;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem; /* Adapte o padding conforme necessário */
  }
`;

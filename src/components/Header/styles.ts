import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  from {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.5rem;

  &:first-child {
    span {
      cursor: pointer;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme["text"]};
      transition: transform 0.3s ease-in-out; /* Transição suave */
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  a {
    height: 20px;
    font-weight: 500;
    text-decoration: none;
    color: ${(props) => props.theme["text"]};
    transition: color 0.3s ease; /* Transição suave de cor */
  }
`;

export const Rotate180 = styled.div<{ isRotated: boolean }>`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out; /* Transição suave */

  /* Aplicação da animação */
  animation: ${(props) => (props.isRotated ? rotateAnimation : "none")};
  transform: ${(props) =>
    props.isRotated ? "rotate(360deg)" : "rotate(130deg)"};
`;

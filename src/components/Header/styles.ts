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
  padding-bottom: 25px;
  padding-top: 25px;
  width: 90%;
  margin: auto;
  margin-bottom: 20px;
`;

export const LogoContainer = styled.span`
  cursor: pointer;
  color: ${(props) => props.theme["links"]};
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const MapContainer = styled.div`
  display: flex;
  gap: 15px;

  a {
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s ease; /* Transição suave de cor */
    color: ${(props) => props.theme["links"]};
  }
`;

export const Divider = styled.span`
  color: ${(props) => props.theme["links"]};
  opacity: 35%;
`;

export const ButtonToggleTheme = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme["text"]};
    transition: transform 0.3s ease-in-out; /* Transição suave */
    color: ${(props) => props.theme["links"]};
  }
`;

export const ContactsLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  a {
    height: 17px;
    color: ${(props) => props.theme["links"]};
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

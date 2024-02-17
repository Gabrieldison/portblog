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
  padding-bottom: 8px;
  padding-top: 25px;
  width: 90%;
  margin: auto;
  margin-bottom: 20px;
  border-bottom: 2px solid ${(props) => props.theme["divider"]};
`;

export const LogoContainer = styled.span`
  cursor: pointer;
  color: ${(props) => props.theme["links"]};

  svg {
    transition: color 0.3s ease; /* Transição suave */

    &:hover {
      color: ${(props) => props.theme["title"]};
    }
  }
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
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    color: ${(props) => props.theme["links"]};
    transition: color 0.3s ease; /* Transição suave de cor */

    &:hover {
      color: ${(props) => props.theme["title"]};
    }
  }
`;

export const Divider = styled.span`
  color: ${(props) => props.theme["divider"]};
`;

export const ButtonToggleTheme = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme["text"]};
    color: ${(props) => props.theme["links"]};
    transition: color 0.3s ease; /* Transição suave */

    &:hover {
      color: ${(props) => props.theme["title"]};
    }
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
    transition: color 0.3s ease; /* Transição suave */

    &:hover {
      color: ${(props) => props.theme["title"]};
    }
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

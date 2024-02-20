import styled from "styled-components";

export const Container = styled.main`
  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;

export const WarningContainer = styled.h1`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme["text"]};
  font-size: 1.5rem;
`;

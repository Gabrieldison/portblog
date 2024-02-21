import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

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

export const LoadingIndicator = styled.div`
  border: 4px solid ${(props) => props.theme["text"]};
  border-top: 4px solid ${(props) => props.theme["divider"]};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${rotate} 1s linear infinite;
  margin: auto;
`;

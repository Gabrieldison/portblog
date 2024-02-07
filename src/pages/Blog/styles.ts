import styled from "styled-components";

export const Container = styled.main`
  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;

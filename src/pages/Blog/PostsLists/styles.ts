import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
  border-radius: 8px;
  transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.hoverBgColor};
    border-color: ${({ theme }) => theme.hoverBorderColor};
  }
`;

export const PostSection = styled.section`
  padding: 8px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1rem;
  }
`;

import styled from "styled-components";

export const PostSection = styled.section`
  background: ${(props) => props.theme["background-post"]};
  margin-bottom: 20px;
  padding-bottom: 12px;
  padding-top: 12px;
  padding-left: 18px;
  border-radius: 6px;
  transition: background 0.3s ease; /* Transição suave de cor */

  h1 {
    font-size: 1rem;
    padding-bottom: 10px;
  }

  &:hover {
    background: ${(props) => props.theme["background-hover"]};
  }
`;

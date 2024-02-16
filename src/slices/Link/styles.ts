import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 16px;

  a {
    text-decoration: none;
    border-bottom: 1px solid ${(props) => props.theme["divider"]};
    color: ${(props) => props.theme["links"]};
    transition: color 0.3s ease; /* Transição suave de cor */

    &:hover {
      color: ${(props) => props.theme["title"]};
    }
  }
`;

import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-bottom: 2rem;
  margin-top: 2rem;

  nav {
    display: flex;
    justify-content: center;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  text-decoration: none;
  color: ${(props) => props.theme["text"]};
  &:hover {
    text-decoration: underline;
  }
`;

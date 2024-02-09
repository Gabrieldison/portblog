import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Divider = styled.span`
  height: 50px;
  border: 1px solid;
  margin-right: 15px;
  color: ${(props) => props.theme["text"]};
  opacity: 10%;
`;

export const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 18px;
    margin-bottom: 8px;
    color: ${(props) => props.theme["footer-text"]};
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 20px;
  text-decoration: none;
  color: ${(props) => props.theme["links"]};
`;

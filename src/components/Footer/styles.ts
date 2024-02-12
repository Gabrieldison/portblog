import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

export const Divider = styled.span`
  border: 1px solid ${(props) => props.theme["divider"]};
  width: 3.125rem;
  margin-bottom: 0.938rem;
`;

export const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme["footer-text"]};
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 14px;

  p {
    color: ${(props) => props.theme["links"]};
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0px;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 20px;
  text-decoration: none;
  color: ${(props) => props.theme["links"]};

  p {
    border-bottom: 1px solid ${(props) => props.theme["divider"]};
  }
`;

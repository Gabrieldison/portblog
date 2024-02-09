import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import {
  ContactLink,
  ContentFooter,
  Divider,
  FooterContainer,
  NavContainer,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Divider></Divider>
      <ContentFooter>
        <p>Encontre-me em:</p>
        <NavContainer>
          <ContactLink
            href="https://www.linkedin.com/in/gabriel-dison/"
            target="_blank"
          >
            <AiFillLinkedin />
            LinkedIn
          </ContactLink>
          <ContactLink href="https://wa.me/5584981549159" target="_blank">
            <AiOutlineWhatsApp />
            WhatsApp
          </ContactLink>
          <ContactLink
            href="mailto:gabriel.disonreis@gmail.com"
            target="_blank"
          >
            <MdEmail />
            Email
          </ContactLink>
          <ContactLink href="https://github.com/Gabrieldison" target="_blank">
            <AiFillGithub />
            Github
          </ContactLink>
        </NavContainer>
      </ContentFooter>
    </FooterContainer>
  );
};

export default Footer;

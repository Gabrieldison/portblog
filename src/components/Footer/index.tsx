import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ContactLink, FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Você pode entrar em contato com Gabriel através dos seguintes canais:
      </p>
      <nav>
        <ContactLink
          href="https://www.linkedin.com/in/gabriel-dison/"
          target="_blank"
        >
          LinkedIn
          <AiFillLinkedin />
        </ContactLink>
        <ContactLink href="https://github.com/Gabrieldison" target="_blank">
          Github
          <AiFillGithub />
        </ContactLink>
        <ContactLink href="mailto:gabriel.disonreis@gmail.com" target="_blank">
          Email
          <MdEmail />
        </ContactLink>
        <ContactLink href="https://wa.me/5584981549159" target="_blank">
          WhatsApp
          <AiOutlineWhatsApp />
        </ContactLink>
      </nav>
    </FooterContainer>
  );
};

export default Footer;

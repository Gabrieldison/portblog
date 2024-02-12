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
        <p>ENCONTRE-ME EM:</p>
        <NavContainer>
          <ContactLink
            href="https://www.linkedin.com/in/gabriel-dison/"
            target="_blank"
          >
            <AiFillLinkedin size={20} />
            <p>LinkedIn</p>
          </ContactLink>
          <ContactLink href="https://wa.me/5584981549159" target="_blank">
            <AiOutlineWhatsApp size={20} />
            <p>WhatsApp</p>
          </ContactLink>
          <ContactLink
            href="mailto:gabriel.disonreis@gmail.com"
            target="_blank"
          >
            <MdEmail size={20} />
            <p>Email</p>
          </ContactLink>
          <ContactLink href="https://github.com/Gabrieldison" target="_blank">
            <AiFillGithub size={20} />
            <p> GitHub </p>
          </ContactLink>
        </NavContainer>
      </ContentFooter>
    </FooterContainer>
  );
};

export default Footer;

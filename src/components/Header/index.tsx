import { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { GiMountedKnight } from "react-icons/gi";
import { IoSunnyOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RxMoon } from "react-icons/rx";
import { useNavigate } from "react-router";
import { useDarkMode } from "../../context/DarkModeContext";
import {
  ButtonToggleTheme,
  ContactsLinkContainer,
  Divider,
  HeaderContainer,
  LogoContainer,
  MapContainer,
  NavigationContainer,
  Rotate180,
} from "./styles";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isRotated, setIsRotated] = useState(false);
  const navigate = useNavigate();

  const handleToggleDarkMode = () => {
    toggleDarkMode();
    setIsRotated((prevIsRotated) => !prevIsRotated); // Invertendo o estado anterior
  };

  return (
    <HeaderContainer>
      <LogoContainer onClick={() => navigate("/")}>
        <GiMountedKnight size={55} />
      </LogoContainer>

      <NavigationContainer>
        <MapContainer>
          <a href="/blog">Blog</a>
          <a href="/projects">Projects</a>
        </MapContainer>

        <Divider>|</Divider>

        <ButtonToggleTheme onClick={handleToggleDarkMode}>
          <Rotate180 isRotated={isRotated}>
            {darkMode ? <RxMoon size={20} /> : <IoSunnyOutline size={20} />}
          </Rotate180>
        </ButtonToggleTheme>

        <Divider>|</Divider>

        <ContactsLinkContainer>
          <a href="https://www.linkedin.com/in/gabriel-dison/">
            <AiFillLinkedin size={18} />
          </a>
          <a href="https://github.com/Gabrieldison">
            <AiFillGithub size={18} />
          </a>
          <a href="mailto:gabriel.disonreis@gmail.com">
            <MdEmail size={18} />
          </a>
          <a href="https://wa.me/5584981549159">
            <AiOutlineWhatsApp size={18} />
          </a>
        </ContactsLinkContainer>
      </NavigationContainer>
    </HeaderContainer>
  );
}

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
  HeaderContainer,
  LinksContainer,
  NavContainer,
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
      <span onClick={() => navigate("/")}>
        <GiMountedKnight size={40} />
      </span>

      <LinksContainer>
        <NavContainer>
          <a href="/blog">Blog</a>
          <a href="/projects">Projects</a>
          <a href="https://www.linkedin.com/in/gabriel-dison/">
            <AiFillLinkedin size={20} />
          </a>
          <a href="https://github.com/Gabrieldison">
            <AiFillGithub size={20} />
          </a>
          <a href="mailto:gabriel.disonreis@gmail.com">
            <MdEmail size={20} />
          </a>
          <a href="https://wa.me/5584981549159">
            <AiOutlineWhatsApp size={20} />
          </a>
        </NavContainer>

        <button onClick={handleToggleDarkMode}>
          <Rotate180 isRotated={isRotated}>
            {darkMode ? <RxMoon size={20} /> : <IoSunnyOutline size={20} />}
          </Rotate180>
        </button>
      </LinksContainer>
    </HeaderContainer>
  );
}

import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiFillCodepenSquare,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { useSpring, animated } from "react-spring";
import LanguageSwitcher from "../LanguageSwitcher";
import { useDarkMode } from "@/src/context/DarkModeContext";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const router = useRouter();

  const { rotation } = useSpring({
    rotation: isDarkMode ? 180 : 0,
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  // Verificar se não está na página inicial
  const notAtHome = router.pathname !== "/";

  return (
    <header className="flex justify-between items-center mb-16">
      {notAtHome ? (
        <Link href="/">
          <FaArrowLeft size={20} />
        </Link>
      ) : (
        <Link href="/">
          <AiFillCodepenSquare size={30} />
        </Link>
      )}

      <nav className="flex gap-5 items-center">
        <Link
          href="https://www.linkedin.com/in/gabriel-dison/"
          target="_blank"
          className=" hover:text-white"
        >
          <AiFillLinkedin />
        </Link>
        <Link
          href="https://github.com/Gabrieldison"
          target="_blank"
          className="hover:text-white"
        >
          <AiFillGithub />
        </Link>
        <Link
          href="mailto:gabriel.disonreis@gmail.com"
          target="_blank"
          className="hover:text-white"
        >
          <MdEmail />
        </Link>
        <Link
          href="https://wa.me/5584981549159"
          target="_blank"
          className="hover:text-white"
        >
          <AiOutlineWhatsApp />
        </Link>

        <Link href="/blog" className=" hover:text-white text-lg">
          Blog
        </Link>
        <Link href="/projects" className=" hover:text-white text-lg">
          Projetos
        </Link>
      </nav>

      <button
        onClick={toggleDarkMode}
        className="darkModeToggle focus:outline-none"
      >
        <animated.div
          style={{
            transform: rotation.interpolate((r) => `rotate(${r}deg)`),
          }}
        >
          {isDarkMode ? (
            <IoMdMoon className="icon transform rotate-180" />
          ) : (
            <IoMdSunny />
          )}
        </animated.div>
      </button>

      <LanguageSwitcher />
    </header>
  );
}

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
import { IoMdSunny, IoMdMoon } from "react-icons/io";
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

  const notAtHome = router.pathname !== "/";

  const iconSize = 17; // Tamanho máximo do ícone ajustado para 20px

  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="logo mr-4">
          {notAtHome ? (
            <Link href="/">
              <FaArrowLeft size={20} />
            </Link>
          ) : (
            <Link href="/">
              <AiFillCodepenSquare size={31} />
            </Link>
          )}
        </div>
        <LanguageSwitcher />
      </div>

      <div className="flex items-center">
        <nav className="flex gap-5 items-center">
          {[
            { href: "/blog", text: "Blog" },
            { href: "/projects", text: "Projetos" },
            {
              href: "https://www.linkedin.com/in/gabriel-dison/",
              icon: <AiFillLinkedin />,
            },
            { href: "https://github.com/Gabrieldison", icon: <AiFillGithub /> },
            { href: "mailto:gabriel.disonreis@gmail.com", icon: <MdEmail /> },
            {
              href: "https://wa.me/5584981549159",
              icon: <AiOutlineWhatsApp />,
            },
          ].map(({ href, icon, text }, index) => (
            <Link
              key={index}
              href={href}
              target={href === "/blog" || href === "/projects" ? "" : "_blank"}
              className="hover:text-white"
            >
              {icon ? icon : text}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleDarkMode}
          className="darkModeToggle focus:outline-none pl-4"
        >
          <animated.div
            style={{
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              display: "flex",
              alignItems: "center",
              transform: rotation.to((r) => `rotate(${r}deg)`),
            }}
          >
            {isDarkMode ? (
              <IoMdMoon className="icon transform rotate-180 w-full h-full" />
            ) : (
              <IoMdSunny className="w-full h-full" />
            )}
          </animated.div>
        </button>
      </div>
    </header>
  );
}

import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiFillCodepenSquare,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useEffect } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { useSpring, animated } from "react-spring";
import LanguageSwitcher from "../LanguageSwitcher";
import { useDarkMode } from "@/src/context/DarkModeContext";
import { BsMoonStars } from "react-icons/bs";
import { useTranslations } from "next-intl";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const router = useRouter();

  const tHeader = useTranslations("Header");

  const iconSize = 16;

  const { rotation } = useSpring({
    rotation: isDarkMode ? 180 : 0,
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center">
        <div className={`logo mr-4 ${isDarkMode ? "text-white" : null}`}>
          <Link href="/">
            <AiFillCodepenSquare size={31} />
          </Link>
        </div>
        <LanguageSwitcher />
      </div>

      <div className="flex items-center">
        <nav className="flex gap-5 items-center">
          {[
            { href: "/blog", text: "Blog" },
            {
              href: "/projects",
              text: `${tHeader("projects")}`,
            },
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
              className={`${
                isDarkMode
                  ? "hover:text-white transition duration-150 delay-100"
                  : "hover:text-gray-400 transition duration-150 delay-100"
              } ${isDarkMode && router.pathname === href ? "text-white" : ""} ${
                !isDarkMode && router.pathname === href ? "text-black" : ""
              }`}
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
              <BsMoonStars className="icon transform rotate-180 w-full h-full" />
            ) : (
              <MdOutlineWbSunny className="w-full h-full" />
            )}
          </animated.div>
        </button>
      </div>
    </header>
  );
}

import { useDarkMode } from "@/src/context/DarkModeContext";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  const t = useTranslations("Footer");
  return (
    <footer className="mb-4 mt-4">
      <p>{t("p")}</p>

      <nav
        className={`flex items-center mt-4  ${
          isDarkMode ? "text-white" : null
        }`}
      >
        <Link
          href="https://www.linkedin.com/in/gabriel-dison/"
          target="_blank"
          className="px-2 flex items-center gap-2 hover:underline"
        >
          LinkedIn
          <AiFillLinkedin />
        </Link>
        <Link
          href="https://github.com/Gabrieldison"
          target="_blank"
          className="px-2 flex items-center gap-2 hover:underline"
        >
          Github
          <AiFillGithub />
        </Link>
        <Link
          href="mailto:gabriel.disonreis@gmail.com"
          target="_blank"
          className="px-2 flex items-center gap-2 hover:underline"
        >
          Email
          <MdEmail />
        </Link>
        <Link
          href="https://wa.me/5584981549159"
          target="_blank"
          className="px-2 flex items-center gap-2 hover:underline"
        >
          WhatsApp
          <AiOutlineWhatsApp />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      <p>Você pode entrar em contato com Gabriel nos seguintes canais: </p>

      <nav className="flex items-center mt-4">
        <Link
          href="https://www.linkedin.com/in/gabriel-dison/"
          target="_blank"
          className="px-2 flex items-center gap-2 underline"
        >
          LinkedIn
          <AiFillLinkedin />
        </Link>
        <Link
          href="https://github.com/Gabrieldison"
          target="_blank"
          className="px-2 flex items-center gap-2 underline"
        >
          Github
          <AiFillGithub />
        </Link>
        <Link
          href="mailto:gabriel.disonreis@gmail.com"
          target="_blank"
          className="px-2 flex items-center gap-2 underline"
        >
          Email
          <MdEmail />
        </Link>
        <Link
          href="https://wa.me/5584981549159"
          target="_blank"
          className="px-2 flex items-center gap-2 underline"
        >
          WhatsApp
          <AiOutlineWhatsApp />
        </Link>
      </nav>
    </footer>
  );
}

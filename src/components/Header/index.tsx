import Link from "next/link";
import { AiFillCodepenSquare } from "react-icons/ai";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-16">
      <AiFillCodepenSquare size={30} />

      <nav className="text-gray-300">
        <Link href="/blog" className="pr-8 hover:text-white">
          Blog
        </Link>
        <Link href="/projects" className=" hover:text-white">
          Projetos
        </Link>
      </nav>
    </header>
  );
}

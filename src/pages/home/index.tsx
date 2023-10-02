import Image from "next/image";
import Link from "next/link";
import signature from "../../assets/Signature.svg";

export default function Home() {
  return (
    <>
      <header className="flex justify-between">
        <Image src={signature} alt="" width={120} height={120}></Image>

        <nav>
          <Link href="/blog" className="pr-8">
            Blog
          </Link>
          <Link href="/projects">Projetos</Link>
        </nav>
      </header>
    </>
  );
}

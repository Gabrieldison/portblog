import Link from "next/link";
import { FaLongArrowAltDown } from "react-icons/fa";

import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Footer from "@/src/components/Footer";

export default function Home() {
  const [isScrolledToBottom, setScrolledToBottom] = useState(false);

  const fadeInButtonProps = useSpring({
    opacity: isScrolledToBottom ? 1 : 0,
    from: { opacity: 0 },
  });

  const jumpProps = useSpring({
    y: isScrolledToBottom ? -10 : 5,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      // Ajuste o valor abaixo conforme necessário para determinar quando o usuário atinge o final da página
      const bottomThreshold =
        document.body.offsetHeight - window.innerHeight - 200;

      setScrolledToBottom(scrollPosition > bottomThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <main className="justify-center items-center">
        <h1 className="text-4xl mb-4 font-bold">Gabriel dison</h1>

        <div>
          <p className="mb-4">
            Era uma vez no mundo do código, um destemido cavaleiro chamado Sir
            Gabriel. Ele se autodenominava o Mestre do Backend, com suas
            habilidades afiadas em Node.js.
          </p>
          <p className="mb-4 ">
            Um dia, Gabriel decidiu erguer um castelo digital, um portfólio,
            para mostrar ao mundo suas proezas. Mas ele sabia que não era um
            artista das animações reluzentes e das maravilhas visuais, afinal,
            seu coração pulsava em linhas de código, não em pincéis digitais!
          </p>

          <p className="mb-4 ">
            Ele ergueu esse portfólio não só para exibir suas habilidades, mas
            também como um posto avançado para seus seguidores encontrarem-no no
            vasto reino da internet. É sua fortaleza de contato, o marketing de
            entrada pessoal que atrai até os mais desavisados cavalheiros e
            damas digitais!
          </p>

          <p className="mb-4">
            Além disso, Gabriel tinha uma torre de conhecimento, onde ele
            compartilhava sua sabedoria através de um{" "}
            <Link
              href="/blog"
              className="underline text-white  hover:text-gray-500"
            >
              blog
            </Link>
            . E em seus salões virtuais, os visitantes podiam contemplar os
            troféus de suas batalhas, ou seja, todos os seus{" "}
            <Link
              href="/projects"
              className="underline text-white hover:text-gray-500"
            >
              projetos
            </Link>
            .
          </p>

          <p className="mb-4">
            Assim, desde 2020 Gabriel começou sua jornada. Seu coração ardia de
            paixão pela tecnologia, e ele sabia que cada linha de código era uma
            chance de mudar vidas
          </p>

          <p className="mb-4">
            E assim, nobres senhores e senhoras, se vocês buscam um cavaleiro
            comprometido com soluções eficientes e inovadoras, Gabriel Dison é o
            homem que os levará à vitória! Basta chamar, e ele estará pronto
            para lutar ao seu lado.
          </p>
        </div>
      </main>

      <Footer />

      {isScrolledToBottom && (
        <animated.button
          className="bg-zinc-900 p-2 rounded cursor-pointer absolute bottom-0 left-1/2 opacity-75"
          style={{ ...fadeInButtonProps, ...jumpProps }}
        >
          <FaLongArrowAltDown />
        </animated.button>
      )}
    </div>
  );
}

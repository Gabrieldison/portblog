'use client'

import Link from "next/link";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Footer from "@/src/components/Footer";
import { useDarkMode } from "@/src/context/DarkModeContext";
import { useTranslations } from "next-intl";

export default function Home() {
  const [isScrolledToBottom, setScrolledToBottom] = useState(false);
  const { isDarkMode } = useDarkMode();
  const t = useTranslations("Home");

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
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <main>
        <h1 className="mb-4">Gabriel dison</h1>

        <div>
          <p className="mb-4">{t("p1")}</p>

          <p className="mb-4 ">{t("p2")}</p>

          <p className="mb-4 ">{t("p3")}</p>

          <p className="mb-4">
            <span>{t("p4.span1")}</span>
            <Link
              href="/blog"
              className={`${isDarkMode
                ? "underline text-white hover:text-gray-500"
                : "underline text-black font-medium hover:text-gray-400"
                }`}
            >
              blog
            </Link>
            .<span className="ml-1">{t("p4.span2")}</span>
            <Link
              href="/projects"
              className={`${isDarkMode
                ? "underline text-white hover:text-gray-500"
                : "underline text-black font-medium hover:text-gray-400"
                }`}
            >
              {t("p4.projects")}
            </Link>
          </p>

          <p className="mb-4">{t("p5")}</p>

          <p className="mb-4">{t("p6")}</p>
        </div>
      </main>
      <animated.button
        style={jumpProps}
        className={`${isDarkMode
          ? "bg-gray-800 text-white p-2 rounded-md absolute bottom-0"
          : "bg-gray-200 text-black p-2 rounded-md absolute bottom-0"
          }`}
      >
        <FaLongArrowAltDown />
      </animated.button>
      <Footer />
    </div>
  );
}

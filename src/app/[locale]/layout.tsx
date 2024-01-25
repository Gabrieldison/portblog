import { PrismicPreview } from "@prismicio/next";
import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import { DarkModeProvider } from "../../context/DarkModeContext";
import { repositoryName } from "../../prismicio";
import "./styles/globals.css";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

const locales = ["pt", "en"];

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <div>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <DarkModeProvider>
              <Header />
              <div>{children}</div>
              <PrismicPreview repositoryName={repositoryName} />
            </DarkModeProvider>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}

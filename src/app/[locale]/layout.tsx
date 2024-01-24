import Header from "../../components/Header";
import { DarkModeProvider } from "../../context/DarkModeContext";
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../prismicio";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

const locales = ["pt", "en"]

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string }
}) {

  if (!locales.includes(locale)) {
    notFound()
  }

  const messages = useMessages();
  
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
        <DarkModeProvider>
          <Header />
          <main>{children}</main>
          <PrismicPreview repositoryName={repositoryName} />
        </DarkModeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}




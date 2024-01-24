import Header from "../../components/Header";
import { DarkModeProvider } from "../../context/DarkModeContext";
import { Metadata } from 'next'
import './styles/globals.css'
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../prismicio";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <DarkModeProvider>
          <Header />
          <main>{children}</main>
          <PrismicPreview repositoryName={repositoryName} />
        </DarkModeProvider>
      </body>
    </html>
  );
}




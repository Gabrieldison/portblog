import type { AppProps } from "next/app";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Europe/Vienna"
      messages={pageProps.messages}
    >
      <Layout>
        <Component {...pageProps} />
        <PrismicPreview repositoryName={repositoryName} />
      </Layout>
    </NextIntlClientProvider>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}

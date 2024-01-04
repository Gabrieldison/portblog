import type { AppProps } from "next/app";
import Header from "../components/Header";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import "../styles/globals.css";
import { useState } from "react";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </Layout>
  );
}

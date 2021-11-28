// import '../styles/globals.css'
// import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import React from "react";

import { Layout } from "../components/Layout";
import { useSanityLivePreview } from "../hooks/useSanityLivePreview";
import { useApollo } from "../lib/apolloClient";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  useSanityLivePreview({ apolloClient });

  return (
    <>
      <DefaultSeo
        title="Dr Gianluca Santambrogio"
        description=""
        openGraph={{
          type: "website",
          locale: "it_IT",
          url:
            process.env.NEXT_PUBLIC_STOREFRONT_URL ||
            "https://www.gianlucasantambrogio.com",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />

      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
};
export default MyApp;

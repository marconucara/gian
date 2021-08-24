import { ApolloProvider } from "@apollo/client";
import { GetStaticPathsResult, GetStaticPropsContext } from "next";
import { NextRouter } from "next/dist/client/router";
import Error from "next/error";
import React from "react";

import { GetRoutesQueryResult } from "../generated/graphql";
import { Layout } from "../components/Layout";
import { BlogArticle } from "../components/pages/BlogArticle";
import { BlogHomepage } from "../components/pages/BlogHomepage";
import { Homepage } from "../components/pages/Homepage";
// import { ModularPage } from "../components/pages/ModularPage";
import { initializeApollo } from "../lib/apolloClient";
import {
  createSlugFromArray,
  GET_ROUTES,
  getRoutingMapBySlug,
  useSanityRouting,
} from "../lib/routing";

export type NextSlugArray = string[];

type Props = {
  slugArray: NextSlugArray;
};

const SanityRouter: React.FC<Props> = ({ slugArray = [""] }) => {
  const { routingMapBySlug } = useSanityRouting();

  if (!routingMapBySlug) {
    return null;
  }

  const slug = createSlugFromArray(slugArray);

  const routingConfig = routingMapBySlug[slug];

  console.log(
    `Loading page type ${routingMapBySlug[slug]?.typename} for slug ${slug}`
  );

  return (
    <>
      {/* {routingMapBySlug[slug]?.typename === "ModularPage" && (
        <ModularPage routingConfig={routingConfig} />
      )} */}
      {routingConfig?.typename === "Homepage" && (
        <Homepage routingConfig={routingConfig} />
      )}
      {routingConfig?.typename === "BlogHomepage" && (
        <BlogHomepage routingConfig={routingConfig} />
      )}
      {routingConfig?.typename === "BlogArticle" && (
        <BlogArticle routingConfig={routingConfig} />
      )}
      {!routingConfig && <Error statusCode={404} />}
    </>
  );
};

export default SanityRouter;

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<GetRoutesQueryResult["data"]>({
    query: GET_ROUTES,
  });

  const routingMapBySlug = getRoutingMapBySlug(data?.allDocument);

  Object.values(routingMapBySlug).forEach((doc) => {
    console.log(`Create page ${doc.slug}`);
  });

  return {
    paths: Object.values(routingMapBySlug).map((doc) => ({
      params: {
        slugArray: doc.slugArray,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
  locales,
  locale,
  defaultLocale,
}: GetStaticPropsContext & { params: Props }): Promise<{
  props: Props & { initialApolloState: unknown };
}> {
  const { getDataFromTree } = await import("@apollo/client/react/ssr");
  const { RouterContext } = await import("next/dist/shared/lib/router-context");
  const router = {
    query: params,
    locales,
    locale,
    defaultLocale,
  };
  const apolloClient = initializeApollo();

  // This prerender is used only for execute queries and extract apollo cache.
  // The cache will be passed to SSR render, that will avoid querying again.
  // SSR still use _app.tsx for providers and layout. If you add something
  // to this file you don't have to add here too, unless it adds queries.
  const PrerenderComponent = () => (
    <ApolloProvider client={apolloClient}>
      <RouterContext.Provider value={router as unknown as NextRouter}>
        <Layout>
          <SanityRouter {...params} />
        </Layout>
      </RouterContext.Provider>
    </ApolloProvider>
  );

  await getDataFromTree(<PrerenderComponent />);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      ...params,
    },
  };
}

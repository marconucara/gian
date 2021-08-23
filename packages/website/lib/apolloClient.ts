import { ApolloClient, HttpLink } from "@apollo/client";
import { InMemoryCache, NormalizedCacheObject } from "@apollo/client/cache";
import React from "react";

import fragments from "../generated/fragments.json";
import { isSSR } from "./isSSR";

// if any part of the client code will inject an other fetch graphql will use it
const fetcher = (
  input: RequestInfo,
  init?: RequestInit | undefined
): Promise<Response> => {
  return global.fetch(input, init);
};

const createHttpLink = () => {
  const httpLink = new HttpLink({
    uri: "https://quf17mu9.api.sanity.io/v1/graphql/production/default",
    fetch: fetcher,
  });
  return httpLink;
};

let apolloClient: ApolloClient<NormalizedCacheObject>;

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const ssrMode = isSSR;
  return new ApolloClient({
    ssrMode,
    link: createHttpLink(),
    cache: new InMemoryCache({ possibleTypes: fragments.possibleTypes }),
  });
};

export const initializeApollo = (
  initialState: NormalizedCacheObject | null = null
): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  if (typeof window === "undefined") {
    return _apolloClient;
  }

  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};

export function useApollo(
  initialState: NormalizedCacheObject | null | undefined
): ApolloClient<NormalizedCacheObject> {
  const store = React.useMemo(
    () => initializeApollo(initialState),
    [initialState]
  );
  return store;
}

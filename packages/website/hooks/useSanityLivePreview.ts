import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import debounce from "lodash/debounce";
import { useEffect } from "react";

import { sanityClientConfig } from "../lib/sanity";

const query = '*[!(_type match "system.*") && !(_type match "sanity.*")]';

export const sanityLivePreviewEnabled = () =>
  window.location.hostname.startsWith("live.") ||
  process.env.NEXT_PUBLIC_LIVE_PREVIEW;

export const useSanityLivePreview = ({
  apolloClient,
}: {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}): void => {
  useEffect(() => {
    const listenSanityChanges = async () => {
      const sanityClient = (await import("@sanity/client")).default(
        sanityClientConfig
      );

      const resetApolloStoreWithDebounce = debounce(() => {
        console.log("[LIVE PREVIEW] Clean apollo client store and refetch");
        apolloClient.resetStore();
      }, 1 * 1000);

      console.log("[LIVE PREVIEW] Initial realod looking for draft variant");
      resetApolloStoreWithDebounce();

      console.log("[LIVE PREVIEW] Start to listen sanity live changes");

      const subscription = sanityClient
        .listen(
          query,
          {},
          {
            includeResult: false,
            includePreviousRevision: false,
          }
        )
        .subscribe((update: unknown) => {
          console.log(`[LIVE PREVIEW] Update from sanity:`, { update });
          resetApolloStoreWithDebounce();
        });
      return () => {
        subscription.unsubscribe();
      };
    };

    if (sanityLivePreviewEnabled()) {
      listenSanityChanges();
    }
  }, [apolloClient]);
};

import { gql } from "@apollo/client";

import {
  DocumentRoutingFragmentDoc,
  GetRoutesQuery,
  useGetRoutesQuery,
} from "../generated/graphql";
export const BLOG_ARTICLES_PER_PAGE = 12;
export const BLOG_ARTICLES_PER_PAGE_INDEX = 12;

export const BASE_URL = `${
  process.env.NEXT_PUBLIC_STOREFRONT_URL ||
  "https://www.gianlucasantambrogio.com"
}`;

gql`
  fragment DocumentRouting on Document {
    _id
    __typename
    ... on BlogArticle {
      title
      seo {
        slug {
          current
        }
      }
    }
    # ... on BlogHomepage {
    #   title
    #   seo {
    #     slug {
    #       current
    #     }
    #   }
    # }
    # ... on ModularPage {
    #   title
    #   seo {
    #     slug {
    #       current
    #     }
    #   }
    #   parentPage {
    #     _id
    #     title
    #     seo {
    #       slug {
    #         current
    #       }
    #     }
    #   }
    # }
  }
`;

gql`
  fragment InternalLink on BlogArticle {
    ... on BlogArticle {
      _id
      title
    }
    # ... on BlogHomepage {
    #   _id
    #   title
    # }
    # ... on ModularPage {
    #   _id
    #   title
    # }
  }
`;

export const GET_ROUTES = gql`
  ${DocumentRoutingFragmentDoc}
  query getRoutes {
    allDocument(where: { _type: { in: ["blogArticle"] } }) {
      ...DocumentRouting
    }
  }
`;

export interface PaginationProps {
  pageIndex: number;
  pageCounter: number;
  listingCounter: number;
  baseSlugArray: string[];
}

export type BreadcrumbsProps = {
  title: string;
  slug?: string;
}[];
export interface RoutingConfig {
  slug: string;
  slugArray: string[];
  typename: ArrayElement<GetRoutesQuery["allDocument"]>["__typename"];
  id: string;
  pagination?: PaginationProps;
  breadcrumbs?: BreadcrumbsProps;
}

export const createSlugFromArray = (array: string[]): string =>
  `/${array.join("/")}`;

export const getDocumentSlugById = ({
  routingMapById,
  id,
}: {
  routingMapById: Record<string, RoutingConfig> | null;
  id?: string | null;
}): string =>
  (id && (routingMapById || {})[id.replace(/^drafts\./, "")]?.slug) || "#";

export const getRoutingMapBySlug = (
  allDocument?: GetRoutesQuery["allDocument"]
): Record<string, RoutingConfig> => {
  // search blog homepage document to generate blog routing
  const blogHomepage = allDocument?.find(
    (document) => document.__typename === "BlogHomepage"
  );

  // blog base routing
  const blogHomepageSlugs =
    blogHomepage && "seo" in blogHomepage
      ? blogHomepage.seo?.slug?.current?.split("/") || []
      : [];

  const blogHomepageBreadcrumbs: BreadcrumbsProps = [
    {
      title:
        (blogHomepage && "title" in blogHomepage && blogHomepage?.title) || "",
      slug: createSlugFromArray(blogHomepageSlugs),
    },
  ];

  // if a document exist both in draft and non draft we remove the original version here
  const allDocumentWithoutNonDrafts = (allDocument || []).filter(
    (document) =>
      !allDocument?.find((doc) => doc._id === `drafts.${document._id}`)
  );

  // rename all id removing draft prefix
  const allDocumentWithDrafts = (allDocumentWithoutNonDrafts || []).map(
    (document) => ({
      ...document,
      _id: document._id?.replace(/^drafts\./, ""),
    })
  );

  // create map
  return (allDocumentWithDrafts || []).reduce((allRoutes, document) => {
    // prepare parent
    const parentSlugArray: string[] = [];
    const parentBreadcrumbs: BreadcrumbsProps = [
      { title: "Homepage", slug: "/" },
    ];

    switch (document.__typename) {
      case "BlogArticle":
        parentSlugArray.push(...blogHomepageSlugs, "a");
        parentBreadcrumbs.push(...blogHomepageBreadcrumbs);
        break;
      default:
        // TODO make it recursive and test it
        if ("parentPage" in document && document.parentPage) {
          parentSlugArray.push(
            ...(document.parentPage?.seo?.slug?.current?.split("/") || [])
          );
          parentBreadcrumbs.push({
            title: document.parentPage?.title || "",
            slug: document.parentPage?.seo?.slug?.current || "",
          });
        }
    }

    // TODO: remove / from homepage slug?

    // prepare slug array
    const slugArray = [
      ...parentSlugArray,
      ...("seo" in document
        ? document.seo?.slug?.current?.replace(/\/*$/, "")?.split("/") || []
        : []),
    ];

    const breadcrumbs: BreadcrumbsProps = [
      ...parentBreadcrumbs,
      { title: ("title" in document && document.title) || "" },
    ];

    // generate routes (usually one per document, more than one for paged docs)
    const newRoutes: Record<string, RoutingConfig> = {};
    switch (document.__typename) {
      case "BlogHomepage": {
        const blogArticles =
          allDocument?.filter(
            (document) => document.__typename === "BlogArticle"
          ) || [];

        const listingCounter = blogArticles.length;

        const numberOfPages =
          Math.ceil(
            (listingCounter - BLOG_ARTICLES_PER_PAGE_INDEX) /
              BLOG_ARTICLES_PER_PAGE
          ) + 1;

        // count articles and generate pages
        for (let pageIndex = 1; pageIndex <= numberOfPages; pageIndex++) {
          const slugArrayWithPages =
            pageIndex === 1 ? slugArray : [...slugArray, `page-${pageIndex}`];

          const slug = `/${slugArrayWithPages.join("/")}`;

          newRoutes[slug] = {
            slugArray: slugArrayWithPages,
            slug,
            typename: document.__typename,
            id: document._id || "",
            breadcrumbs,
            pagination: {
              pageIndex,
              listingCounter,
              pageCounter: numberOfPages,
              baseSlugArray: slugArray,
            },
          };
        }
        break;
      }
      default: {
        const slug = `/${slugArray.join("/")}`;
        newRoutes[slug] = {
          slugArray,
          slug,
          typename: document.__typename,
          id: document._id || "",
          breadcrumbs,
        };
        break;
      }
    }
    // console.log(
    //   'Create entry with key',
    //   slugArray.join('/'),
    //   'for document type',
    //   document.__typename
    // );
    return {
      ...newRoutes,
      ...allRoutes,
    };
  }, {});
};

export const getRoutingMapById = ({
  routingMapBySlug,
}: {
  routingMapBySlug: Record<string, RoutingConfig>;
}): Record<string, RoutingConfig> => {
  return Object.values(routingMapBySlug).reduce(
    (map, current) => ({
      ...map,
      ...((current?.pagination?.pageIndex || 1) === 1
        ? { [current.id]: current }
        : {}),
    }),
    {}
  );
};

export const useSanityRouting = (): ReturnType<typeof useGetRoutesQuery> & {
  routingMapBySlug: Record<string, RoutingConfig> | null;
  routingMapById: Record<string, RoutingConfig> | null;
} => {
  const queryResult = useGetRoutesQuery();

  const routingMapBySlug = queryResult.data
    ? getRoutingMapBySlug(queryResult.data.allDocument)
    : null;

  const routingMapById = routingMapBySlug
    ? getRoutingMapById({ routingMapBySlug })
    : null;

  return {
    ...queryResult,
    routingMapBySlug,
    routingMapById,
  };
};

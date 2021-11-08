import { gql } from "@apollo/client";

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import {
  SanityImageFragmentDoc,
  SanitySeoFragmentDoc,
  useGetPostListingQuery,
} from "../../generated/graphql";
import { getReadingTime } from "../../lib/blog";
import { formatISODate } from "../../lib/date";
import {
  BLOG_ARTICLES_PER_PAGE,
  createSlugFromArray,
  getDocumentSlugById,
  PaginationProps,
  useSanityRouting,
} from "../../lib/routing";
import { Pagination } from "../Pagination";
import { SanityImage } from "./SanityImage";

gql`
  ${SanitySeoFragmentDoc}
  ${SanityImageFragmentDoc}

  query getPostListing($offset: Int!, $limit: Int!) {
    listing: allBlogArticle(
      sort: { publishDate: DESC }
      limit: $limit
      offset: $offset
    ) {
      _id
      seo {
        ...SanitySeo
      }
      title
      subtitle
      cover {
        ...SanityImage
      }
      author {
        firstname
        lastname
      }
      publishDate
      modifiedDate
      contentRaw
    }
  }
`;

type Props = {
  pagination?: PaginationProps;
  limit?: number;
};

export const SanityPostListing: React.FC<Props> = ({
  pagination,
  limit = BLOG_ARTICLES_PER_PAGE,
}) => {
  const offset = ((pagination?.pageIndex || 1) - 1) * limit;

  const router = useRouter();

  const { routingMapById } = useSanityRouting();

  const { loading, error, data } = useGetPostListingQuery({
    variables: {
      offset,
      limit,
    },
  });
  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  return (
    <>
      {data?.listing && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-16">
          {data?.listing.map((article, articleIndex) => {
            const slug = getDocumentSlugById({
              routingMapById,
              id: article._id,
            });

            return (
              <div
                onClick={() => router.push(slug)}
                className="flex flex-col items-stratch shadow rounded overflow-hidden"
                style={{ cursor: "pointer" }}
                key={article._id}
              >
                <div
                  className="shadow-lg w-full mx-auto relative"
                  style={{ paddingBottom: "60%" }}
                >
                  {article?.cover && (
                    <SanityImage asset={article?.cover} layout="fill" />
                  )}
                </div>
                <div className="px-6 py-4 ">
                  <Link href={slug}>
                    <a className="text-m font-bold">{article.title || ""}</a>
                  </Link>
                  <p className="mt-1 text-sx text-gray-500 font-semibold mb-6">
                    {article.subtitle}
                  </p>
                </div>
                <div className="px-6 py-4 text-sm text-gray-500 mt-auto">
                  <i className="fa fa-clock mr-2" />
                  Tempo di lettura {getReadingTime(article?.contentRaw)} min
                </div>
              </div>

              //   authorName={`${article?.author?.firstname} ${article?.author?.lastname}`}
              //   date={formatISODate(
              //     article?.modifiedDate || article?.publishDate || ""
              //   )}
            );
          })}
        </div>
      )}

      {pagination && (
        <Pagination
          currentPage={pagination.pageIndex}
          numberOfPages={pagination.pageCounter}
          renderLink={({ page: renderPageIndex, children }) => (
            <>
              {renderPageIndex !== pagination.pageIndex ? (
                <Link
                  href={`${createSlugFromArray(pagination.baseSlugArray)}${
                    renderPageIndex !== 1 ? `/page-${renderPageIndex}` : ""
                  }`}
                  key={renderPageIndex}
                >
                  {children}
                </Link>
              ) : (
                renderPageIndex
              )}
            </>
          )}
        />
      )}
    </>
  );
};

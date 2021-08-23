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
  BLOG_ARTICLES_PER_PAGE_INDEX,
  createSlugFromArray,
  getDocumentSlugById,
  PaginationProps,
  useSanityRouting,
} from "../../lib/routing";
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
  pagination: PaginationProps;
};

export const SanityPostListing: React.FC<Props> = ({
  pagination: { pageIndex, pageCounter, baseSlugArray },
}) => {
  const limit =
    pageIndex === 1 ? BLOG_ARTICLES_PER_PAGE_INDEX - 1 : BLOG_ARTICLES_PER_PAGE;
  const offset =
    pageIndex === 1
      ? 1
      : (pageIndex - 2) * BLOG_ARTICLES_PER_PAGE +
        1 * BLOG_ARTICLES_PER_PAGE_INDEX;

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
      {data?.listing.map((article, articleIndex) => {
        const slug = getDocumentSlugById({ routingMapById, id: article._id });

        return (
          <div
            onClick={() => router.push(slug)}
            key={article._id}
            reverse={articleIndex % 3 === 1}
            title={
              <Link href={slug}>
                <a>{article.title || ""}</a>
              </Link>
            }
            authorNamePrefix={
              article?.modifiedDate ? "Aggiornato da" : "Pubblicato da"
            }
            authorName={`${article?.author?.firstname} ${article?.author?.lastname}`}
            datePrefix="il"
            date={formatISODate(
              article?.modifiedDate || article?.publishDate || ""
            )}
            readingTime={`${getReadingTime(article?.contentRaw)} minuti`}
            image={
              article?.cover && (
                <SanityImage asset={article?.cover} layout="fill" />
              )
            }
          >
            {article.subtitle}
          </div>
        );
      })}

      {/* <StyledPagination
        currentPage={pageIndex}
        numberOfPages={pageCounter}
        renderLink={({ page: renderPageIndex, children }) => (
          <>
            {renderPageIndex !== pageIndex ? (
              <Link
                href={`${createSlugFromArray(baseSlugArray)}${
                  renderPageIndex !== 1 ? `/page-${renderPageIndex}` : ""
                }`}
                key={renderPageIndex}
              >
                <a aria-label={`Vai a pagina ${renderPageIndex}`}>{children}</a>
              </Link>
            ) : (
              renderPageIndex
            )}
          </>
        )}
      /> */}
    </>
  );
};

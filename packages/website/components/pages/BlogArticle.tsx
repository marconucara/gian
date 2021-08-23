import { gql } from "@apollo/client";
import blocksToHtml from "@sanity/block-content-to-html";
import Head from "next/head";
import React, { useContext, useEffect } from "react";
import slugify from "slugify";

import {
  SanityImageFragmentDoc,
  SanitySeoFragmentDoc,
  useGetBlogArticleQuery,
} from "../../generated/graphql";
import { getReadingTime } from "../../lib/blog";
import { formatISODate } from "../../lib/date";
import { BASE_URL, RoutingConfig } from "../../lib/routing";
import { BlockContent, headingSerializers } from "../BlockContent";
// import { Breadcrumbs } from "../Breadcrumbs";

import { SanityImage } from "../sanity/SanityImage";
// import { SectionContainer } from "../sanity/SanitySection";
import { SanitySeo } from "../sanity/SanitySeo";

// this query could be done with this:
//  Post(id: $id) {
//  but you would miss deaft for live-preview
gql`
  ${SanitySeoFragmentDoc}
  ${SanityImageFragmentDoc}
  query getBlogArticle($id: ID!) {
    page: allBlogArticle(
      where: { _id: { matches: $id } }
      sort: { _updatedAt: DESC }
      limit: 1
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
        photo {
          ...SanityImage
        }
        firstname
        lastname
      }
      publishDate
      modifiedDate
      indexHeading
      contentRaw
    }
  }
`;

const getHeadinglist = ({
  blocks,
  searchHeading,
}: {
  blocks: { children: unknown[]; style: string }[];
  searchHeading: string;
}): string[] => {
  return blocks
    .filter((block) => block.style === searchHeading)
    .map((block) =>
      blocksToHtml({
        serializers: headingSerializers,
        blocks: [block],
      })
    );
};

type BlogArticleProps = {
  routingConfig: RoutingConfig;
};

export const BlogArticle: React.FC<BlogArticleProps> = ({
  routingConfig: { id, breadcrumbs, slug },
}) => {
  const { loading, error, data } = useGetBlogArticleQuery({
    variables: {
      id,
    },
  });
  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  const page = data?.page?.[0];

  const date = formatISODate(page?.modifiedDate || page?.publishDate || "");
  const headingList = getHeadinglist({
    blocks: page?.contentRaw,
    searchHeading: page?.indexHeading || "h2",
  });

  const articleJsonLd = {
    "@context": "http://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}${slug}`,
    },
    headline: page?.seo?.title,
    description: page?.seo?.description,
    image: [page?.cover?.asset?.url], // TODO: altre immagini
    datePublished: `${page?.publishDate}T00:00:00+00:00`,
    author: {
      "@type": "Person",
      name: `${page?.author?.firstname} ${page?.author?.lastname}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Amusi",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo_amp.png`, // TODO: creare logo 600x60 px
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+39 02 8295 0781",
        email: "info@amusi.it",
        contactType: "customer service",
      },
    },
    articleBody: blocksToHtml({
      serializers: headingSerializers,
      blocks: page?.contentRaw,
    }).replace(/<div>(.*)<\/div>/s, "$1"),
    dateModified: page?.modifiedDate
      ? `${page?.modifiedDate}T00:00:00+00:00`
      : "",
  };

  return (
    <>
      <SanitySeo component={page?.seo} slug={slug} />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleJsonLd),
          }}
        />
      </Head>

      {/* <Hero
        background={
          page?.cover?.asset?._id && (
            <SanityImage priority asset={page?.cover} layout="fill" />
          )
        }
      />

      <SectionContainer>
        <Wrapper size="small">
          <Breadcrumbs breadcrumbs={breadcrumbs} />

          <StyledArticleIntro
            authorPhoto={
              page?.author?.photo && (
                <SanityImage
                  asset={page?.author?.photo}
                  layout="fixed"
                  width="64"
                  height="64"
                />
              )
            }
            authorNamePrefix={
              page?.modifiedDate ? "Aggiornato da" : "Pubblicato da"
            }
            authorName={`${page?.author?.firstname} ${page?.author?.lastname}`}
            datePrefix="il"
            date={date}
            readingTime={`${getReadingTime(page?.contentRaw)} minuti`}
            internalIndex={{
              title: "In questo articolo:",
              items: headingList.map((heading) => (
                <a
                  data-test="internal-index"
                  href={`#heading-${slugify(heading, {
                    lower: true,
                    strict: true,
                  })}`}
                  key={heading}
                >
                  {heading}
                </a>
              )),
            }}
            subtitle={page?.subtitle || ""}
          >
            {page?.title || ""}
          </StyledArticleIntro>

          <DropCap>
            <BlockContent
              blocks={page?.contentRaw}
              headingRenderers={[
                ({ tag, children }) => (
                  <Text size="28" weight="bold" as={tag} spaceBottom="compact">
                    {children}
                  </Text>
                ),
                ({ tag, children }) => (
                  <Text size="22" weight="bold" as={tag} spaceBottom="compact">
                    {children}
                  </Text>
                ),
                ({ tag, children }) => (
                  <Text size="18" weight="bold" as={tag} spaceBottom="compact">
                    {children}
                  </Text>
                ),
              ]}
            />
          </DropCap>
        </Wrapper>
      </SectionContainer> */}
    </>
  );
};

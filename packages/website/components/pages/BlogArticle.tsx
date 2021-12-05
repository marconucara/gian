import { gql } from "@apollo/client";
import blocksToHtml from "@sanity/block-content-to-html";
import Head from "next/head";
import React from "react";
import Link from "next/link";

import {
  SanityImageFragmentDoc,
  SanitySeoFragmentDoc,
  useGetBlogArticleQuery,
} from "../../generated/graphql";
import { getReadingTime } from "../../lib/blog";
import { formatISODate } from "../../lib/date";
import { BASE_URL, RoutingConfig } from "../../lib/routing";
import { BlockContent, Component, headingSerializers } from "../BlockContent";
import { Breadcrumbs } from "../Breadcrumbs";

import { SanityImage } from "../sanity/SanityImage";

import { SanitySeo } from "../sanity/SanitySeo";
import { SanityPostListing } from "../sanity/SanityPostListing";

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

  const publishDate = formatISODate(page?.publishDate || "");
  const modifiedDate = page?.modifiedDate
    ? formatISODate(page?.modifiedDate)
    : null;
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
      name: "Dr. Gianluca Santambrogio",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo_amp.png`, // TODO: creare logo 600x60 px
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+39 TODO",
        email: "info@gianlucasantambrogio.com",
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

      <section className="relative block" style={{ height: "500px" }}>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url('${page?.cover?.asset?.url}')`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-gray-200 ">
        <div className="container mx-auto px-4 post-page">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="mt-12">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <h1 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                      {page?.title}
                    </h1>
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      {page?.subtitle}
                    </p>
                    {page?.author && (
                      <div className="mb-2 text-gray-700 mt-10 flex items-center">
                        {page?.author?.photo && (
                          <SanityImage
                            asset={page?.author?.photo}
                            layout="fixed"
                            width="64"
                            height="64"
                            className="shadow-xl rounded-full h-auto align-middle border-none absolute  -ml-20 lg:-ml-16"
                          />
                        )}

                        <div className="ml-2">
                          <div>Autore</div>
                          <div className=" font-bold">
                            {page.author.firstname} {page.author.lastname}
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="mb-2 text-gray-700 mt-6">
                      <i className="fas fa-calendar mr-2 text-lg text-gray-500" />
                      Pubblicato il {publishDate}
                    </div>
                    {modifiedDate && (
                      <div className="mb-2 text-gray-700 mt-6">
                        <i className="fas fa-calendar mr-2 text-lg text-gray-500" />
                        Modificato il {modifiedDate}
                      </div>
                    )}
                    {/* <div className="mb-2 text-gray-700">
                      <i className="fas fa-book mr-2 text-lg text-gray-500" />
                      Categoria:{" "}
                      <a href="#" className=" font-bold text-blue-500">
                        alimentazione
                      </a>
                    </div> */}
                    <div className="mb-2 text-gray-700">
                      <i className="fas fa-clock mr-2 text-lg text-gray-500" />
                      Tempo di lettura {getReadingTime(page?.contentRaw)} min.
                    </div>
                  </div>

                  <div className="w-full lg:w-9/12 px-4 mt-10 py-10 border-t border-gray-300 text-lg text-gray-800">
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    <BlockContent
                      blocks={page?.contentRaw}
                      headingRenderers={[
                        ({ tag, children }) => (
                          <Component
                            as={tag}
                            className="mb-4 text-2xl font-bold"
                          >
                            {children}
                          </Component>
                        ),
                        ({ tag, children }) => (
                          <Component
                            as={tag}
                            className="mb-4 text-xl font-bold"
                          >
                            {children}
                          </Component>
                        ),
                        ({ tag, children }) => (
                          <Component as={tag} className="mb-4 text-l font-bold">
                            {children}
                          </Component>
                        ),
                      ]}
                    />
                    <div className="flex flex-wrap justify-center text-center pt-8 mt-16 mb-8 border-t border-gray-300">
                      <div className="w-full  px-4">
                        <h2 className="text-4xl font-semibold">
                          Ultimi articoli del blog
                        </h2>
                      </div>
                    </div>
                    <SanityPostListing
                      layout="compact"
                      limit={3}
                      excludeIds={page?._id ? [page?._id] : []}
                    />
                    <div className="text-center mt-6">
                      <a
                        href="/blog"
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        style={{ transition: "all .15s ease" }}
                      >
                        Vedi tutti
                      </a>
                    </div>
                    <div className="mt-10 py-10 border-t border-gray-300">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4 text-center">
                          <Link href="/#contattami">
                            <a className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
                              Contattami
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="font-bold text-gray-800 mt-8"
                >
                  Check Tailwind Starter Kit!
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div> */}
        </div>
      </section>

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

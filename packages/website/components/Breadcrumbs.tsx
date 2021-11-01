import Head from "next/head";
import Link from "next/link";
import React from "react";

import { BASE_URL, BreadcrumbsProps } from "../lib/routing";

interface Props {
  breadcrumbs?: BreadcrumbsProps;
}

export const Breadcrumbs: React.FC<Props> = ({ breadcrumbs = [] }) => {
  const breadcrumbsJsonLd = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs
      .filter((item, i) => item.slug || i === breadcrumbs.length - 1)
      .map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        item: item.slug ? `${BASE_URL}${item.slug}` : undefined,
      })),
  };
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbsJsonLd),
          }}
        />
      </Head>

      <div
        className="
          block
          text-sm text-left text-gray-600
          bg-gray-500 bg-opacity-10
          h-12
          flex
          items-center
          p-4
          rounded-md
          mb-4
        "
        role="alert"
      >
        <ol class="list-reset flex text-grey-dark">
          {breadcrumbs.map(({ slug, title }) =>
            slug ? (
              <li>
                <Link href={slug}>
                  <a className="underline">{title}</a>
                </Link>{" "}
                / &nbsp;
              </li>
            ) : (
              <li>{title}</li>
            )
          )}
        </ol>
      </div>
    </>
  );
};

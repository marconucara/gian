import { gql } from "@apollo/client";
import Head from "next/head";
import { NextSeo } from "next-seo";
import React from "react";

import { SanitySeoFragment } from "../../generated/graphql";
import { sanityImageStatic } from "./SanityImage";

gql`
  fragment SanitySeo on Seo {
    id: slug {
      current
    }
    title
    slug {
      current
    }
    description
    image {
      asset {
        _id
        assetId
      }
    }
    noindex
    ldJson {
      value
    }
  }
`;

type Props = {
  component?: SanitySeoFragment | null;
  slug: string;
};

const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

export const SanitySeo: React.FC<Props> = ({ component, slug }) => {
  const { title, description, noindex, ldJson, image } = component || {};

  const pageUrl = `${
    process.env.NEXT_PUBLIC_STOREFRONT_URL || "https://www.amusi.it"
  }${slug}`.replace(/\/*$/, "");

  const openGraphImageSize = {
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
  };

  const openGraphImage = sanityImageStatic({
    assetId: image?.asset?._id || "",
    width: openGraphImageSize.width,
    height: openGraphImageSize.height,
  });

  return (
    <>
      <NextSeo
        title={title || undefined}
        description={description || undefined}
        noindex={noindex || false}
        canonical={pageUrl}
        openGraph={{
          type: "website",
          url: pageUrl,
          title: title || undefined,
          description: description || undefined,
          images: openGraphImage
            ? [
                {
                  url: openGraphImage,
                  width: openGraphImageSize.width,
                  height: openGraphImageSize.height,
                },
              ]
            : undefined,
        }}
      />
      {(ldJson || []).map((ldJsonEntity, i) => (
        <Head key={i}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: ldJsonEntity?.value || "",
            }}
          />
        </Head>
      ))}
    </>
  );
};

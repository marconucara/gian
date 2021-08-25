import { gql } from "@apollo/client";
import imageUrlBuilder from "@sanity/image-url";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import React from "react";

import { SanityImageFragment } from "../../generated/graphql";
import { sanityClientConfig } from "../../lib/sanity";
import { useClientMediaQuery } from "../../hooks/useClientMediaQuery";

gql`
  query getImage($id: ID!) {
    SanityImageAsset(id: $id) {
      _id
      url
      path
      assetId
      extension
    }
  }
`;

gql`
  fragment SanityImage on SeoImage {
    alt
    crop {
      top
      bottom
      left
      right
    }
    hotspot {
      x
      y
      height
      width
    }
    asset {
      _id
      url
      path
      assetId
      extension
    }
  }
`;

type Sizes = Record<number, string>;

type AspectRationResponsive = {
  mediaQuery: Parameters<typeof useClientMediaQuery>["0"];
  value: number;
};

type Props = {
  asset: SanityImageFragment;
  objectFit?: React.ComponentProps<typeof Img>["objectFit"];
  priority?: boolean;
  className?: string;
};

type LayoutProps = {
  layout: "fill" | "responsive";
  sizes?: Sizes;
  aspectRatio?: number;
  width?: never;
  height?: never;
  aspectRatioResponsive?: AspectRationResponsive;
};

type FixedLayoutProps = {
  layout: "fixed";
  width: React.ComponentProps<typeof Img>["width"];
  height: React.ComponentProps<typeof Img>["height"];
  aspectRatio?: never;
  sizes?: never;
  aspectRatioResponsive?: never;
};

const builder = imageUrlBuilder(sanityClientConfig);

export const sanityImageStatic = ({
  assetId,
  width,
  height,
}: {
  assetId: string;
  width: number;
  height: number;
}): string | null => {
  return builder.image(assetId).width(width).height(height).fit("crop").url();
};

export const SanityImage: React.FC<Props & (LayoutProps | FixedLayoutProps)> =
  ({
    asset,
    aspectRatio,
    objectFit,
    sizes: sizesProp,
    layout = "responsive" as React.ComponentProps<typeof Img>["layout"],
    width: widthProp,
    height: heightProp,
    aspectRatioResponsive,
    priority,
    ...props
  }) => {
    const isAspectRatioResponsive = useClientMediaQuery(
      aspectRatioResponsive?.mediaQuery || { minWidth: 800 },
      false
    );

    const imageProps = useNextSanityImage(
      { clientConfig: sanityClientConfig },
      asset,
      {
        blurUpImageWidth: 10,
        blurUpImageQuality: 40,
        blurUpAmount: 10,
        imageBuilder: (imageUrlBuilder, options) => {
          const width =
            widthProp ||
            options.width ||
            Math.min(options.originalImageDimensions.width, 800);

          let builder = imageUrlBuilder.width(Number(width));

          if (heightProp) {
            builder = builder.height(Number(heightProp)).fit("crop");
          }

          if (aspectRatio) {
            builder = builder
              .height(
                Math.floor(
                  Number(width) *
                    (aspectRatioResponsive?.value && isAspectRatioResponsive
                      ? aspectRatioResponsive.value
                      : aspectRatio) || 1
                )
              )
              .fit("crop");
          }

          return builder;
        },
      }
    );

    const sizes = sizesProp
      ? `${Object.entries(sizesProp)
          .map(([viewport, size]) => `(min-width: ${viewport}px) ${size}`)
          .join(",")}, 100vw`
      : undefined;

    return layout !== "fill" ? (
      <Img
        {...imageProps}
        {...props}
        src={imageProps?.src || ""}
        alt={asset?.alt || ""}
        width={imageProps?.width || ""}
        height={imageProps?.height || ""}
        objectFit={objectFit}
        sizes={sizes}
        layout={layout}
        placeholder="blur"
        priority={priority}
      />
    ) : (
      <Img
        {...imageProps}
        {...props}
        src={imageProps?.src || ""}
        alt={asset?.alt || ""}
        objectFit={objectFit}
        sizes={sizes}
        layout={layout}
        placeholder="blur"
        priority={priority}
      />
    );
  };

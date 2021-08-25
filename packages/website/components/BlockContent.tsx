import blocksToHtml from "@sanity/block-content-to-html";
import SanityBlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import React from "react";
import slugify from "slugify";

import { useGetImageQuery } from "../generated/graphql";
import { getDocumentSlugById, useSanityRouting } from "../lib/routing";
import { sanityClientConfig } from "../lib/sanity";
import { SanityImage } from "./sanity/SanityImage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const neutralSerializer = (props: any) =>
  props?.children?.join ? props.children.join("") : props.children;

// used for raw serialize heading and create anchor (eg for blog index)
export const headingSerializers = {
  unknownType: neutralSerializer,
  unknownMark: neutralSerializer,
  types: {
    block: (props: unknown): string => neutralSerializer(props) + " ",
  },
};

const findHighestHeading = (blocks: { style: string; _type: string }[]) => {
  const min = blocks
    ?.filter((b) => b._type === "block")
    .reduce((acc, { style }) => {
      const level = style?.match(/^p?h(\d)$/)?.[1];
      return level ? Math.min(parseInt(level, 10), acc) : acc;
    }, Infinity);
  return isFinite(min) ? min : 0;
};
interface Serializer {
  types?: {
    block?: React.FC<{
      node: { style: string; children: React.ReactChildren };
    }>;
    seoImage?: React.FC<{
      node: {
        asset: { _ref: string };
        alt: string;
        centered: boolean;
        caption: string;
        rounded: boolean;
      };
    }>;
  };
  marks?: {
    strong: React.FC;
    centered: React.FC;
    internalLink: React.FC<{
      mark: { asButton: boolean; document: { _ref: string } };
    }>;
    externalLink: React.FC<{
      mark: { asButton: boolean; url: string; targetBlank: boolean };
    }>;
    attachment: React.FC<{ mark: { asset: { _ref: string } } }>;
  };
  list?: React.FC<{ type: string }>;
  listItem?: React.FC;
}

export const Component = ({ as, children, ...props }: any) => {
  return React.createElement(as, props, children);
};

const getSerializers = ({
  headingRenderers,
  headersOffset,
}: {
  headingRenderers?: React.FC<{ tag: React.ElementType }>[];
  headersOffset: number;
}): Serializer => ({
  types: {
    block(props) {
      const {
        node: { style = "normal" },
        children,
      } = props;

      if (/^p?h\d$/.test(style)) {
        const level =
          parseInt(style.match(/^p?h(\d)$/)?.[1] || "") - headersOffset;

        const tag = style.replace(/^ph\d$/, "p") as React.ElementType;

        if (headingRenderers?.[level]) {
          const HeadingRenderer = headingRenderers[level];

          return (
            <>
              <div
                id={`heading-${slugify(
                  blocksToHtml({
                    serializers: headingSerializers,
                    blocks: [props.node],
                  }),
                  { lower: true, strict: true }
                )}`}
              />
              <HeadingRenderer tag={tag}>{children}</HeadingRenderer>
            </>
          );
        } else {
          return <Component as={tag}>{children}</Component>;
        }
      }

      return (
        <Component as="p" className="mb-4">
          {children}
        </Component>
      );
    },
    seoImage({ node: { asset, alt, caption } }) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data } = useGetImageQuery({ variables: { id: asset._ref } });
      return (
        <>
          {data && (
            <SanityImage
              priority
              asset={{ asset: data?.SanityImageAsset, alt }}
              layout="responsive"
            />
          )}
          <p className="mb-4 text-sm italic text-center">{caption}</p>
        </>
      );
    },
  },
  marks: {
    strong(props) {
      return <strong>{props.children}</strong>;
    },
    centered({ children }) {
      // return <Text align="center">{children}</Text>;
      return <>{children}</>;
    },
    internalLink({ mark: { document, asButton }, children }) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { routingMapById } = useSanityRouting();

      const slug = getDocumentSlugById({ routingMapById, id: document._ref });

      // const Component = asButton ? Button : styled("a")``;

      return slug ? (
        <Link href={slug} passHref>
          <a>{children}</a>
        </Link>
      ) : (
        <>{children}</>
      );
    },
    attachment({ mark: { asset }, children }) {
      if (asset?._ref) {
        const assetId = asset?._ref
          .replace(/^[^-]*-/, "")
          .replace(/-(.*)$/, ".$1");

        return (
          <a
            href={`https://cdn.sanity.io/files/${sanityClientConfig.projectId}/${sanityClientConfig.dataset}/${assetId}?dl`}
          >
            <a>{children}</a>
          </a>
        );
      }
      return <>{children}</>;
    },
    externalLink({ mark: { targetBlank, asButton, url }, children }) {
      const additionalProps = targetBlank
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

      const NextLinkWrapper: React.FC = ({ children }) => (
        <Link href={url} passHref>
          {children}
        </Link>
      );

      const Wrap = url.startsWith("/") ? NextLinkWrapper : React.Fragment;

      // const Component = asButton ? Button : styled("a")``;

      return (
        <Wrap>
          <Component href={url} {...additionalProps} as="a">
            {children}
          </Component>
        </Wrap>
      );
    },
  },
  list({ children, type }) {
    if (type === "number") {
      return <ol className="pl-8 mb-4">{children}</ol>;
    } else {
      return <ul className="list-disc pl-8 mb-4">{children}</ul>;
    }
  },
  listItem({ children }) {
    return <li className="mb-4">{children}</li>;
  },
});

interface BlockContentProps {
  blocks: unknown;
  headingRenderers?: React.FC<{ tag: React.ElementType }>[];
}

export const BlockContent: React.FC<BlockContentProps> = ({
  blocks,
  headingRenderers = [],
}) => {
  const serializers = getSerializers({
    headingRenderers,
    headersOffset: findHighestHeading(
      blocks as { style: string; _type: string }[]
    ),
  });

  return <SanityBlockContent serializers={serializers} blocks={blocks} />;
};

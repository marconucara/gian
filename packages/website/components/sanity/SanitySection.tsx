import { gql } from "@apollo/client";

import React from "react";

import {
  EditorialTextFragmentDoc,
  SanityImageFragmentDoc,
  SectionFragment,
} from "../../generated/graphql";
import { BreadcrumbsProps, PaginationProps } from "../../lib/routing";
import { Breadcrumbs } from "../Breadcrumbs";
import { SanityEditorialText } from "../sanity/SanityEditorialText";
import { SanityPostListing } from "./SanityPostListing";

gql`
  ${EditorialTextFragmentDoc}
  ${SanityImageFragmentDoc}
  fragment Section on Section {
    _key
    theme
    components {
      __typename
      ... on EditorialText {
        ...EditorialText
      }
      ... on PostListing {
        _key
      }
    }
  }
`;

type Props = {
  component: SectionFragment;
  defaultWrapperSize?: "normal" | "small";
  pagination?: PaginationProps;
  breadcrumbs?: BreadcrumbsProps;
};

export const SanitySection: React.FC<Props> = ({
  component: { components, theme },
  defaultWrapperSize = "normal",
  pagination,
  breadcrumbs,
}) => {
  return (
    // backgroundColor={(theme as ThemeColor) || undefined}
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        {components?.map((component, componentIndex) => (
          <div
            className="mb-8"
            // size={defaultWrapperSize}
            key={component?._key || componentIndex}
          >
            {componentIndex === 0 && breadcrumbs && (
              <Breadcrumbs breadcrumbs={breadcrumbs} />
            )}

            {component?.__typename === "EditorialText" && (
              <SanityEditorialText component={component} />
            )}

            {component?.__typename === "PostListing" && pagination && (
              <SanityPostListing pagination={pagination} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

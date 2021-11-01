import { gql } from "@apollo/client";
import React from "react";

import {
  HeroFragmentDoc,
  SectionFragmentDoc,
  SectionsFragment,
} from "../../generated/graphql";
import { BreadcrumbsProps, PaginationProps } from "../../lib/routing";
import { SanityHero } from "./SanityHero";
import { SanitySection } from "./SanitySection";

gql`
  ${SectionFragmentDoc}
  fragment Sections on HeroOrSection {
    ... on Section {
      ...Section
    }
    ... on Hero {
      ...Hero
    }
  }
`;

type Props = {
  sections: SectionsFragment[];
  defaultWrapperSize?: "normal" | "small";
  pagination?: PaginationProps;
  breadcrumbs?: BreadcrumbsProps;
};

export const SanitySections: React.FC<Props> = ({
  sections,
  defaultWrapperSize = "normal",
  pagination,
  breadcrumbs,
}) => {
  const firstNormalSectionIndex = sections.findIndex(
    (s) => s.__typename === "Section"
  );

  return (
    <>
      {sections?.map((section, sectionIndex) => (
        <React.Fragment key={section?._key || sectionIndex}>
          {section?.__typename === "Section" && (
            <SanitySection
              component={section}
              defaultWrapperSize={defaultWrapperSize}
              pagination={pagination}
              breadcrumbs={
                sectionIndex === firstNormalSectionIndex
                  ? breadcrumbs
                  : undefined
              }
            />
          )}
          {section?.__typename === "Hero" && <SanityHero component={section} />}
        </React.Fragment>
      ))}
    </>
  );
};

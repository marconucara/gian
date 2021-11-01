import { gql } from "@apollo/client";
import React from "react";

import {
  SanitySeoFragmentDoc,
  SectionsFragment,
  SectionsFragmentDoc,
  useGetModularPageQuery,
} from "../../generated/graphql";
import { RoutingConfig } from "../../lib/routing";
import { SanitySections } from "../sanity/SanitySections";
import { SanitySeo } from "../sanity/SanitySeo";

// this query could be done with this:
//  Post(id: $id) {
//  but you would miss deaft for live-preview
gql`
  ${SanitySeoFragmentDoc}
  ${SectionsFragmentDoc}
  query getModularPage($id: ID!) {
    page: allModularPage(
      where: { _id: { matches: $id } }
      sort: { _updatedAt: DESC }
      limit: 1
    ) {
      _id
      seo {
        ...SanitySeo
      }
      title
      sections {
        ...Sections
      }
    }
  }
`;

type ModularPageProps = {
  routingConfig: RoutingConfig;
};

export const ModularPage: React.FC<ModularPageProps> = ({
  routingConfig: { id, slug, pagination, breadcrumbs },
}) => {
  const { loading, error, data } = useGetModularPageQuery({
    variables: {
      id,
    },
  });
  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  const page = data?.page?.[0];

  // remove first component of first section if this is not the first page
  // const filteredSections =
  //   pagination?.pageIndex === 1
  //     ? page?.sections
  //     : (page?.sections || []).map((section, sectionIndex) =>
  //         section?.__typename === "Section"
  //           ? {
  //               ...section,
  //               components: (section.components || []).filter(
  //                 (component, componentIndex) =>
  //                   sectionIndex !== 1 || componentIndex !== 0
  //               ),
  //             }
  //           : section
  //       );

  return (
    <>
      <SanitySeo component={page?.seo} slug={slug} />
      <SanitySections
        sections={(page?.sections || []) as SectionsFragment[]}
        defaultWrapperSize="small"
        pagination={pagination}
        breadcrumbs={breadcrumbs}
      />
    </>
  );
};

import { gql } from "@apollo/client";
import React from "react";

import { EditorialTextFragment } from "../../generated/graphql";
import { BlockContent, Component } from "../BlockContent";

gql`
  fragment EditorialText on EditorialText {
    _key
    textRaw
  }
`;

type Props = {
  component: EditorialTextFragment;
};

export const SanityEditorialText: React.FC<Props> = ({
  component: { textRaw },
}) => (
  <div style={{ maxWidth: "800px", margin: "auto" }}>
    <BlockContent
      blocks={textRaw}
      headingRenderers={[
        ({ tag, children }) => (
          <Component as={tag} className="mb-4 text-2xl font-bold">
            {children}
          </Component>
        ),
        ({ tag, children }) => (
          <Component as={tag} className="mb-4 text-xl font-bold">
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
  </div>
);

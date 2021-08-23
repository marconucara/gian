import { gql } from "@apollo/client";
import React from "react";

import { EditorialTextFragment } from "../../generated/graphql";
import { BlockContent } from "../BlockContent";

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
  <BlockContent
    blocks={textRaw}
    headingRenderers={[
      ({ tag, children }) => (
        <h2 className="mb-4 text-2xl font-bold">{children}</h2>
      ),
      ({ tag, children }) => (
        <h3 className="mb-4 text-xl font-bold">{children}</h3>
      ),
      ({ tag, children }) => (
        <h4 className="mb-4 text-l font-bold">{children}</h4>
      ),
    ]}
  />
);

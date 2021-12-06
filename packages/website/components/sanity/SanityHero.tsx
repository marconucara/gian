import { gql } from "@apollo/client";
import React from "react";

import { HeroFragment } from "../../generated/graphql";
import { BlockContent } from "../BlockContent";
import { SanityEditorialText } from "./SanityEditorialText";
import { SanityImage } from "./SanityImage";

gql`
  fragment Hero on Hero {
    _key
    image {
      ...SanityImage
    }
  }
`;

type Props = {
  component: HeroFragment;
};

export const SanityHero: React.FC<Props> = ({ component: { image } }) => (
  <div
    className="top-0 w-full  bg-center bg-cover h-44 lg:h-60 xl:h-80"
    style={{
      backgroundImage: `url('${image?.asset?.url}')`,
    }}
  />
);

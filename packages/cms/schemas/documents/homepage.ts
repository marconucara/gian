import { MdHome } from "react-icons/md";

import { PreviewReturn } from "../schemaTypes";

export const homepage = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon: MdHome,
  fields: [
    {
      name: "seo",
      title: "Seo",
      type: "seo",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => boolean }): boolean =>
        Rule.required(),
    },
    {
      name: "cover",
      title: "Cover",
      type: "seoImage",
      validation: (Rule: { required: () => boolean }): boolean =>
        Rule.required(),
    },
    {
      name: "intro",
      title: "Intro",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "seo.slug.current",
      media: "seo.image",
    },
    prepare({
      title,
      media,
      slug,
    }: {
      title: string;
      media: string;
      slug: string;
    }): PreviewReturn {
      return {
        title,
        media,
        subtitle: `/`,
      };
    },
  },
};

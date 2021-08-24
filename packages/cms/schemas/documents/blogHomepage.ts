import { MdHome } from "react-icons/md";

import { allSectionTypes } from "../objects/section";
import { PreviewReturn } from "../schemaTypes";

export const blogHomepage = {
  name: "blogHomepage",
  title: "Blog Homepage",
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
      name: "sections",
      title: "Sections",
      type: "array",
      of: allSectionTypes,
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
        subtitle: `/${slug}`,
      };
    },
  },
};

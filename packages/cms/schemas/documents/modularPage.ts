import { MdViewQuilt } from "react-icons/md";

import { allSectionTypes } from "../objects/section";
import { PreviewReturn } from "../schemaTypes";

export const modularPage = {
  name: "modularPage",
  title: "Modular Page",
  type: "document",
  icon: MdViewQuilt,
  fields: [
    {
      name: "seo",
      title: "Seo",
      type: "seo",
    },
    {
      name: "parentPage",
      title: "Parent Page",
      description:
        "Leave it empty normal pages, use it for sub-pages. This field will reflects breacrumbs and links.",
      type: "reference",
      to: [{ type: "modularPage" }],
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => boolean }): boolean =>
        Rule.required(),
    },
    {
      name: "breadcrumb",
      title: "Breadcrumb",
      type: "boolean",
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
        subtitle: `/${slug !== "/" ? slug : ""}`,
      };
    },
  },
};

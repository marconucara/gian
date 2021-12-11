import { MdHome } from "react-icons/md";
import { getEditorialBlockText } from "../objects/blockContent";

import { ObjectType, PreviewReturn } from "../schemaTypes";

export const service: ObjectType = {
  name: "service",
  title: "service",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "seoImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "text",
      title: "Text",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};

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
      name: "profile",
      title: "Profile photo",
      type: "seoImage",
      validation: (Rule: { required: () => boolean }): boolean =>
        Rule.required(),
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [{ name: "service", type: "service" }],
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

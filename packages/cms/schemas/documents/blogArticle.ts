import { MdEdit } from "react-icons/md";

import { PreviewReturn } from "../schemaTypes";

export const blogArticle = {
  name: "blogArticle",
  title: "Blog Post",
  type: "document",
  icon: MdEdit,
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
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
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
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "blogAuthor" }],
    },
    {
      name: "publishDate",
      title: "Publish Date",
      description: "It will be visible in the article",
      type: "date",
      dateFormat: "DD/MM/YYYY",
      validation: (Rule: { required: () => boolean }): boolean =>
        Rule.required(),
    },
    {
      name: "modifiedDate",
      title: "Modified Date",
      description: "It will be visible in the article",
      type: "date",
      dateFormat: "DD/MM/YYYY",
    },
    {
      name: "indexHeading",
      title: "Index Heading",
      type: "string",
      description:
        "Choose the heading to search in the page to generate the index",
      options: {
        list: [
          {
            title: "h2",
            value: "h2",
          },
          {
            title: "h3",
            value: "h3",
          },
          {
            title: "h4",
            value: "h4",
          },
        ],
      },
      validation: (Rule: { required: () => boolean }): boolean =>
        Rule.required(),
    },
    {
      name: "content",
      title: "Content",
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
        subtitle: `/${slug}`,
      };
    },
  },
};

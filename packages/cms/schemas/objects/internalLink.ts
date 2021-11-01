import { FaLink } from "react-icons/fa";

import { ObjectType } from "../schemaTypes";

export const internalLink: ObjectType = {
  name: "internalLink",
  type: "object",
  title: "Internal link",
  blockEditor: {
    icon: FaLink,
  },
  fields: [
    {
      title: "Title",
      name: "title",
      description: "Optional override",
      type: "string",
    },
    {
      name: "document",
      title: "Document",
      type: "reference",
      to: [
        { type: "blogArticle" },
        { type: "blogHomepage" },
        { type: "modularPage" },
        { type: "homepage" },
      ],
    },
    {
      name: "anchor",
      title: "Anchor",
      type: "string",
    },
    { type: "boolean", name: "asButton", title: "As Button" },
  ],
  preview: {
    select: {
      title: "title",
      documentTitle: "document.title",
    },
    prepare({ title, documentTitle }) {
      return {
        title: title || documentTitle,
      };
    },
  },
};

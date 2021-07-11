import { FcLink } from "react-icons/fc";

import { ObjectType } from "../schemaTypes";

export const internalLink: ObjectType = {
  name: "internalLink",
  type: "object",
  title: "Internal link",
  blockEditor: {
    icon: FcLink,
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
      to: [{ type: "post" }],
    },
    {
      name: "anchor",
      title: "Anchor",
      type: "string",
    },
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

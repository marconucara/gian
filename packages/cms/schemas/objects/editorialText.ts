import { ObjectType } from "../schemaTypes";
import { getEditorialBlockText } from "./blockContent";

export const editorialText: ObjectType = {
  name: "editorialText",
  title: "Editorial text",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      blocks: "text",
    },
    prepare({ blocks }) {
      return {
        title: getEditorialBlockText(blocks) || "No title",
      };
    },
  },
};

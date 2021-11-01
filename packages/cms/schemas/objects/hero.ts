import { ObjectType } from "../schemaTypes";
import { getEditorialBlockText } from "./blockContent";

export const hero: ObjectType = {
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "seoImage",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      blocks: "text",
      image: "image",
    },
    prepare({ blocks, image }) {
      return {
        title: `Hero: ${getEditorialBlockText(blocks) || "No title"}`,
        media: image,
      };
    },
  },
};

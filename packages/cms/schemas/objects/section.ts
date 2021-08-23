import { ObjectType } from "../schemaTypes";
import { getEditorialBlockText } from "./blockContent";

export const section: ObjectType = {
  name: "section",
  title: "Section",
  type: "object",
  fields: [
    {
      name: "theme",
      title: "Theme",
      description: `Choose the color scheme`,
      type: "string",
      options: {
        list: [
          {
            title: "Tertiary Lighter",
            value: "tertiaryLighter",
          },
        ],
      },
    },
    {
      name: "components",
      title: "Components",
      type: "array",
      of: [
        { type: "editorialText", name: "editorialText" },
        { type: "postListing", name: "postListing" },
      ],
    },
  ],
  preview: {
    select: {
      blocks: "components[0].text",
    },
    prepare({ blocks }) {
      return {
        title: getEditorialBlockText(blocks) || "No title",
      };
    },
  },
};

export const allSectionTypes = [{ type: "section", name: "section" }];

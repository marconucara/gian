import { MdPerson } from "react-icons/md";

import { PreviewReturn } from "../schemaTypes";

export default {
  name: "blogAuthor",
  title: "Blog Author",
  icon: MdPerson,
  type: "document",
  fields: [
    {
      name: "firstname",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastname",
      title: "Last Name",
      type: "string",
    },
    {
      name: "photo",
      title: "Photo",
      type: "seoImage",
    },
  ],
  preview: {
    select: {
      firstname: "firstname",
      lastname: "lastname",
      media: "photo",
    },
    prepare({
      firstname,
      lastname,
      media,
    }: {
      firstname: string;
      lastname: string;
      media: string;
    }): PreviewReturn {
      return {
        title: `${firstname} ${lastname}`,
        media,
      };
    },
  },
};

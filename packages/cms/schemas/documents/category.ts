export const modularPage = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "seo",
      title: "Seo",
      type: "seo",
    },
    {
      name: "cover",
      title: "Cover",
      type: "string",
      validation: (Rule: { required: () => boolean }): boolean =>
        Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => boolean }): boolean =>
        Rule.required(),
    },
    {
      name: "intro",
      title: "Intro",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "seo.slug.current",
      media: "cover",
    },
    prepare({
      title,
      media,
      slug,
    }: {
      title: string;
      media: string;
      slug: string;
    }): { title: string; media: string; subtitle: string } {
      return {
        title,
        media,
        subtitle: `/${slug}`,
      };
    },
  },
};

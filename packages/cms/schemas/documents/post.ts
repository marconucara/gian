export const modularPage = {
  name: "post",
  title: "Post",
  type: "document",
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
      title: "Publish date",
      name: "publishDate",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
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

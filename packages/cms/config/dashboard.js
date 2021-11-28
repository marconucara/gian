export default {
  widgets: [
    {
      name: "document-list",
      options: {
        title: "Last edited pages",
        order: "_updatedAt desc",
        types: ["blogArticle"],
        limit: 6,
        createButtonText: "Create a new Article",
      },
      layout: {
        height: "small",
      },
    },
    {
      name: "project-users",
      layout: {
        height: "small",
      },
    },

    {
      name: "project-info",
      layout: {
        width: "medium",
        height: "small",
      },
    },
  ],
};

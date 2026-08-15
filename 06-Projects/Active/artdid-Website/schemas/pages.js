export default {
  name: "page",
  title: "Page",
  type: "document",
  name: "slug",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
      rows: 20,
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
      description: "For SEO (150-160 characters)",
    },
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "For SEO (max 60 characters)",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
}
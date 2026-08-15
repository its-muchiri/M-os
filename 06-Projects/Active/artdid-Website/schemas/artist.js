export default {
  name: "artist",
  title: "Artist",
  type: "document",
  preview: {
    select: {
      name: "name",
      media: "portrait",
    },
    default: ["unassigned"],
  },
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "medium",
      title: "Medium",
      type: "string",
    },
    {
      name: "bio",
      title: "Biography",
      type: "array",
      of: [{ type: "block" }],
      rows: 10,
    },
    {
      name: "portrait",
      title: "Portrait",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: {
        type: "object",
        fields: [
          { name: "platform", title: "Platform", type: "string" },
          { name: "url", title: "URL", type: "url" },
        ],
      },
    },
    {
      name: "representedStatus",
      title: "Represented Status",
      type: "string",
      description: "e.g., 'Represented by Galerie OMR', 'Self-represented', 'Emerging artist'",
    },
    {
      name: "exhibitionHistory",
      title: "Exhibition History",
      type: "array",
      of: {
        type: "object",
        fields: [
          { name: "title", title: "Title", type: "string" },
          { name: "institution", title: "Institution", type: "string" },
          { name: "city", title: "City", type: "string" },
          { name: "year", title: "Year", type: "number" },
        ],
      },
    },
  ],
}
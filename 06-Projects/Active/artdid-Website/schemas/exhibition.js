export default {
  name: "exhibition",
  title: "Exhibition",
  type: "document",
  preview: {
    select: {
      title: "title",
      dates: "dates",
    },
    default: ["unassigned"],
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "dates",
      title: "Dates",
      type: "string",
      description: "e.g., 'June 15 – September 15, 2026'",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "Full gallery address",
    },
    {
      name: "curatorialStatement",
      title: "Curatorial Statement",
      type: "array",
      of: [{ type: "block" }],
      rows: 10,
    },
    {
      name: "featuredArtists",
      title: "Featured Artists",
      type: "array",
      of: [{ type: "reference", to: { type: "artist" } }],
    },
    {
      name: "featuredArtworks",
      title: "Featured Artworks",
      type: "array",
      of: [{ type: "reference", to: { type: "artwork" } }],
    },
    {
      name: "installationViews",
      title: "Installation Views",
      type: "array",
      of: { type: "image" },
      options: {
        hotspot: true,
      },
    },
    {
      name: "pressCoverage",
      title: "Press Coverage",
      type: "array",
      of: {
        type: "object",
        fields: [
          { name: "publication", title: "Publication", type: "string" },
          { name: "date", title: "Date", type: "string" },
          { name: "url", title: "URL", type: "url" },
        ],
      },
    },
    {
      name: "visitorInformation",
      title: "Visitor Information",
      type: "object",
      fields: [
        {
          name: "hours",
          title: "Hours",
          type: "string",
        },
        {
          name: "admission",
          title: "Admission",
          type: "string",
          description: "e.g., 'Free', '$10', 'By donation'",
        },
        {
          name: "transport",
          title: "Transport",
          type: "string",
          description: "Nearest transit, parking info",
        },
      ],
    },
  ],
}
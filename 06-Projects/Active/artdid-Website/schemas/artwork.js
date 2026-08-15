export default {
  name: "artwork",
  title: "Artwork",
  type: "document",
  preview: {
    select: {
      title: "title",
      artist: { name: "artist.name" },
      media: "medium",
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
      name: "artist",
      title: "Artist",
      type: "reference",
      to: [{ type: "artist" }],
    },
    {
      name: "year",
      title: "Year",
      type: "number",
      description: "Year the artwork was created",
    },
    {
      name: "medium",
      title: "Medium",
      type: "string",
      description: "e.g., 'Oil on canvas', 'Archival pigment print', 'Bronze edition of 3'",
    },
    {
      name: "dimensions",
      title: "Dimensions",
      type: "object",
      fields: [
        {
          name: "height",
          title: "Height",
          type: "number",
          description: "Height in cm",
        },
        {
          name: "width",
          title: "Width",
          type: "number",
          description: "Width in cm",
        },
        {
          name: "depth",
          title: "Depth",
          type: "number",
          description: "Depth in cm (if applicable)",
        },
      ],
      preview: {
        select: {
          height: "height",
          width: "width",
        },
      },
    },
    {
      name: "price",
      title: "Price",
      type: "object",
      fields: [
        {
          name: "amount",
          title: "Amount",
          type: "number",
          description: "Price in USD",
        },
        {
          name: "currency",
          title: "Currency",
          type: "string",
          default: "USD",
        },
        {
          name: "availability",
          title: "Availability",
          type: "string",
          options: {
            list: ["For Sale", "Sold", "Inquiry Only", "Not For Sale"],
          },
        },
      ],
      preview: {
        select: {
          amount: "amount",
        },
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.min(1),
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: { type: "string" },
      description: "e.g., 'abstract', 'seascape', 'minimalist', 'contemporary'",
    },
    {
      name: "provenance",
      title: "Provenance",
      type: "textarea",
      rows: 5,
      description: "History of ownership and exhibition history",
    },
  ],
}
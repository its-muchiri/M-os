export default {
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    {
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      description: "Displayed in browser tab and header",
    },
    {
      name: "siteTagline",
      title: "Site Tagline",
      type: "string",
      description: "Short descriptive tagline",
    },
    {
      name: "primaryColor",
      title: "Primary Color",
      type: "string",
      description: "Hex color code, e.g., #D79922",
    },
    {
      name: "secondaryColor",
      title: "Secondary Color",
      type: "string",
      description: "Hex color code, e.g., #0E491D",
    },
    {
      name: "accentColor",
      title: "Accent Color",
      type: "string",
      description: "Hex color code for highlights",
    },
    {
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
    },
    {
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    },
    {
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "siteTitle",
    },
  },
}
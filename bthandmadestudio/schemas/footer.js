export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Important Link",
      name: "importantLinks",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "link" }],
        },
      ],
    },
    {
      title: "Additional Links",
      name: "additionalLinks",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "link" }],
        },
      ],
    },
  ],
};

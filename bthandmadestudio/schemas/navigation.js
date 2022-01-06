export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "to",
      title: "To",
      type: "string",
      readOnly: "true",
    },
    {
      name: "position",
      title: "Position",
      type: "number",
    },
    {
      name: "active",
      title: "Active",
      type: "boolean",
    },
  ],
};

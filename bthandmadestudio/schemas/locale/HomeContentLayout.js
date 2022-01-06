export default {
  name: "content",
  title: "Content",
  type: "object",
  fields: [
    {
      name: "contenttitle",
      title: "Content Title",
      type: "string",
    },
    {
      name: "contentimage",
      title: "Content Image",
      type: "image",
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
    },
    {
      name: "buttontext",
      title: "Button Text",
      type: "string",
    },
    {
      name: "buttonlink",
      title: "Button Link",
      type: "string",
    },
    {
      name: "quote",
      title: "Quote",
      type: "blockContent",
    },
  ],
};

export default {
  name: "contactpage",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "parallaximage",
      title: "Parallax Image",
      type: "image",
    },
    {
      name: "parallaxheight",
      title: "Parallax Height (Recommended: 80)",
      type: "number",
    },
    {
      name: "parallaxtext",
      title: "Parallax Text",
      type: "string",
    },
    {
      name: "parallaxtextposition",
      title: "Parallax Text Position",
      type: "string",
    },
    {
      title: "Heading (Above Contact Form)",
      name: "heading",
      type: "blockContent",
    },
    {
      title: "Footer (Below Contact Form)",
      name: "footer",
      type: "blockContent",
    },
  ],
};

export default {
  name: "productpage",
  title: "Product Page",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      Title: "Page Header Image",
      name: "parallaximage",
      type: "image",
    },
    {
      title: "Page Header Text",
      name: "parallaxtext",
      type: "string",
    },
    {
      title: "Page Header Height (Recommended: 80)",
      name: "parallaxheight",
      type: "number",
    },
    {
      title: "Content Section 1 (Above product section)",
      name: "contentsection1",
      type: "blockContent",
    },
    {
      title: "Products",
      name: "products",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
    {
      title: "Content Section 2 (Below product section)",
      name: "contentsection2",
      type: "blockContent",
    },
  ],
};

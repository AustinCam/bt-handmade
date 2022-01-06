/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "aboutpage",
  title: "About Page",
  type: "document",
  fields: [
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
      title: "Page Header Height (Recommended: 45)",
      name: "parallaxheight",
      type: "number",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Panel 1",
      name: "panel1",
      type: "blockContent",
    },
    {
      title: "Panel 2",
      name: "panel2",
      type: "image",
    },
    {
      title: "Panel 3",
      name: "panel3",
      type: "image",
    },
    {
      title: "Panel 4",
      name: "panel4",
      type: "blockContent",
    },
  ],
};

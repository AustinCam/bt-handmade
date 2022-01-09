import urlBuilder from "@sanity/image-url";

export const urlFor = (source) =>
  urlBuilder({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET_ID,
  }).image(source);

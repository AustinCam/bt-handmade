import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET_ID,
  apiVersion: "2022-01-06", // use current UTC date - see "specifying API version"!
  // token: "sanity-auth-token", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

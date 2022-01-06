// import sanityClient from "@sanity/client";

// export default sanityClient({
//   projectId: "s4mmkd89",
//   dataset: "production",
// });

import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "q89o6u8j",
  dataset: "production",
  apiVersion: "2022-01-06", // use current UTC date - see "specifying API version"!
  // token: "sanity-auth-token", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

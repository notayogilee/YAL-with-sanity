import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: "dkeqar38",
  dataset: "production",
  useCdn: true
})
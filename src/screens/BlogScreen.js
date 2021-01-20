import React, { useState, useEffect } from 'react';
import sanityClient from '../client';

const BlogScreen = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post"]{
      title,
      slug,
      author,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`).then((data) => setBlogData(data))
      .catch((error) => console.error(error))
  }, []);
  console.log(blogData)
  return (
    <>
      <h1>BlogScreen</h1>
    </>
  )
}

export default BlogScreen

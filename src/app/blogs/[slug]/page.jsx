import React from 'react';
import BlogPage from '@components/blog-page/blog-single/BlogSingle';

export async function generateMetadata({ params }) {
  const id = params.slug; // Get the dynamic blog ID from params
  console.log("Blog ID from params:", id); // Debugging log

  const apiUrl = process.env.NODE_ENV === 'production'
    ? `https://trafyai.com/api/blogs/getBlogDetail/${id}`
    : `http://localhost:5002/api/blogs/getBlogDetail/0Y8EugZynjaf9OnEj3uT`;

  console.log("API URL:", apiUrl); // Debugging log

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch blog data: ${res.statusText}`);
    }

    const blogData = await res.json();

    return {
      title: blogData.title,
      description: blogData.metaDescription,
      openGraph: {
        title: blogData.title,
        description: blogData.metaDescription,
        url: apiUrl,
        images: [
          {
            url: blogData.metaImage || '/default-image.jpg', // Fallback image URL
            width: 800,
            height: 600,
            alt: blogData.title
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: blogData.title,
        description: blogData.metaDescription,
        images: [blogData.metaImage || '/default-image.jpg'] // Fallback image URL
      }
    };
  } catch (error) {
    console.error("Error generating metadata:", error.message);
    throw new Error(`Failed to generate metadata: ${error.message}`);
  }
}

export default async function BlogSinglePage({ params }) {
  const blogId = params.slug; // Get blog ID from URL params
  const apiUrl = process.env.NODE_ENV === 'production'
    ? `https://trafyai.com/api/blogs/getBlogDetail/${blogId}`
    : `http://localhost:5002/api/blogs/getBlogDetail/0Y8EugZynjaf9OnEj3uT`;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error('Failed to fetch blog data');
    }

    const blogData = await res.json();

    return <BlogPage blogData={blogData} />;
  } catch (error) {
    console.error('Error fetching blog data:', error.message);
    // Optionally handle the error on the frontend (e.g., show an error message)
    return <div>Error loading blog data. Please try again later.</div>;
  }
}

'use client'
import React, { useEffect, useState } from "react";
import '@styles/blog/BlogSingle.css';
import Twitter from '@public/assets/Images/comman/common/socials-black/twitter.png';
import Linkedin from '@public/assets/Images/comman/common/socials-black/linkedin.png';
import Facebook from '@public/assets/Images/comman/common/socials-black/facebook.png';
import Twitter_w from '@public/assets/Images/comman/common/socials-white/twitter-w.png';
import Linkedin_w from '@public/assets/Images/comman/common/socials-white/linkedin-w.png';
import Facebook_w from '@public/assets/Images/comman/common/socials-white/facebook-w.png';
import SS from '@public/assets/Images/blog/ss.jpeg';

import Image from "next/image";

export default function BlogPage({ blogId }) {
  const [blogData, setBlogData] = useState(null);
  const [userData, setUserData] = useState({ email: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`http://localhost:5002/api/blogs/getBlogDetail/0Y8EugZynjaf9OnEj3uT`);
        if (!response.ok) throw new Error('Error fetching blog data');
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [blogId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email } = userData;

    if (!email) {
      setErrorMessage("Please fill in the required fields.");
      return;
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    };

    try {
      const response = await fetch('https://newsletter-form-9e6c9-default-rtdb.firebaseio.com/NewsLetterForm.json', options);
      if (response.ok) {
        setSubscribed(true);
        setErrorMessage("");
        setUserData({ email: "" });
      } else {
        setErrorMessage("Error submitting the form. Please try again later.");
      }

      const emailRes = await fetch('http://localhost:5002/newsletter/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (!emailRes.ok) throw new Error('Error sending email');
    } catch (error) {
      console.error("Error submitting the form:", error);
      setErrorMessage("Error submitting the form. Please try again later.");
    }
  };

  const renderFormOrMessage = () => {
    if (subscribed) {
      return (
        <div className="blog-newsletter-form-thankyou">
          <h3>Thank you for subscribing to our newsletter!</h3>
        </div>
      );
    } else {
      return (
        <div className="blog-newsletter-container-inner">
          <div className="blog-newsletter-heading">
            <h3>Subscribe to our newsletter</h3>
          </div>
          <div className="blog-newsletter-form">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleInputChange}
                required
                autoComplete="off"
                name="email"
                className="blog-newsletter-email"
              />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      );
    }
  };

  const shareToLinkedIn = () => {
    const postTitle = encodeURIComponent(blogData?.title || "");
    const postUrl = encodeURIComponent(`https://trafyai.com/blogs/${blogId}`);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}&title=${postTitle}`, '_blank', 'width=600,height=400');
  };

  const shareToTwitter = () => {
    const postTitle = encodeURIComponent(blogData?.title || "");
    const postUrl = encodeURIComponent(`https://trafyai.com/blogs/${blogId}`);
    window.open(`https://twitter.com/intent/tweet?text=${postTitle}&url=${postUrl}`, '_blank', 'width=600,height=400');
  };

  const shareToFacebook = () => {
    const postTitle = encodeURIComponent(blogData?.title || "");
    const postUrl = encodeURIComponent(`https://trafyai.com/blogs/${blogId}`);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`, '_blank', 'width=600,height=400');
  };

  if (!blogData) return <p>Loading...</p>;

  return (
    <main>
      <div className="blog-page">
        <div className="blog-page-container">
          <section className="blog-page-hero-section">
            <div className="blog-page-hero-section-container">
              <div className="blog-page-hero-section-category">
                <p className="blog-page-hero-category">{blogData.category}</p>
              </div>
              <div className="blog-page-hero-section-heading">
                <h1>{blogData.title}</h1>
              </div>
              <div className="blog-page-hero-section-para">
                <p>{blogData.metaDescription}</p>
              </div>
              <div className="blog-page-hero-section-author">
                <p>By <span style={{fontWeight:"700"}}>{props.author} </span></p>
                <span style={{color:"#d1d1d1"}}>|</span>
                <p>{props.date}</p>
                <span style={{color:"#d1d1d1"}}>|</span>
                <p>{props.read}</p>
              </div>
            </div>
          </section>

          <section className="blog-page-article-section">
            <div className="blog-page-article-section-container">
              <div className="blog-page-article-contents">
                {Array.isArray(blogData.description) ? (
                  blogData.description.map((desc, descIndex) => (
                    <div className="blog-page-article-socials-description" key={descIndex}>
                      {/* <p>{desc}</p> */}
                      {/* <Image src={SS} style={{width:"100%",height:"100%", borderRadius:"8px"}}/> */}
                    </div>
                  ))
                ) : (
                  <div className="blog-page-article-socials-description">
                    <p>{blogData.description}</p>
                  </div>
                )}

                {blogData.mainArticle && blogData.mainArticle.map((article, mainIndex) => (
                  <div className="blog-page-article-main-contents" key={mainIndex}>
                    <h1 id={mainIndex}>{article.heading}</h1>
                    {Array.isArray(article.description) ? (
                      article.description.map((desc, descIndex) => (
                        <p key={descIndex}>{desc}</p>
                      ))
                    ) : (
                      <p>{article.description}</p>
                    )}
                  </div>
                ))}
                <div className="blog-page-article-socials">
                  Share:
                  <Image src={Linkedin} alt="" onClick={shareToLinkedIn} className="blog-social-b" />
                  <Image src={Facebook} alt="" onClick={shareToFacebook} className="blog-social-b" />
                  <Image src={Twitter} alt="" onClick={shareToTwitter} className="blog-social-b" />
                </div>
              </div>
            </div>
          </section>

          <section className="blog-other-article">
            <div className="blog-other-article-container"></div>
          </section>

          <section className="blog-newsletter">
            <div className="blog-newsletter-container">
              {renderFormOrMessage()} 
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
  const { blogId } = context.params; // Get blogId from URL params

  return {
    props: { blogId }, // Pass blogId to BlogPage component
  };
}

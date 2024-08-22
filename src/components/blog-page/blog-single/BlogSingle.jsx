'use client'
import React, { useRef, useState } from "react";
import '@styles/blog/BlogSingle.css';
import Twitter from '@public/assets/Images/comman/common/socials-black/twitter.png';
import Linkedin from '@public/assets/Images/comman/common/socials-black/linkedin.png';
import Facebook from '@public/assets/Images/comman/common/socials-black/facebook.png';
import Twitter_w from '@public/assets/Images/comman/common/socials-white/twitter-w.png';
import Linkedin_w from '@public/assets/Images/comman/common/socials-white/linkedin-w.png';
import Facebook_w from '@public/assets/Images/comman/common/socials-white/facebook-w.png';

import Image from "next/image";


export default function BlogPage(props) {


   const [userData, setUserData] = useState({
    email: ""
  });

  
  const [errorMessage, setErrorMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  
    

  const currentPageUrl = `https://trafyai.com/blogs/${props.id}`;
  

  const scrollToHeading = (headingId) => {
    const headingElement = document.getElementById(headingId);
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // State to track if the user has subscribed

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

  // Validation of email format can be added here if needed

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData) // Use userData instead of formData
  };

  try {
    const response = await fetch('https://newsletter-form-9e6c9-default-rtdb.firebaseio.com/NewsLetterForm.json', options);

    if (response.ok) {
      setSubscribed(true); // Set subscribed state to true
      setErrorMessage(""); // Clear error message
      setUserData({ email: "" }); // Clear the input field
    } else {
      setErrorMessage("Error submitting the form. Please try again later.");
    }

    // Send email to user
    const emailRes = await fetch('http://localhost:5002/newsletter/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    if (!emailRes.ok) {
      throw new Error('Error sending email');
    }
  } catch (error) {
    console.error("Error submitting the form:", error);
    setErrorMessage("Error submitting the form. Please try again later.");
  }
};

  



  // Function to render the form or the thank you message
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
            <form onSubmit={handleSubmit} >
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

  // Functions to share the current page to LinkedIn, Twitter, and Facebook
  const shareToLinkedIn = () => {
    const postTitle = encodeURIComponent(props.title);
    const postUrl = encodeURIComponent(currentPageUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}&title=${postTitle}`, '_blank', 'width=600,height=400');
  };
  
  const shareToTwitter = () => {
    const postTitle = encodeURIComponent(props.title);
    const postUrl = encodeURIComponent(currentPageUrl);
    window.open(`https://twitter.com/intent/tweet?text=${postTitle}&url=${postUrl}`, '_blank', 'width=600,height=400');
  };
  
  const shareToFacebook = () => {
    const postTitle = encodeURIComponent(props.title);
    const postUrl = encodeURIComponent(currentPageUrl);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`, '_blank', 'width=600,height=400');
  };
 
  const mTitle= props.title;
  const mDesc=props.metaDescription;


  return (
    <main>
      


      <div className="blog-page">
        <div className="blog-page-container">  
          <section className="blog-page-hero-section" style={{ backgroundColor: props.bgcolor }}>
            <div className="blog-page-hero-section-container">
              <div className="blog-page-hero-section-category">
                <p className="blog-page-hero-category">{props.category}</p>
              </div>
              <div className="blog-page-hero-section-heading">
                <h1>{props.title}</h1>
              </div>
              <div className="blog-page-hero-section-author">
                <p>{props.author}</p>
                <p>{props.date}</p>
                <p>{props.read}</p>
              </div>
            </div>
          </section>
        
          <section className="blog-page-article-section" >
            <div className="blog-page-article-section-container">
              <div className="blog-page-table-of-contents">
                <div className="blog-page-table-of-contents-container">
                  <h4>Table of contents</h4>
                  {props.mainArticle && Array.isArray(props.mainArticle) && props.mainArticle.map((article, index) => (
                  <p key={index} onClick={() => scrollToHeading(index)}>
                    {article.heading}
                  </p>
                ))}
                </div>
              </div>

              <div className="blog-page-article-contents">
                {Array.isArray(props.description) ? (
                  props.description.map((desc, descIndex) => (
                    <div className="blog-page-article-socials-description" key={descIndex}>
                      <p>{desc}</p>
                    </div>
                  ))
                ) : (
                  <div className="blog-page-article-socials-description">
                    <p>{props.description}</p>
                  </div>
                )}

              
              {props.mainArticle && props.mainArticle.map((article, mainIndex) => (
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
                  <Image src={Linkedin} alt="" onClick={shareToLinkedIn} className="blog-social-b"/>
                  <Image src={Facebook} alt="" onClick={shareToFacebook} className="blog-social-b"/>
                  <Image src={Twitter} alt="" onClick={shareToTwitter} className="blog-social-b"/>
                  <Image src={Linkedin_w} alt="" onClick={shareToLinkedIn} className="blog-social-w"/>
                  <Image src={Facebook_w} alt="" onClick={shareToFacebook} className="blog-social-w"/>
                  <Image src={Twitter_w} alt="" onClick={shareToTwitter} width="30" height="30" className="blog-social-w"/>
                </div>
              </div>
            </div>
          </section>

          <section className="blog-newsletter">
            <div className="blog-newsletter-container">
              {renderFormOrMessage()} {/* Render form or thank you message */}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
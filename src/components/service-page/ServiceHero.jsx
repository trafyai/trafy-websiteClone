'use client';

import React, { useState } from "react";
import Swal from 'sweetalert2';

// Email validation function
const validateEmail = (email) => {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function ServiceHero() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email is valid
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      Swal.fire({
        title: 'Invalid Email',
        text: 'The email address you entered is not valid. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    setError("");

    // Show the "Thank you" popup
    Swal.fire({
      title: 'Form Submitted',
      text: 'Thank you for requesting a consultation.',
      icon: 'success',
      position: 'top-end',
      showConfirmButton: false,
      timer: 10000,
      timerProgressBar: true,
      toast: true,
      customClass: {
        popup: 'small-toast', 
        title: 'swal2-title-custom', 
        content: 'swal2-content-custom' 
      },
      didOpen: () => {
        const style = document.createElement('style');
        style.textContent = `
          .swal2-popup {
            font-family: 'Roboto', sans-serif !important;
          }
          .swal2-title {
            font-family: 'Roboto', sans-serif !important;
          }
          .swal2-content {
            font-family: 'Roboto', sans-serif !important;
          }
        `;
        document.head.append(style);
      }
    });

    // Store form data in Firebase Realtime DB
    try {
      const res = await fetch('https://courseenquiryform-default-rtdb.firebaseio.com/ServiceRequests.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      // Clear the form after successful submission
      setEmail("");
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error',
        text: 'Error: ' + error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="service-hero">
      <div className="service-hero-container">
        <div className="service-hero-heading">
          <h1>Innovate, Deploy and Scale the next Generative AI</h1>
          <p>
            Bring your ideas to life with Trafy AI integrated Gen AI app
            development team. Your growth partner at every level.
          </p>
        </div>
        <div className="service-hero-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Email Address"
              value={email}
              onChange={handleChange}
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Get a free consultation</button>
            <p>Start your journey today. Your idea is safe with us.</p>
          </form>
        </div>
      </div>
    </div>
  );
}

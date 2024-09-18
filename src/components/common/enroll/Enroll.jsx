'use client';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import '@styles/common/enroll/Enroll.css';

const Enroll = () => {
  const searchParams = useSearchParams();
  
  // Extract query parameters
  const courseHeading = searchParams.get('courseHeading');
  const courseDescription = searchParams.get('courseDescription');
  const rating = searchParams.get('rating');
  const fee = searchParams.get('fee');

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    state: "",
    category: "student",
    message: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let errorMessage = "";
    switch (name) {
      case "fname":
      case "lname":
        const namePattern = /^[A-Za-z]+$/;
        errorMessage = !namePattern.test(value) ? "Should contain alphabetic characters only." : "";
        break;
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errorMessage = !emailPattern.test(value) ? "Please enter a valid email address." : "";
        break;
      case "phone":
        const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        errorMessage = !phonePattern.test(value) ? "Please enter a valid phone number." : "";
        break;
      case "city":
        errorMessage = !value ? "Please enter your city." : "";
        break;
      default:
        break;
    }

    setErrorMessages({ ...errorMessages, [name]: errorMessage });
  };

  const selectCountry = (val) => {
    setFormData({ ...formData, country: val, state: 'Select State' });
  };

  const selectState = (val) => {
    setFormData({ ...formData, state: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fname, lname, email, phone, city } = formData;

    const newErrorMessages = {
      fname: !fname ? "Please enter your first name." : "",
      lname: !lname ? "Please enter your last name." : "",
      email: !email ? "Please enter your email address." : "",
      phone: !phone ? "Please enter your phone number." : "",
      city: !city ? "Please enter your city." : "",
      message: "" // No validation for the message field
    };

    setErrorMessages(newErrorMessages);

    if (Object.values(newErrorMessages).some(message => message !== "")) {
      return;
    }

    try {
      // Post form data to Firebase Realtime Database
      const response = await fetch('https://uiux-courseformdata-default-rtdb.firebaseio.com/enrollments.json', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...formData, fee })
      });

      if (response.ok) {
        setFormData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          city: "",
          country: "",
          state: "",
          category: "student",
          message: ""
        });
        setErrorMessages({});
        alert("Your enrollment has been submitted successfully!");
      } else {
        throw new Error("Error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setErrorMessages({ ...errorMessages, form: "Error submitting the form. Please try again later." });
    }
  };

  return (
    <div className='enroll'>
      <div className='enroll-container'>
        <div className='enroll-heading'>
          <h3>Course in Cart</h3>
        </div>

        <div className='enroll-content'>
          <div className="course-enquiry-form-contents">
            <form className="enquiryform" onSubmit={handleSubmit} autoComplete="off">
              <div className="enquiryname">
                <div className="enquiryfname">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    className="enquiry-fname"
                    required
                    onChange={handleChange}
                    value={formData.fname}
                  />
                  {errorMessages.fname && <p className="error-message">{errorMessages.fname}</p>}
                </div>
                <div className="enquirylname">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="enquiry-lname"
                    name="lname"
                    required
                    onChange={handleChange}
                    value={formData.lname}
                  />
                  {errorMessages.lname && <p className="error-message">{errorMessages.lname}</p>}
                </div>
              </div>
              <div className="enquiryemail">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="enquiry-email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
                {errorMessages.email && <p className="error-message">{errorMessages.email}</p>}
              </div>
              <div className="enquiryphone">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="enquiry-phone"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                />
                {errorMessages.phone && <p className="error-message">{errorMessages.phone}</p>}
              </div>
              <div className="enquirycountry">
                <CountryDropdown
                  value={formData.country}
                  onChange={(val) => selectCountry(val)}
                  className="country-dropdown"
                  defaultOptionLabel="Select Country"
                />
              </div>
              <div className="enquirystate">
                {formData.country ? (
                  <RegionDropdown
                    country={formData.country}
                    value={formData.state || ""}
                    onChange={(val) => selectState(val)}
                    className="state-dropdown"
                    defaultOptionLabel="Select State"
                  />
                ) : (
                  <select disabled className="state-dropdown">
                    <option>Select State</option>
                  </select>
                )}
              </div>
              <div className="enquirycategory">
                <select
                  name="category"
                  placeholder="Select Profession"
                  className="enquiry-category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="startup_founder">Startup Founder</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button type="submit">Enroll now</button>
              {errorMessages.form && <p className="error-message">{errorMessages.form}</p>}
            </form>
          </div>

          <div className='course-checkout'>
            <div className='course-details'>
              <div className='course-content'>
                <div className='course-title'>
                  <h2>{courseHeading}</h2>
                </div>
                <div className='course-para'>
                  <p>{courseDescription}</p>
                </div>
                <div className='course-rating'>
                  <p>{rating}</p>
                </div>
              </div>
              <div className='course-price'>
                <p>₹{fee}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;

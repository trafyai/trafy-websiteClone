'use client'
import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useCart } from '@context/CartContext';
import '@styles/common/enroll/Enroll.css';

const Enroll = () => {
  const { cartDetails } = useCart();
  if (!cartDetails) {
    return <div>Loading course details...</div>; // Fallback UI when cartDetails is null
  }
  const { courseHeading, courseDescription, rating, fee } = cartDetails;

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    category: "student",
  });

  const [errorMessages, setErrorMessages] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
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
  
    const { fname, lname, email, phone,  country, state, category } = formData;
  
    const newErrorMessages = {
      fname: !fname ? "Please enter your first name." : "",
      lname: !lname ? "Please enter your last name." : "",
      email: !email ? "Please enter your email address." : "",
      phone: !phone ? "Please enter your phone number." : "",
    };
  
    setErrorMessages(newErrorMessages);
  
    if (Object.values(newErrorMessages).some(message => message !== "")) {
      return;
    }
  
    const enrollmentData = {
      firstName: fname,
      lastName: lname,
      email: email,
      phone: phone,
      country: country,
      state: state,
      profession: category,
    };
  
    try {
      const firebaseUrl = 'https://uiux-courseformdata-default-rtdb.firebaseio.com/enrollments.json';
      const response = await fetch(firebaseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enrollmentData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to submit enrollment: ${response.statusText}`);
      }
  
      // Reset form fields after successful submission
      setFormData({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        country: "",
        state: "",
        category: "student",
        message: "",
      });
  
      alert('Enrollment submitted successfully!');
      
    } catch (error) {
      console.error('Error submitting enrollment:', error);
      alert('Failed to submit the enrollment. Please try again.');
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
                  <input type="text" placeholder="First Name" name="fname" className="enquiry-fname" required onChange={handleChange} value={formData.fname} />
                  {errorMessages.fname && <p className="error-message">{errorMessages.fname}</p>}
                </div>
                <div className="enquirylname">
                  <input type="text" placeholder="Last Name" className="enquiry-lname" name="lname" required onChange={handleChange} value={formData.lname} />
                  {errorMessages.lname && <p className="error-message">{errorMessages.lname}</p>}
                </div>
              </div>
              <div className="enquiryemail">
                <input type="email" placeholder="Email" required className="enquiry-email" name="email" onChange={handleChange} value={formData.email} />
                {errorMessages.email && <p className="error-message">{errorMessages.email}</p>}
              </div>
              <div className="enquiryphone">
                <input type="tel" placeholder="Phone Number" required className="enquiry-phone" name="phone" onChange={handleChange} value={formData.phone} />
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
                <select name="category" placeholder="Select Profession" className="enquiry-category" value={formData.category} onChange={handleChange}>
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="startup_founder">Startup Founder</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className='course-payment'>
                <p>₹{fee}</p>
                <button type='submit' >Enroll now</button>
              </div>
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
                <p>₹{fee} </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Enroll;

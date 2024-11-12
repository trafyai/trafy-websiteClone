'use client';
import React, { useState,useEffect } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useCart } from '@context/CartContext';
import '@styles/common/enroll/Enroll.css';

const Enroll = () => {
  const { cartDetails } = useCart();

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

  const [razorpayScriptLoaded, setRazorpayScriptLoaded] = useState(false);

  useEffect(() => {
    const loadRazorpayScript = () => {
      return new Promise((resolve, reject) => {
        if (window.Razorpay) {
          resolve(true);
        } else {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.onload = () => {
            setRazorpayScriptLoaded(true);
            resolve(true);
          };
          script.onerror = () => reject(new Error("Failed to load Razorpay SDK"));
          document.body.appendChild(script);
        }
      });
    };

    loadRazorpayScript().catch((error) => console.error("Error loading Razorpay script:", error));
  }, []);


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

    const { fname, lname, email, phone } = formData;

    const newErrorMessages = {
      fname: !fname ? "Please enter your first name." : "",
      lname: !lname ? "Please enter your last name." : "",
      email: !email ? "Please enter your email address." : "",
      phone: !phone ? "Please enter your phone number." : "",
    };

    setErrorMessages(newErrorMessages);

    if (Object.values(newErrorMessages).some((message) => message !== "")) {
      return;
    }

    try {
      // Step 1: Create Razorpay order
      const res = await fetch('https://trafy-newbackend-255821839155.us-central1.run.app/api/createOrder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: cartDetails?.fee,
          name: cartDetails?.courseHeading,
          description: cartDetails?.courseDescription,
        }),
      });

      const data = await res.json();

      if (data.success && razorpayScriptLoaded) {
        const options = {
          key: data.key_id,
          amount: data.amount,
          currency: "INR",
          name: data.product_name,
          description: data.description,
          order_id: data.order_id,
          handler: async function (response) {
            // Step 2: On successful payment
            const paymentStatus = "success";
            await storeFormDataInFirebase(paymentStatus);
            await sendNotificationEmail(paymentStatus, email); // Send notification email
            alert("Payment Successful");
            window.location.reload();
          },
          prefill: {
            contact: formData.phone,
            name: `${formData.fname} ${formData.lname}`,
            email: formData.email,
          },
          theme: { color: "#2300a3" },
          image: 'https://firebasestorage.googleapis.com/v0/b/testing-f9c8c.appspot.com/o/trafy%20icon.png?alt=media&token=a14b5cd3-febe-4f10-90d4-9f2073646012',
        };

        const razorpayInstance = new window.Razorpay(options);
        razorpayInstance.on('payment.failed', async function (response) {
          // Step 3: On payment failure
          const paymentStatus = "failed";
          await storeFormDataInFirebase(paymentStatus);
          await sendNotificationEmail(paymentStatus, email); // Send notification email
          alert("Payment Failed");
        });

        razorpayInstance.open();
      } else {
        throw new Error("Razorpay order creation failed.");
      }
    } catch (error) {
      console.error("Error processing the payment:", error);
      setErrorMessages({ ...errorMessages, form: "Error processing the payment. Please try again later." });
    }
  };

// Function to store form data along with payment status in Firebase
const storeFormDataInFirebase = async (paymentStatus) => {
    try {
      const response = await fetch('https://uiux-courseformdata-default-rtdb.firebaseio.com/enrollments.json', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          fee: cartDetails?.fee,
          paymentStatus: paymentStatus,  // Include payment status
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to store form data in Firebase");
      }
    } catch (error) {
      console.error("Error storing form data:", error);
    }
};

// New function to send notification email after payment
const sendNotificationEmail = async (paymentStatus, email) => {
    try {
      const response = await fetch('https://trafy-newbackend-255821839155.us-central1.run.app/api/sendPaymentEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          paymentStatus: paymentStatus,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send notification email");
      }
    } catch (error) {
      console.error("Error sending notification email:", error);
    }
};

  

  if (!cartDetails) {
    return <div>Loading course details...</div>;
  }

  const { courseHeading, courseDescription, rating, fee } = cartDetails;

  

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
              <div className='enroll-course-payment'>
                <p>₹{fee}</p>
                <button type='submit'>Enroll now</button>
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

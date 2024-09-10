'use client';

import React, { useState } from 'react';
import '@styles/common/auth/masterClassEnquiry.css';

const MasterClassEnquiryForm = (props) => {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        city: "",
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

    const [isPopupVisible, setIsPopupVisible] = useState(true);
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { fname, lname, email, phone, city, category, message } = formData;
    
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
            // Step 1: Save form data to Firebase
            const firebaseUrl = props.courseType === 'uiuxCourse'
                ? 'https://uiux-beginners-formdata-default-rtdb.firebaseio.com/UIUX-BeginnersEnquiryFormData.json'
                : 'https://masterclass-formdata-default-rtdb.firebaseio.com/enquiries.json';
    
            await fetch(firebaseUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
    
            // Reset form fields after successful submission
            setFormData({
                fname: "",
                lname: "",
                email: "",
                phone: "",
                city: "",
                category: "student",
                message: "",
            });
    
            // setPopupMessage("Form submitted successfully!");
            window.alert("Thank you for submitting the form.");
            setShowPopup(true);
        } catch (error) {
            console.error('Error:', error);
            setPopupMessage(`Error: ${error.message}`);
            setShowPopup(true);
        }
    };
    

    const closeForm = () => {
        setIsPopupVisible(false);
    };

    return (
        <>
            {isPopupVisible && (
                <div className="popup-overlay">
                    <div className="course-enquiry-form-contents">
                        <button className="close-popup-button" onClick={closeForm}>x</button>
                        <form className="enquiryform" onSubmit={handleSubmit} autoComplete="off">
                            <div className="enquiryform-heading">
                                <h2>{props.title}</h2>
                                <h4>{props.name}</h4>
                            </div>
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
                            <div className="enquirycity">
                                <input type="text" placeholder="City" required className="enquiry-city" name="city" onChange={handleChange} value={formData.city} />
                                {errorMessages.city && <p className="error-message">{errorMessages.city}</p>}
                            </div>
                            <div className="enquirycategory">
                                <select name="category" className="enquiry-category" value={formData.category} onChange={handleChange}>
                                    <option value="student">Student</option>
                                    <option value="professional">Professional</option>
                                    <option value="startup_founder">Startup Founder</option>
                                </select>
                            </div>
                            <div className="enquirymessage">
                                <textarea placeholder="Message" className="enquiry-message" name="message" style={{ width: "100%" }} value={formData.message} onChange={handleChange} />
                            </div>
                            <button type="submit" className="course-enquiry-button">Submit</button>
                        </form>
                        {showPopup && <div className="popup-message">{popupMessage}</div>}
                    </div>
                </div>
            )}
        </>
    );
};

export default MasterClassEnquiryForm;

'use client'
import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Link from "next/link";
import EnquiryForm from "@components/common/auth/enquiry/CourseEnquiry";

export default function LandingAi() {
    const [enquiry, setEnquiry] = useState(false);
    
    function showEnquiry() {
        setEnquiry(!enquiry);
    }

    return (
        <div className="landing-bento">
            <div className="landing-bento-container">
                <div className="landing-ai-container">
                    <div className="landing-ai-left">
                        <h2>Get Early Access to Our AI Tutor</h2>
                    </div>
                    <div className="landing-ai-right">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                        <input type="text" name="email" placeholder="Enter your email" />
                        <button onClick={showEnquiry}>Join Beta</button>
                    </div>
                    {enquiry && <EnquiryForm link="https://newsletter-form-9e6c9-default-rtdb.firebaseio.com/DM-CourseEnquiryFormData.json"
                    course="AI beta"
                    name="Stay Updated"
                    title="Join trafy AI Beta" />}
                </div>
                <div className="landing-features-container">
                    <div className="landing-features-heading">
                        <h2>Sed ut perspiciatis unde omnis iste natus</h2>
                    </div>
                    <div className="landing-features-contents">
                        <div className="landing-features-box">
                            <h3>5000+</h3>
                            <p>Learners</p>
                        </div>
                        <div className="landing-features-box">
                            <h3>1000+</h3>
                            <p>Instructors</p>
                        </div>
                        <div className="landing-features-box">
                            <h3>Unlimited</h3>
                            <p>Resources</p>
                        </div>
                        <div className="landing-features-box">
                            <h3>Advanced</h3>
                            <p>Curriculum</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
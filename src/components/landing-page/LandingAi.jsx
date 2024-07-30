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
        <div className="landing-ai">
            <div className="landing-ai-container">
                <h2>AI could be your new instructor.</h2>
                <button onClick={showEnquiry}>Join trafy AI Beta</button>
            </div>
            {enquiry && <EnquiryForm link="https://newsletter-form-9e6c9-default-rtdb.firebaseio.com/AiForm.json"
                course="AI beta"
                name="Stay Updated"
                title="Join trafy AI Beta" />}
        </div>
    );
}
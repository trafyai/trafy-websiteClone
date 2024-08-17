'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Ai from '@public/assets/Images/landing-page/hero/ai 1.svg'
import Article from '@public/assets/Images/landing-page/hero/article.svg'


const LandingHero = () => {

    return (
        <main>
            <div className="landing-hero-section">
                <div className="landing-hero-container">
                    <div className="landing-hero-contents">
                        <div className="landing-hero-heading">
                            <h1>Skyrocket your Career </h1>
                        </div>
                        <div className="landing-hero-paragraph">
                            <p>Design, Marketing, Sales, and Startup courses curated for your growth by your Personalized AI Mentor</p>
                        </div>
                        <button className="landing-hero-explore-btn">
                            Get started
                        </button>
                    </div>
              </div>
              <div className="landing-hero-bottom-container">
                <div className="landing-hero-bottom-left">
                    <Image src={Article}/>
                    <h3>Courses Inspired and Curaterd by Industry Leaders</h3>
                </div>
                <div className="landing-hero-bottom-right">
                    <Image src={Ai} />
                    <h3>Mentored by AI</h3>
                </div>
              </div>
            </div>
        </main>
    );
}

export default LandingHero;

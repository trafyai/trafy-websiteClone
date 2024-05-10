// import React, { useState } from "react";
import Link from "next/link";


const LandingHero = () => {
   

    return (
        <main>
            <div className="landing-hero-section">
                <div className="landing-hero-container">
                    <div className="landing-hero-heading">
                        <h1>Learn how build and use AI across industries</h1>
                    </div>
                    <div className="landing-hero-paragraph">
                        <p>trafy is collective education program that helps, guides, and educates students, and professionals to learn to build and use AI in their domain.</p>
                    </div>
                    <div className="landing-hero-buttons">
                        <Link className="landing-hero-explore-btn" href="/courses">Explore Courses</Link>
                        <button className="landing-hero-join-btn">Join Discussions</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LandingHero;

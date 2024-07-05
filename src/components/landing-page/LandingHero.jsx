import React from "react";
import Link from "next/link";


const LandingHero = () => {
   

    return (
        <main>

            <div className="landing-hero-section">
                <div className="landing-hero-container">
                    <div className="landing-hero-heading">
                        <h1>Courses Designed for Leaders and Innovators</h1>
                    </div>
                    <div className="landing-hero-paragraph">
                        <p>Learn to lead and think like top decision makers of top 1% companies with courses curated to help you to work on the next big thing.</p>
                    </div>
                   
                    <Link className="landing-hero-explore-btn" href="/courses">Explore Pathways</Link>
                    
                </div>
            </div>

        </main>
    )
}

export default LandingHero;

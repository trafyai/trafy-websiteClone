import React from "react";
import Link from "next/link";


const LandingHero = () => {
   

    return (
        <main>

            <div className="landing-hero-section">
                <div className="landing-hero-container">
                    <div className="landing-hero-heading">
                        <h1>Innovative Design. <br/>Interactive Experience.</h1>
                    </div>
                    <div className="landing-hero-paragraph">
                        <p>Learn to design UI/UX faster, functional and salable.</p>
                    </div>
                   
                    <Link className="landing-hero-explore-btn" href="/courses">Explore Pathways</Link>
                    
                </div>
            </div>

        </main>
    )
}

export default LandingHero;

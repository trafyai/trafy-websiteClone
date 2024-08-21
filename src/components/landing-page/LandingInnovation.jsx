'use client'
import React, { useState } from "react";
import Image from "next/image";
import img from '@public/assets/Images/landing-page/pathway/arrow_right_alt_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg';
import enter from '@public/assets/Images/landing-page/innovation/entrepreneurship 1.svg';
import innovate from '@public/assets/Images/landing-page/innovation/trafy ep icon 2.svg';


export default function LandingInnovation() {
  

    return (
        <div className="landing-innovation">
            <div className="landing-innovation-container">
                <div className="landing-innovation-heading">
                    <h4>Startups</h4>
                    <h2>You could build the Next Big Thing</h2>
                </div>

                <div className="landing-innovation-contents">
                    <div className="landing-innovation-box-left">
                        <Image src={enter}/>
                        <h3>Specialized Learning Pathways for startup founders to build, scale, and create an impact.</h3>
                    </div>
                    <div className="landing-innovation-box-right">
                        <Image src={innovate} className="image"/>
                        <div className="landing-innovation-box-right-contents">
                            <h3>trafy Innovation Circle</h3>
                            <p>Explore Pathway <Image src={img}/></p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

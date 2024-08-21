
'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img from '@public/assets/Images/landing-page/pathway/arrow_right_alt_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg';
import hero from '@public/assets/Images/landing-page/hero_section_banner.png';

export default function LandingMasterclass() {

    return (
        <div className="landing-masterclass">
            <div className="landing-masterclass-container">
                <div className="landing-masterclass-heading">
                    <h4>Masterclass</h4>
                    <h2>Stay at the top with Insights from experts</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
                    <span>Upcoming Masterclasses <Image src={img}/></span>
                </div>
                <div className="landing-masterclass-img">
                  <Image src={hero}/>
                   
                </div>
            </div>
         
        </div>
    );
}

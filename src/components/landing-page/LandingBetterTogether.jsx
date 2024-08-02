import React from "react";
import Image from 'next/image';
import Link from "next/link";

import algacart from '@public/assets/Images/landing-page/partners/algacart.png';
import ardeur from '@public/assets/Images/landing-page/partners/ardeur.png';
import arrora from '@public/assets/Images/landing-page/partners/arrora.png';
import bioorganica from '@public/assets/Images/landing-page/partners/bioorganica.png';
import bioscholar from '@public/assets/Images/landing-page/partners/bioscholar.png';
import naturaa from '@public/assets/Images/landing-page/partners/naturaa.png';
import neuen from '@public/assets/Images/landing-page/partners/neuen.png';
import protivore from '@public/assets/Images/landing-page/partners/protivore.png';
import squash from '@public/assets/Images/landing-page/partners/Squash.png';


export default function LandingBetterTogether(){
    return(
        <main>
            <div className="landing-better">
                <div className="landing-better-container">
                    <div className="landing-better-left">
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                          {/* <button>Get started</button>  */}
                    </div>
                    <div className="landing-better-right">
                        <div className="landing-better-image-b"><Image src={algacart} alt="amazon" /></div>
                        <div className="landing-better-image-b"><Image src={ardeur} alt="hostinger" /></div>
                        <div className="landing-better-image-b"><Image src={arrora} alt="semrush" height= {24} /></div>
                        <div className="landing-better-image-b"><Image src={bioorganica} alt="clickup" /></div>
                        <div className="landing-better-image-b"><Image src={bioscholar}alt="hubspot" /></div>
                        <div className="landing-better-image-b"><Image src={naturaa} alt="graphy" height= {24} /></div>
                        <div className="landing-better-image-b"><Image src={neuen} alt="shopify" /></div>
                        <div className="landing-better-image-b"><Image src={protivore} alt="mailercloud" /></div>
                        <div className="landing-better-image-b"><Image src={squash} alt="wati" /></div>
                           
                    </div>
                </div>
            </div>
        </main>
    )
}
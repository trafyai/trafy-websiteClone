import React from "react";
import Image from 'next/image';
import Link from "next/link";

import amazon from '@public/assets/Images/landing-page/better-together/b-amazon.png';
import clickup from '@public/assets/Images/landing-page/better-together/b-clickup.png';
import hostinger from '@public/assets/Images/landing-page/better-together/b-hostinger.png';
import graphy from '@public/assets/Images/landing-page/better-together/b-grphy.png';
import hubspot from '@public/assets/Images/landing-page/better-together/b-hubspot.png';
import mailercloud from '@public/assets/Images/landing-page/better-together/b-mailercloud.png';
import semrush from '@public/assets/Images/landing-page/better-together/b-semrush.png';
import shopify from '@public/assets/Images/landing-page/better-together/b-shopify.png';
import wati from '@public/assets/Images/landing-page/better-together/b-wati.png';

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
                        <div className="landing-better-image-b"><Image src={amazon} alt="amazon" /></div>
                        <div className="landing-better-image-b"><Image src={hostinger} alt="hostinger" /></div>
                        <div className="landing-better-image-b"><Image src={semrush} alt="semrush" height= {24} /></div>
                        <div className="landing-better-image-b"><Image src={clickup} alt="clickup" /></div>
                        <div className="landing-better-image-b"><Image src={hubspot}alt="hubspot" /></div>
                        <div className="landing-better-image-b"><Image src={graphy} alt="graphy" height= {24} /></div>
                        <div className="landing-better-image-b"><Image src={shopify} alt="shopify" /></div>
                        <div className="landing-better-image-b"><Image src={mailercloud} alt="mailercloud" /></div>
                        <div className="landing-better-image-b"><Image src={wati} alt="wati" /></div>
                           
                    </div>
                </div>
            </div>
        </main>
    )
}
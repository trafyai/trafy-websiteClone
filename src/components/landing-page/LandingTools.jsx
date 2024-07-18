'use client'
import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Link from "next/link";
import Icon1 from '@public/assets/Images/landing-page/tools/icon1.svg';
import Icon2 from '@public/assets/Images/landing-page/tools/icon2.svg';
import Icon3 from '@public/assets/Images/landing-page/tools/icon3.png';
import Icon4 from '@public/assets/Images/landing-page/tools/icon4.png';


export default function LandingTools() {
 
    return (
        <div className="landing-tools">
            <div className="landing-tools-container">
                <div className="landing-tools-heading">
                    <h2>Expertise tools that will make your design process easy</h2>
                </div>
                <div className="landing-tools-content">
                    <Image src={Icon1} className="Icon1"/>
                    <Image src={Icon2} className="Icon2"/>
                    <Image src={Icon3 } className="Icon3"/>
                    <Image src={Icon4}  className="Icon4"/>
                </div>
            </div>

        </div>
    );
}

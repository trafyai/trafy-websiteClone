'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import art1 from '@public/assets/Images/service-page/service-startup/Artboard 1.png';
import art2 from '@public/assets/Images/service-page/service-startup/Artboard 2.png';
import art3 from '@public/assets/Images/service-page/service-startup/Artboard 3.png';
import art4 from '@public/assets/Images/service-page/service-startup/Artboard 4.png';
import art6 from '@public/assets/Images/service-page/service-startup/Artboard 6.png';


export default function ServiceStartup() {

    return (
        <div className='service-startup'>
            <div className='service-startup-container'>
                {/* <div className='service-startup-heading'>
                    <h2>Startups that are accelerated with us </h2>
                    <p>Bring your ideas to life with trafy AI integrated Gen AI app development team. </p>
                </div> */}
                <div className='service-startup-contents'>
                   <div className='service-startup-box'>
                        <p>100+</p>
                        <h4 >Integrations</h4>
                   </div>
                   <div className='service-startup-box'>
                        <p>3+</p>
                        <h4 >Countries</h4>
                   </div>
                   <div className='service-startup-box'>
                        <p>15+</p>
                        <h4 >Companies</h4>
                   </div>
                   <div className='service-startup-box'>
                        <p>5000+</p>
                        <h4 >Students</h4>
                   </div>
                </div>
            </div>
        </div>
    );
}

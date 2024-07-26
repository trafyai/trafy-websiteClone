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
                <div className='service-startup-heading'>
                    <h2>Startups that are accelerated with us </h2>
                    <p>Bring your ideas to life with trafy AI integrated Gen AI app development team. </p>
                </div>
                <div className='service-startup-contents'>
                   <div className='service-startup-box'>
                        <p>100+</p>
                        <p style={{fontSize:"18px"}}>Integrations</p>
                   </div>
                   <div className='service-startup-box'>
                        <p>3+</p>
                        <p style={{fontSize:"18px"}}>Countries</p>
                   </div>
                   <div className='service-startup-box'>
                        <p>15+</p>
                        <p style={{fontSize:"18px"}}>Companies</p>
                   </div>
                   <div className='service-startup-box'>
                        <p>5000+</p>
                        <p style={{fontSize:"18px"}}>Students</p>
                   </div>
                </div>
            </div>
        </div>
    );
}

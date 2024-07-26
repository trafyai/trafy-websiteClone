'use client'
import React, { useState } from 'react';
import {ServiceSolutionData} from '@api/service/ServiceData';
import Image from 'next/image';

export default function ServiceSolution() {

    return (
        <div className='service-solution'>
            <div className='service-solution-container'>
                <div className='service-solution-heading'>
                    <h2>Everything you need to solution.</h2>
                    <p>Bring your ideas to life with trafy AI integrated Gen AI app development team. Your solutionth partner at every level.</p>
                </div>
                <div className='service-solution-content'>
                    {ServiceSolutionData.map((item, index) => (
                        <div className="service-solution-box" key={index}>
                           <Image src={item.img}/>
                           <div className='service-solution-box-contents'>
                                <h3>{item.title}</h3>
                                <p>{item.para}</p>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



'use client'


import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Link from "next/link";
import nextIcon from '@public/assets/Images/landing-page/icon-next.png';
import { LandingReviewData } from "@api/landing/LandingData";

export default function LandingReview() {
 



    return (
        <main>
            {/* <div className="landing-review">
                <div className="landing-review-container">
                    <div className="landing-review-top">
                        <h2>Witness others achievements through learning.</h2>
                    </div>

                    <div className="landing-review-bottom-container" >
                        
                        <div className="landing-review-bottom">
                            {LandingReviewData.map((item, index) => (
                                <div className="landing-review-card" key={index}>
                                    <div className="landing-reviews">
                                        <Image src={item.img} alt="" width="18"/>
                                        <p>{item.review}</p>
                                    </div>
                                    <div className="landing-review-name">
                                        <p>{item.name}</p>
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="landing-review-bottom">
                            {LandingReviewData.map((item, index) => (
                                <div className="landing-review-card" key={index}>
                                    <div className="landing-reviews">
                                        <Image src={item.img} alt="" width="18"/>
                                        <p>{item.review}</p>
                                    </div>
                                    <div className="landing-review-name">
                                        <p>{item.name}</p>
                                      
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="landing-review-bottom">
                            {LandingReviewData.map((item, index) => (
                                <div className="landing-review-card" key={index}>
                                    <div className="landing-reviews">
                                        <Image src={item.img} alt="" width="18"/>
                                        <p>{item.review}</p>
                                    </div>
                                    <div className="landing-review-name">
                                        <p>{item.name}</p>
                                       
                                    </div>
                                </div>
                            ))}
                        </div>


                     </div>

                    
                </div>
            </div> */}
        </main>
    );
}

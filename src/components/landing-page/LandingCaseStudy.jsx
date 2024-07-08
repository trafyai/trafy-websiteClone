// import React from 'react'
// import Image from 'next/image'
// import Vector from '@public/assets/Images/landing-page/pathway/Vector.png'

// const LandingCaseStudy = () => {
//   return (
//     <div className='landing-casestudy'>
//         <div className='landing-casestudy-container'>
//             <div className='landing-casestudy-heading'><h2>Case Study</h2></div>
            
//             <div className='landing-casestudy-contents'>
//                 <div className='landing-casestudy-box'>
//                     <div className='casestudy-image-warper' style={{backgroundColor:"#F0FFF7"}}></div>
//                     <div className='landing-casestudy-box-contents'>
//                         <p>Learn we built</p>
//                         <h3>The Future of algal Nutrition</h3>
//                         <span>view more  <Image src={Vector}  style={{marginLeft:"10px"}}/></span>
//                     </div>
//                 </div>
//                 <div className='landing-casestudy-box'>
//                     <div className='casestudy-image-warper' style={{backgroundColor:"#F0FFF7"}}></div>
//                     <div className='landing-casestudy-box-contents'>
//                         <p>Learn we built</p>
//                         <h3>Plant based organic
//                         revolution</h3>
//                         <span>view more  <Image src={Vector}  style={{marginLeft:"10px"}}/></span>
//                     </div>
//                 </div>
//                 <div className='landing-casestudy-box'>
//                     <div className='casestudy-image-warper' style={{backgroundColor:"#F0FFF7"}}></div>
//                     <div className='landing-casestudy-box-contents'>
//                         <p>Learn we built</p>
//                         <h3>Lab grown organic
//                         personal care</h3>
//                         <span>view more  <Image src={Vector}  style={{marginLeft:"10px"}}/></span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default LandingCaseStudy

'use client';
import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Vector from '@public/assets/Images/landing-page/pathway/Vector.png';

const LandingCaseStudy = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    // Case study data array
    const LandingCaseStudyData = [
        {
            category: "Learn we built",
            title: "The Future of algal Nutrition",
        },
        {
            category: "Learn we built",
            title: "Plant based organic revolution",
        },
        {
            category: "Learn we built",
            title: "Lab grown organic personal care",
        },
        // Add more case study objects as needed
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % LandingCaseStudyData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + LandingCaseStudyData.length) % LandingCaseStudyData.length);
    };

    const handleSwipeStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleSwipeMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleSwipeEnd = () => {
        if (touchStartX.current && touchEndX.current) {
            if (touchEndX.current < touchStartX.current) {
                handleNext();
            } else if (touchEndX.current > touchStartX.current) {
                handlePrev();
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1000 && window.innerWidth > 600) {
                setItemsPerPage(2);
            } else if (window.innerWidth <= 600) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(3);
            }
        };

        // Initial setup on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderIndicators = () => {
        const numIndicators = Math.ceil(LandingCaseStudyData.length / itemsPerPage);
        const indicators = [];
        for (let i = 0; i < numIndicators; i++) {
            indicators.push(
                <span
                    key={i}
                    className={`indicator-dot ${currentIndex >= i * itemsPerPage && currentIndex < (i + 1) * itemsPerPage ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(i * itemsPerPage)}
                ></span>
            );
        }
        return indicators;
    };

    return (
        <div className='landing-casestudy'>
            <div className='landing-casestudy-container'>
                <div className='landing-casestudy-heading'>
                    <h2>Case Study</h2>
                </div>
                
                <div className='landing-casestudy-contents'
                    onTouchStart={handleSwipeStart}
                    onTouchMove={handleSwipeMove}
                    onTouchEnd={handleSwipeEnd}
                >
                    {LandingCaseStudyData.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
                        <div className='landing-casestudy-box' key={index}>
                            <div className='casestudy-image-warper' style={{ backgroundColor: "#F0FFF7" }}></div>
                            <div className='landing-casestudy-box-contents'>
                                <p>{item.category}</p>
                                <h3>{item.title}</h3>
                                <span>view more <Image src={Vector}  style={{ marginLeft: "10px" }} /></span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="indicator-container">
                    {renderIndicators()}
                </div>
            </div>
        </div>
    );
};

export default LandingCaseStudy;

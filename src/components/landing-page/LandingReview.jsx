

'use client'


import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Link from "next/link";
import nextIcon from '@public/assets/Images/landing-page/icon-next.png';
import { LandingReviewData } from "@api/landing/LandingData";

export default function LandingReview() {
 



    return (
        <main>
            <div className="landing-review">
                <div className="landing-review-container">
                    <div className="landing-review-top">
                        <h2>Watch others achieve through learning.</h2>
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
            </div>
        </main>
    );
}

// 'use client'
// import React, { useState, useEffect, useRef } from "react";
// import Image from 'next/image';
// import Link from "next/link";
// import nextIcon from '@public/assets/Images/landing-page/icon-next.png';
// import { LandingReviewData } from "@api/landing/LandingData";

// export default function LandingReview() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [itemsPerPage, setItemsPerPage] = useState(3);
//     const [direction, setDirection] = useState('next');
//     const touchStartX = useRef(null);
//     const touchEndX = useRef(null);

//     // Auto slide interval in milliseconds (e.g., change every 5 seconds)
//     const autoSlideInterval = 1000;
//     let autoSlideTimer = useRef(null);

//     const handleNext = () => {
//         setDirection('next');
//         setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % LandingReviewData.length);
//     };

//     const handlePrev = () => {
//         setDirection('prev');
//         setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + LandingReviewData.length) % LandingReviewData.length);
//     };

//     const handleSwipeStart = (e) => {
//         touchStartX.current = e.touches[0].clientX;
//     };

//     const handleSwipeMove = (e) => {
//         touchEndX.current = e.touches[0].clientX;
//     };

//     const handleSwipeEnd = () => {
//         if (touchStartX.current && touchEndX.current) {
//             if (touchEndX.current < touchStartX.current) {
//                 handleNext();
//             } else if (touchEndX.current > touchStartX.current) {
//                 handlePrev();
//             }
//         }
//         touchStartX.current = null;
//         touchEndX.current = null;
//     };

//     const startAutoSlide = () => {
//         autoSlideTimer.current = setInterval(() => {
//             handleNext();
//         }, autoSlideInterval);
//     };

//     const stopAutoSlide = () => {
//         clearInterval(autoSlideTimer.current);
//     };

//     useEffect(() => {
//         // Start auto slide on component mount
//         startAutoSlide();

//         // Stop auto slide on component unmount
//         return () => {
//             stopAutoSlide();
//         };
//     }, []);

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth <= 1024 && window.innerWidth > 600) {
//                 setItemsPerPage(2);
//             } else if (window.innerWidth <= 600) {
//                 setItemsPerPage(1);
//             } else {
//                 setItemsPerPage(3);
//             }
//         };

//         // Event listener for window resize
//         window.addEventListener('resize', handleResize);

//         // Cleanup function
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return (
//         <main>
//             <div className="landing-review">
//                 <div className="landing-review-container">
//                     <div className="landing-review-top">
//                         <h2>Watch others achieve through learning.</h2>
//                     </div>

//                     <div
//                         className="landing-review-bottom-container"
//                         onTouchStart={handleSwipeStart}
//                         onTouchMove={handleSwipeMove}
//                         onTouchEnd={handleSwipeEnd}
//                         onMouseEnter={stopAutoSlide}
//                         onMouseLeave={startAutoSlide}
//                     >
//                         <div className="landing-review-bottom">
//                             {LandingReviewData.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
//                                 <div className="landing-review-card" key={index}>
//                                     <div className="landing-reviews">
//                                         <Image src={item.img} alt="" />
//                                         <p>{item.review}</p>
//                                     </div>
//                                     <div className="landing-review-name">
//                                         <p>{item.name}</p>
//                                         <Link href="/">
//                                             View this similar course
//                                             <Image src={nextIcon} width={14} height={14} style={{ marginLeft: "5px" }} />
//                                         </Link>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }







// // // import React, { useState, useEffect, useRef } from "react";
// // // import Image from 'next/image';
// // // import Link from "next/link";
// // // import nextIcon from '@public/assets/Images/landing-page/icon-next.png';
// // // import { LandingReviewData } from "@api/landing/LandingData";

// // // export default function LandingReview() {
// // //     const [currentIndex, setCurrentIndex] = useState(0);
// // //     const [itemsPerPage, setItemsPerPage] = useState(3);
// // //     const [direction, setDirection] = useState('next');
// // //     const touchStartX = useRef(null);
// // //     const touchEndX = useRef(null);

// // //     // Auto slide interval in milliseconds (e.g., change every 5 seconds)
// // //     const autoSlideInterval = 5000;
// // //     let autoSlideTimer = useRef(null);

// // //     const handleNext = () => {
// // //         setDirection('next');
// // //         setCurrentIndex((prevIndex) => (prevIndex + 1) % LandingReviewData.length);
// // //     };

// // //     const handlePrev = () => {
// // //         setDirection('prev');
// // //         setCurrentIndex((prevIndex) => (prevIndex - 1 + LandingReviewData.length) % LandingReviewData.length);
// // //     };

// // //     const handleSwipeStart = (e) => {
// // //         touchStartX.current = e.touches[0].clientX;
// // //     };

// // //     const handleSwipeMove = (e) => {
// // //         touchEndX.current = e.touches[0].clientX;
// // //     };

// // //     const handleSwipeEnd = () => {
// // //         if (touchStartX.current && touchEndX.current) {
// // //             if (touchEndX.current < touchStartX.current) {
// // //                 handleNext();
// // //             } else if (touchEndX.current > touchStartX.current) {
// // //                 handlePrev();
// // //             }
// // //         }
// // //         touchStartX.current = null;
// // //         touchEndX.current = null;
// // //     };

// // //     const startAutoSlide = () => {
// // //         autoSlideTimer.current = setInterval(() => {
// // //             handleNext();
// // //         }, autoSlideInterval);
// // //     };

// // //     const stopAutoSlide = () => {
// // //         clearInterval(autoSlideTimer.current);
// // //     };

// // //     useEffect(() => {
// // //         // Start auto slide on component mount
// // //         startAutoSlide();

// // //         // Stop auto slide on component unmount
// // //         return () => {
// // //             stopAutoSlide();
// // //         };
// // //     }, []);

// // //     useEffect(() => {
// // //         const handleResize = () => {
// // //             if (window.innerWidth <= 1024 && window.innerWidth > 600) {
// // //                 // setItemsPerPage();
// // //             } else if (window.innerWidth <= 600) {
// // //                 setItemsPerPage(1);
// // //             } else {
// // //                 setItemsPerPage(1);
// // //             }
// // //         };

// // //         // Event listener for window resize
// // //         window.addEventListener('resize', handleResize);

// // //         // Cleanup function
// // //         return () => {
// // //             window.removeEventListener('resize', handleResize);
// // //         };
// // //     }, []);

// // //     // Logic to handle infinite loop and auto slide
// // //     useEffect(() => {
// // //         const lastIndex = LandingReviewData.length - 1;

// // //         // Auto slide effect
// // //         const slideTimer = setTimeout(() => {
// // //             handleNext();
// // //         }, autoSlideInterval);

// // //         // Cleanup function
// // //         return () => clearTimeout(slideTimer);
// // //     }, [currentIndex]); // Re-run effect when currentIndex changes

// // //     return (
// // //         <main>
// // //             <div className="landing-review">
// // //                 <div className="landing-review-container">
// // //                     <div className="landing-review-top">
// // //                         <h2>Watch others achieve through learning.</h2>
// // //                     </div>

// // //                     <div
// // //                         className="landing-review-bottom-container"
// // //                         onTouchStart={handleSwipeStart}
// // //                         onTouchMove={handleSwipeMove}
// // //                         onTouchEnd={handleSwipeEnd}
// // //                         onMouseEnter={stopAutoSlide}
// // //                         onMouseLeave={startAutoSlide}
// // //                     >
// // //                         <div className="landing-review-bottom">
// // //                             {LandingReviewData.map((item, index) => (
// // //                                 <div
// // //                                     key={index}
// // //                                     className={`landing-review-card ${index === currentIndex ? 'active' : ''}`}
// // //                                     style={{
// // //                                         transform: `translateX(${(index - currentIndex) * 100}%)`,
// // //                                         transition: 'transform 0.5s ease-in-out'
// // //                                     }}
// // //                                 >
// // //                                     <div className="landing-reviews">
// // //                                         <Image src={item.img} alt="" />
// // //                                         <p>{item.review}</p>
// // //                                     </div>
// // //                                     <div className="landing-review-name">
// // //                                         <p>{item.name}</p>
// // //                                         <Link href="/">
// // //                                             View this similar course
// // //                                             <Image src={nextIcon} width={14} height={14} style={{ marginLeft: "5px" }} />
// // //                                         </Link>
// // //                                     </div>
// // //                                 </div>
// // //                             ))}
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </main>
// // //     );
// // // }



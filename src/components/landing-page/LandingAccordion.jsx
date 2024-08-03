// 'use client'
// import React, { useState } from "react";
// import Drop from '@public/assets/Images/landing-page/right.svg';
// import Image from "next/image";
// import { LandingAccordionData } from "@api/landing/LandingData";

// export default function LandingAccordion() {
//     const [openIndex, setOpenIndex] = useState(null);

//     const toggleAccordion = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <div className="landing-accordion">
//             <div className="landing-accordion-container">
//                 <div className="landing-accordion-left">
//                     <h2>Nemo enim ipsam voluptatem</h2>
//                     <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
//                 </div>
//                 <div className="landing-accordion-right">
//                     {LandingAccordionData.map((item, index) => (
//                         <div className="landing-accordion-box" onClick={() => toggleAccordion(index)} key={index}>
//                             <h3>{item.heading} <Image src={Drop} alt="Drop Icon" /></h3>
//                             {openIndex === index && (
//                                 <div className="landing-accordion-show">
//                                     <p>{item.para}</p>
//                                     <ul>
//                                         {item.points.map((point, i) => (
//                                             <li key={i}>{point}</li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

'use client'
import React, { useState } from "react";
import Drop from '@public/assets/Images/landing-page/right.svg';
import Image from "next/image";
import { LandingAccordionData } from "@api/landing/LandingData";

export default function LandingAccordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="landing-accordion">
            <div className="landing-accordion-container">
                <div className="landing-accordion-left">
                    <h2>Nemo enim ipsam voluptatem</h2>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </div>
                <div className="landing-accordion-right">
                    {LandingAccordionData.map((item, index) => (
                        <div
                            className={`landing-accordion-box ${openIndex === index ? 'expanded' : ''}`}
                            onClick={() => toggleAccordion(index)}
                            key={index}
                        >
                            <h3>
                                {item.heading}
                                <Image 
                                    src={Drop} 
                                    alt="Drop Icon" 
                                    className={openIndex === index ? "rotate rotate-180" : "rotate"} 
                                />
                            </h3>
                            <div className={`landing-accordion-show ${openIndex === index ? 'expanded' : ''}`}>
                                <p>{item.para}</p>
                                <ul>
                                    {item.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

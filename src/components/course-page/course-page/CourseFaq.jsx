'use client'
import React, { useState } from "react";
import Image from "next/image";
import ExpandMore from '@public/assets/Images/comman/common/expand_more_white.png';

export default function CourseFaq(props) {
  const [accordionState, setAccordionState] = useState({});

  function toggleAccordion(index) {
    setAccordionState((prevState) => ({
      ...prevState,
      [index]: {
        isOpen: !prevState[index]?.isOpen,
        isRotated: !prevState[index]?.isRotated,
      },
    }));
  }

  return (
    <main>
      <div className="course-faq" >
        <div className="course-faq-container">
          <div className="course-faq-heading">
            <h2>{props.heading}</h2>
          </div>
          <div className="course-faq-accordion-container">
            {/* Corrected the map function */}
            {props.faq && props.faq.map((item, index) => (
              <div
                className="course-faq-accordion"
                onClick={() => toggleAccordion(index)}
                key={index} // Added key prop
              >
                <div className="faq-accordion-title">
                  <h2>{item.title}</h2>
                  <Image
                    src={ExpandMore}
                    alt="Expand More Icon"
                    
                    className={`waccordion-icon ${
                      accordionState[index]?.isRotated ? "rotated" : ""
                    }`}
                  />
                  {/* <Image
                    src={ExpandMoreB}
                    alt="Expand More Icon"
                    
                    className={`baccordion-icon ${
                      accordionState[index]?.isRotated ? "rotated" : ""
                    }`}
                  /> */}
                </div>
                {accordionState[index]?.isOpen && (
                  <div className="faq-accordion-contents">
                    <p>{item.contents}</p> {/* Corrected property name */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

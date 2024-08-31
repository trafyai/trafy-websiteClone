'use client'
import React, { useState } from "react";
import Image from "next/image";
import ExpandMore from '@public/assets/Images/comman/common/chevron_right.svg'

export default function MasterClassAccordion(props) {
  const [accordionState, setAccordionState] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [hovered, setHovered] = useState(false);

  function toggleAccordion(index) {
    setAccordionState((prevState) => ({
      ...prevState,
      [index]: {
        isOpen: !prevState[index]?.isOpen,
        isRotated: !prevState[index]?.isRotated,
      },
    }));
  }

  function handleViewMore() {
    setShowAll(true);
  }

  function handleViewLess() {
    setShowAll(false);
  }

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const visibleSyllabus = props.syllabus ? (showAll ? props.syllabus : props.syllabus.slice(0, 5)) : [];

  return (
      <div className="mc-course-syllabus">
          <div className="mc-course-syllabus-heading">
            <h2>Course Description:</h2>
            <p>{[props.courseDescription]}</p>
          </div>
          <div className="mc-course-syllabus-accordion-container">
            {visibleSyllabus.map((item, index) => (
              <div
                className="mc-course-syllabus-accordion"
                onClick={() => toggleAccordion(index)}
                key={index} // Added key prop
              >
                <div className="syllabus-accordion-title">
                  <h2>{item.title}</h2>
                  <Image
                    src={ExpandMore}
                    alt="Expand More Icon"
                    className={`waccordion-icon ${accordionState[index]?.isRotated ? "rotated" : ""}`}
                  />
                  {/* <Image
                    src={ExpandMoreB}
                    alt="Expand More Icon"
                    className={`baccordion-icon ${accordionState[index]?.isRotated ? "rotated" : ""}`}
                  /> */}
                </div>
                {accordionState[index]?.isOpen && (
                  <div className="syllabus-accordion-contents">
                    <p>{item.contents}</p> {/* Corrected property name */}
                  </div>
                )}
              </div>
            ))}
          </div>
          {props.syllabus && props.syllabus.length > 5 && (
            <div className="mc-course-view-container">
              {showAll ? (
                <button
                  onClick={handleViewLess}
                  style={{
                    color: hovered ? "var(--landing-heading-clr)" : "var(--landing-para-clr)",
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  View Less
                </button>
              ) : (
                <button
                  onClick={handleViewMore}
                  style={{
                    color: hovered ? "var(--landing-heading-clr)" : "var(--landing-para-clr)",
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  View More
                </button>
              )}
            </div>
          )}
      </div>
  );
}

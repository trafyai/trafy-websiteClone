"use client";
import React, { useState } from "react";
import { ServiceGrowData } from "@api/service/ServiceData"; // Corrected import path
import Image from "next/image";
import drop from "@public/assets/Images/comman/common/expand_more_black.png";

export default function ServiceGrow() {
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
    <div className="service-grow">
      <div className="service-grow-container">
        <div className="service-grow-left">
          <h2>Everything you need to Grow.</h2>
          <p>
            Bring your ideas to life with trafy AI integrated Gen AI app
            development team. Your growth partner at every level.
          </p>
        </div>
        <div className="service-grow-right">
          {ServiceGrowData &&
            ServiceGrowData.map((item, index) => (
              <div
                className="service-grow-accordion"
                onClick={() => toggleAccordion(index)}
                key={index}
              >
                <div className="service-grow-accordion-title">
                  <h3>{item.title}</h3>
                  <Image
                    src={drop}
                    className={`accordion-icon ${accordionState[index]?.isRotated ? "rotated" : ""}`}
                  />
                </div>
                {accordionState[index]?.isOpen && (
                  <div className="service-grow-accordion-contents">
                    <p>{item.para}</p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

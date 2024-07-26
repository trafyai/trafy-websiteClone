"use client";
import React, { useState } from "react";
import Image from "next/image";
import amazon from "@public/assets/Images/service-page/service-partner/amz.svg";
import phonepe from "@public/assets/Images/service-page/service-partner/phonepe.svg";
import gc from "@public/assets/Images/service-page/service-partner/gc.svg";
import art1 from '@public/assets/Images/service-page/service-startup/Artboard 1.png';
import art2 from '@public/assets/Images/service-page/service-startup/Artboard 2.png';
import art3 from '@public/assets/Images/service-page/service-startup/Artboard 3.png';
import art4 from '@public/assets/Images/service-page/service-startup/Artboard 4.png';
import art6 from '@public/assets/Images/service-page/service-startup/Artboard 6.png';

export default function ServicePartnership() {
  return (
    <div className="service-partnership">
      <div className="service-partnership-container">
        <div className="service-partnership-heading">
          <h2>Our Renowned partnership</h2>
        </div>
        <div className="service-partnership-contents">
            <div><Image src={art1}/></div>
            <div><Image src={art2}/></div>
            <div><Image src={art3}/></div>
            <div> <Image src={art4}/></div>
            <div><Image src={art6}/></div>
        </div>
      </div>
    </div>
  );
}

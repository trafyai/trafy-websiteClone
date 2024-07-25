"use client";
import React, { useState } from "react";
import Image from "next/image";
import amazon from "@public/assets/Images/service-page/service-partner/amz.svg";
import phonepe from "@public/assets/Images/service-page/service-partner/phonepe.svg";
import gc from "@public/assets/Images/service-page/service-partner/gc.svg";

export default function ServicePartnership() {
  return (
    <div className="service-partnership">
      <div className="service-partnership-container">
        <div className="service-partnership-heading">
          <h2>Our Renowned partnership</h2>
        </div>
        <div className="service-partnership-contents">
          <div>
            <Image src={amazon} />
          </div>
          <div>
            <Image src={phonepe} />
          </div>
          <div>
            <Image src={gc} />
          </div>
        </div>
      </div>
    </div>
  );
}

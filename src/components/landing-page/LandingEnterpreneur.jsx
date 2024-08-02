

'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { LandingEntrepreneurData } from '@api/landing/LandingData'
import Live from '@public/assets/Images/landing-page/pathway/live-session.svg'
import Click from '@public/assets/Images/landing-page/pathway/click-arrow.svg'

import Link from 'next/link'

const LandingEnterpreneur = () => {
   
  return (
    <div id='landingPathways' className='landing-pathway'>
      <div className='landing-pathway-container'>
        <div className='landing-pathway-heading'>
          <h2>Explore Pathways</h2>
          {/* <p>For Students and Working professionals</p> */}
        </div>

        <div className='landing-pathway-contents'>
          {LandingEntrepreneurData.map((item, index) => (
            <Link key={index} className='landing-pathway-box' href={item.url}>
              <div className='pathway-image-wrapper' >
                <Image src={item.img} />
              </div>
              <div className='landing-pathway-box-contents'>
                <h3>{item.title}</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
              </div>  
              <div className='landing-pathway-box-contents-bottom'>
                <span>Join now<Image src={Click} style={{marginLeft:"8px"}}/></span>
              </div>
              
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default LandingEnterpreneur

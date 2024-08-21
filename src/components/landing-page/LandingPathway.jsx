

'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { LandingPathwayData } from '@api/landing/LandingData'
import arrow from '@public/assets/Images/landing-page/pathway/arrow_right_alt_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg'

import Link from 'next/link'

const LandingPathway = () => {
  const [selectedPathway, setSelectedPathway] = useState(LandingPathwayData[0].id);

  return (
    <div id='landingPathways' className='landing-pathway'>
      <div className='landing-pathway-container'>
        <div className='landing-pathway-heading'>
          <h2>Level up your Professional Game</h2>
          <p>Students and Working Professionals across the global can now access our constantly upgraded professional course and be at the top of their game.</p>
        </div>

        <div className='landing-pathway-contents'>
          {LandingPathwayData.map((item, index) => (
            <Link key={index} className='landing-pathway-box' href={item.url} style={{backgroundColor:item.color}}>
              <div className='pathway-image-wrapper' >
                <Image src={item.img} />
              </div>
              <div className='landing-pathway-box-contents'>
                <h3>{item.title}</h3>
                <p>Explore pathways <Image src={arrow} /></p>
              </div>  
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default LandingPathway

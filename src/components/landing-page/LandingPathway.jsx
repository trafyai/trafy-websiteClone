import React from 'react'
import Image from 'next/image'
import { LandingPathwayData } from '@api/landing/LandingData'
import Vector from '@public/assets/Images/landing-page/pathway/Vector.png'

const LandingPathway = () => {
  return (
    <div className='landing-pathway-section'>
        <div className='landing-pathway-container'>
            <div className='landing-pathway-heading'>
                <h2>Explore Pathways</h2>
            </div>
           
            <div className='landing-pathway-contents'>
            {LandingPathwayData.map((item,index)=>(
                <div className='landing-pathway-box'>
                    <Image src={item.img} width="60"  height="60"/>
                    <h3>{item.title}</h3>
                    <p style={{display:"flex",alignItems:"center"}}>view pathways <Image src={Vector} width={16} style={{marginLeft:"6px"}}/></p>
                </div>
                 ))}
            </div>
            
        </div>
    </div>
  )
}

export default LandingPathway
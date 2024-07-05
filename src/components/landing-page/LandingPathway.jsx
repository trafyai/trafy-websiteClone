import React from 'react'
import Image from 'next/image'
import { LandingPathwayData } from '@api/landing/LandingData'
import Vector from '@public/assets/Images/landing-page/pathway/Vector.png'
import Link from 'next/link'

const LandingPathway = () => {
  return (
    <div className='landing-pathway'>
        <div className='landing-pathway-container'>
            <div className='landing-pathway-heading'>
                <h2>Curated Pathways</h2>
                <p>For Students and Working professionals</p>
            </div>
           
            <div className='landing-pathway-contents'>
            {LandingPathwayData.map((item,index)=>(
                <Link className='landing-pathway-box' href={item.url}>
                     <div className='image-wrapper' style={{backgroundColor:item.color}}>
                        
                    </div>
                    <div className='landing-pathway-box-contents'>
                        <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p style={{display:"flex",alignItems:"center"}}>Know more <Image src={Vector}  style={{marginLeft:"10px"}}/></p>
                    </div>
                </Link>
                 ))}
            </div>
            
        </div>
    </div>
  )
}

export default LandingPathway
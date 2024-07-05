import React from 'react'
import Image from 'next/image'
import Vector from '@public/assets/Images/landing-page/pathway/Vector.png'

const LandingCaseStudy = () => {
  return (
    <div className='landing-casestudy'>
        <div className='landing-casestudy-container'>
            <div className='landing-casestudy-heading'><h2>Case Study</h2></div>
            
            <div className='landing-casestudy-contents'>
                <div className='landing-casestudy-box'>
                    <div className='casestudy-image-warper' style={{backgroundColor:"#F0FFF7"}}></div>
                    <div className='landing-casestudy-box-contents'>
                        <p>Learn we built</p>
                        <h3>The Future of algal Nutrition</h3>
                        <span>view more  <Image src={Vector}  style={{marginLeft:"10px"}}/></span>
                    </div>
                </div>
                <div className='landing-casestudy-box'>
                    <div className='casestudy-image-warper' style={{backgroundColor:"#F0FFF7"}}></div>
                    <div className='landing-casestudy-box-contents'>
                        <p>Learn we built</p>
                        <h3>Plant based organic
                        revolution</h3>
                        <span>view more  <Image src={Vector}  style={{marginLeft:"10px"}}/></span>
                    </div>
                </div>
                <div className='landing-casestudy-box'>
                    <div className='casestudy-image-warper' style={{backgroundColor:"#F0FFF7"}}></div>
                    <div className='landing-casestudy-box-contents'>
                        <p>Learn we built</p>
                        <h3>Lab grown organic
                        personal care</h3>
                        <span>view more  <Image src={Vector}  style={{marginLeft:"10px"}}/></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingCaseStudy
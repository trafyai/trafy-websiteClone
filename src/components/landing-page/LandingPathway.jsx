// import React from 'react'
// import Image from 'next/image'
// import { LandingPathwayData } from '@api/landing/LandingData'
// import Vector from '@public/assets/Images/landing-page/pathway/Vector.png'
// import Link from 'next/link'

// const LandingPathway = () => {
//   return (
//     <div className='landing-pathway'>
//         <div className='landing-pathway-container'>
//             <div className='landing-pathway-heading'>
//                 <h2>Curated Pathways</h2>
//                 <p>For Students and Working professionals</p>
//             </div>
           
//             <div className='landing-pathway-contents'>
//             {LandingPathwayData.map((item,index)=>(
//                 <Link className='landing-pathway-box' href={item.url}>
//                      <div className='image-wrapper' style={{backgroundColor:item.color}}>
//                         <Image src={item.img} style={{height:"100%"}}/>
//                     </div>
//                     <div className='landing-pathway-box-contents'>
//                         <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
//                         <p style={{display:"flex",alignItems:"center"}}>Know more <Image src={Vector}  style={{marginLeft:"10px"}}/></p>
//                     </div>
//                 </Link>
//                  ))}
//             </div>

//             <div className='landing-pathway-contents-mobile'>
//                 <div className='landing-pathway-label-container'>
//                     {LandingPathwayData.map((item,index)=>(<div className='landing-pathway-label' key={index} dangerouslySetInnerHTML={{ __html: item.title }} />))}
//                 </div>
//                 {LandingPathwayData.map((item,index)=>(
//                 <Link className='landing-pathway-box' href={item.url}>
//                         <div className='image-wrapper' style={{backgroundColor:item.color}}>
//                             <Image src={item.img} style={{height:"100%"}}/>
//                         </div>
//                         <div className='landing-pathway-box-contents'>
//                             <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
//                             <p style={{display:"flex",alignItems:"center"}}>Know more <Image src={Vector}  style={{marginLeft:"10px"}}/></p>
//                         </div>
//                     </Link>
//                 ))}

//             </div>
            
//         </div>
//     </div>
//   )
// }

// export default LandingPathway

'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { LandingPathwayData } from '@api/landing/LandingData'
import Vector from '@public/assets/Images/landing-page/pathway/Vector.png'
import Link from 'next/link'

const LandingPathway = () => {
  const [selectedPathway, setSelectedPathway] = useState(LandingPathwayData[0].id);

  return (
    <div className='landing-pathway'>
      <div className='landing-pathway-container'>
        <div className='landing-pathway-heading'>
          <h2>Curated Pathways</h2>
          <p>For Students and Working professionals</p>
        </div>

        <div className='landing-pathway-contents'>
          {LandingPathwayData.map((item, index) => (
            <Link key={index} className='landing-pathway-box' href={item.url}>
              <div className='image-wrapper' style={{ backgroundColor: item.color }}>
                <Image src={item.img} style={{ height: "100%" }} />
              </div>
              <div className='landing-pathway-box-contents'>
                <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ display: "flex", alignItems: "center" }}>Know more <Image src={Vector} style={{ marginLeft: "10px" }} /></p>
              </div>
            </Link>
          ))}
        </div>

        {/* <div className='landing-pathway-contents-mobile'>
          <div className='landing-pathway-label-container'>
            {LandingPathwayData.map((item, index) => (
              <div
                key={index}
                className={`landing-pathway-label ${item.id === selectedPathway ? 'active' : ''}`}
                onClick={() => setSelectedPathway(item.id)}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            ))}
          </div>
          {LandingPathwayData.filter(item => item.id === selectedPathway).map((item, index) => (
            <Link key={index} className='landing-pathway-box' href={item.url}>
              <div className='image-wrapper' style={{ backgroundColor: item.color }}>
                <Image src={item.img} style={{ height: "100%" }} />
              </div>
              <div className='landing-pathway-box-contents'>
                <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ display: "flex", alignItems: "center" }}>Know more <Image src={Vector} style={{ marginLeft: "10px" }} /></p>
              </div>
            </Link>
          ))}
        </div> */}

      </div>
    </div>
  )
}

export default LandingPathway

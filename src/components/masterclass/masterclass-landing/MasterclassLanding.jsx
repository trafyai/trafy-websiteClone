import React from 'react'
import Image from 'next/image'
import { MasterclassData } from '@api/masterclass/MasterclassData'
import Link from 'next/link'
import image from '@public/assets/Images/blog/5 key principles.png'

export default function MasterclassLanding(){
  return (
    <div className='masterclass-landing'>
        <div className='masterclass-landing-container'>
                <div className='masterclass-landing-heading'>
                    <h2>Masterclass</h2>
                </div>
                <div className='masterclass-landing-contents'>

                {MasterclassData.map((item,index)=>(
                    <div className='masterclass-landing-box' key={index}>
                        <div className='masterclass-box-image'>
                            <Image src={image}/>
                        </div>
                     
                     <div className='masterclass-box-content'>
                        
                        <div className='masterclass-box-heading'>
                            <h2>{item.title}</h2>
                            <div className='masterclass-box-detail-content'>
                                <p>{item.date}</p>
                                <span>|</span>
                                <p>{item.mode}</p>
                            </div>
                        </div>

                        
                        <div className='masterclass-box-event'>
                            <div className='masterclass-box-price'>
                               <p>{item.price}</p>
                            </div>

                            <Link href={`/masterclass/${item.id}`} className='masterclass-box-button'>
                                Join now
                            </Link>

                        </div> 

                    </div>
                </div>
                ))}

                </div>
            
        </div>

    </div>
  )
}


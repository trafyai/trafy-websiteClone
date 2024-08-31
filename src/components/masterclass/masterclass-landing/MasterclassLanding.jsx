import React from 'react'
import Image from 'next/image'
import { MasterclassData } from '@api/masterclass/MasterclassData'
import Link from 'next/link'

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
                        <div className='masterclass-box-badge'>
                            <p>{item.category}</p>
                        </div>

                        <div className='masterclass-box-heading'>
                            <h2>{item.title}</h2>
                            <p><Image src=""/>{item.date} | {item.time}</p>
                        </div>

                        <div className='masterclass-box-description'>
                            <p>{item.cDesc}</p>
                        </div>

                        <div className='masterclass-box-event'>
                            <div className='masterclass-box-instructor'>
                                <Image src=""/>
                                <div className='masterclass-box-instructor-name'>
                                    <h4>{item.instructor}</h4>
                                    <h5>{item.instructorDesignation}</h5>
                                </div>
                            </div>

                            <Link href={`/masterclass/${item.id}`} className='masterclass-box-button'>
                                Regsiter
                            </Link>

                        </div> 

                    </div>
                    ))}

                </div>
            
        </div>

    </div>
  )
}


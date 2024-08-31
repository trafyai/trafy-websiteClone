import React from 'react'
import Image from 'next/image'
import Ux from '@public/assets/Images/blog/5 key principles.png';
import Date from '@public/assets/Images/masterclass/date.svg'

const MasterClassHero = (props) => {
  return (
    <section className='mc-main-hero'>
        {/* <div className='mc-hero-badge'>
            <p>{props.category}</p>
        </div> */}
        <div className='mc-hero-image'>
            <Image src={Ux}/>
        </div>
        
        <div className='mc-hero-heading'>
         <h1>{props.title}</h1>
         <p>{props.desc}</p>
        </div>


       
    </section>
  )
}

export default MasterClassHero;
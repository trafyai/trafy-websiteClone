import React from 'react'
import '@styles/masterclass/MasterclassSingle.css'
import Image from 'next/image'
import MasterClassHero from './MasterClassHero'
import { MasterClassPriceCard } from './MasterClassPriceCard'
import { MasterClassLearn } from './MasterClassLearn'
import MasterClassAccordion from './MasterClassAccordion'
import { MasterClassInstructor } from './MasterClassInstructor'





export default function MasterclassSingle(props){
  return (
    <div className='mc-single'>
      <div  className='mc-single-container'>

      


          <div className='mc-single-main'>

            <MasterClassHero {...props} />
            <MasterClassPriceCard {...props}/>
            <MasterClassLearn {...props}/>
            <MasterClassAccordion {...props}/>
            <MasterClassInstructor {...props}/>

          </div>


      </div>

    </div>
  )
}

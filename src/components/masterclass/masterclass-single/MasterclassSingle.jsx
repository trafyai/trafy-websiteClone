import React from 'react'
import '@styles/masterclass/MasterclassSingle.css'
import Image from 'next/image'
import MasterClassHero from './MasterClassHero'
import { MasterClassLearn } from './MasterClassLearn'
import MasterClassAccordion from './MasterClassAccordion'
import { MasterClassInstructor } from './MasterClassInstructor'





export default function MasterclassSingle(props){
  return (
    <div className='mc-single'>
      <div  className='mc-single-container'>

        <div className='mc-single-side-card'>
            <div className='mc-card-container'>
              <div className='mc-card-heading'>
                <h3>{props.pCardTitle} </h3>
                <h2>{props.title}</h2>
              </div>
              <div className='mc-card-description'>
                <p>{props.pCardDesc}</p>
              </div>
              <div className='mc-card-details'>
                <div className='mc-card-detail-content'>
                  <Image src={props.dateIcon}/>
                  <p>{props.date}</p>
                </div>
                <div className='mc-card-detail-content'>
                  <Image src={props.timeIcon}/>
                  <p>{props.time}</p>
                </div>
                <div className='mc-card-detail-content'>
                  <Image src={props.projectIcon}/>
                  <p>{props.project}</p>
                </div>
                <div className='mc-card-detail-content'>
                  <Image src={props.modeIcon}/>
                  <p>{props.mode}</p>
                </div>
              </div>
              <div className='mc-card-price'>
                <p>{props.price}</p>
                <button className='mc-card-button'>Register</button>
              </div>
            </div>
          </div>


          <div className='mc-single-main'>

            <MasterClassHero {...props} />
            <MasterClassLearn {...props}/>
            <MasterClassAccordion {...props}/>
            <MasterClassInstructor {...props}/>

          </div>


      </div>

    </div>
  )
}

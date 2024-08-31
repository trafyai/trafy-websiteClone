import React from 'react'
import Image from 'next/image'
import square from '@public/assets/Images/masterclass/square.svg'


export const MasterClassInstructor = (props) => {
  return (
    <div className='mc-instructor'>
        <div className='mc-instructor-heading'>
          <h2>Instructor:</h2>
        </div>

        <div className='mc-instructor-content'>
          <div className='mc-instructor-image'>
            <Image src={square}/>
          </div>
          <div className='mc-instructor-about'>
            <div className='mc-instructor-name'>
              <h3>{props.instructor}</h3>
              <p>{props.instructorDesignation} </p>
            </div>
            <div className='mc-instructor-description'>
              <p>{props.instructorAbout}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

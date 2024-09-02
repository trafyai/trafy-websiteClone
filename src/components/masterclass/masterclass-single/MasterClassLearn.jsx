import React from 'react'
import Image from 'next/image'
import tick from '@public/assets/Images/masterclass/tick.svg'

export const MasterClassLearn = (props) => {
  return (
    <section className='mc-main-learn'>
    <div className='mc-learn-heading'>
      <h2>You’ll learn how to:</h2>
    </div>

    <div className='mc-learn-content-container'>
      {props.learnSecO.map((item,index)=>(
      <div className='mc-learn-content' key={index}>
        <Image src={tick}/>
        <p>{item}</p>
      </div>
      ))}

      {props.learnSecT.map((item,index)=>(
      <div className='mc-learn-content' key={index}>
        <Image src={tick}/>
        <p>{item}</p>
      </div>
      ))}

    </div>
  </section>
  )
}

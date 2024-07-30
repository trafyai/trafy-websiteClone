import React from 'react'
import Image from 'next/image'
import point from '@public/assets/Images/landing-page/point.svg'

const LandingGoals = () => {
  return (
    <div className='landing-goals'>
        <div className='landing-goals-container'>
            <div className='landing-goals-heading'>
                <h2>Focused on your goals</h2>
                <p>Learn from industry professionals and experts of the field. Connect with mentors personally and have 
                   unlimited doubt clearing sessions. Each session will be curated to help you learn better.</p>
            </div>

            <div className='landing-goals-contents'>
                <div className='landing-goals-box'>
                    <h3>For your Education</h3>

                    <div className='landing-goals-box-contents'>
                        <div className='landing-goals-box-points'><p>Core Concepts</p></div>
                        <div className='landing-goals-box-points'><p>Modern Technology</p></div>
                        <div className='landing-goals-box-points'><p>Learning Paths</p></div>
                        <div className='landing-goals-box-points'><p>Cheat Sheets</p></div>
                        <div className='landing-goals-box-points'><p>Multiplatform Integration</p></div>
                    </div>

                </div>

                <div className='landing-goals-box'>
                    <h3>For your Career</h3>

                    <div className='landing-goals-box-contents'>
                        <div className='landing-goals-box-points'><p>Personalized Curriculum</p></div>
                        <div className='landing-goals-box-points'><p>Unlimited Doubt 
                        Clearing Session</p></div>
                        <div className='landing-goals-box-points'><p>Placement Training</p></div>
                        <div className='landing-goals-box-points'><p>Impressive CV & Cover Letters</p></div>
                        <div className='landing-goals-box-points'><p>Post Hiring Support</p></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingGoals
import React from 'react'
import Image from 'next/image'
import Logo from '@public/assets/Images/landing-page/better-together/b-amazon.png'
import Clickup from '@public/assets/Images/landing-page/better-together/b-clickup.png'
import Grphy from '@public/assets/Images/landing-page/better-together/b-grphy.png'
import Hostinger from '@public/assets/Images/landing-page/better-together/b-hostinger.png'
import Semrush from '@public/assets/Images/landing-page/better-together/b-semrush.png'
import Shopify from '@public/assets/Images/landing-page/better-together/b-shopify.png'
import Wati from '@public/assets/Images/landing-page/better-together/b-wati.png'

const LandingPartners = () => {
  return (
    <div>
    <div className='landing-partners'>
        <div className='landing-partners-container'>
            <div className='landing-partners-heading'>
                <p>Trained and Trusted by companies that innovate</p>
            </div>
            <div className='landing-partners-logo-container'>
                <div className='landing-partners-logo'>
                    {/* First set of logos */}
                    <Image src={Logo}  height={24} />
                    <Image src={Clickup}  height={24} />
                    <Image src={Grphy}  height={24} />
                    <Image src={Hostinger}  height={24} />
                    <Image src={Semrush}  height={24} />
                    <Image src={Shopify}  height={24} />
                    <Image src={Wati}  height={24} />
                </div>
                <div className='landing-partners-logo'>
                    {/* First set of logos */}
                    <Image src={Logo}  height={24} />
                    <Image src={Clickup}  height={24} />
                    <Image src={Grphy}  height={24} />
                    <Image src={Hostinger}  height={24} />
                    <Image src={Semrush}  height={24} />
                    <Image src={Shopify}  height={24} />
                    <Image src={Wati}  height={24} />
                </div>
                <div className='landing-partners-logo'>
                    {/* First set of logos */}
                    <Image src={Logo}  height={24} />
                    <Image src={Clickup}  height={24} />
                    <Image src={Grphy}  height={24} />
                    <Image src={Hostinger}  height={24} />
                    <Image src={Semrush}  height={24} />
                    <Image src={Shopify}  height={24} />
                    <Image src={Wati}  height={24} />
                </div>
              
            </div>
        </div>
    </div>

    <div className='landing-features'>
        <div className='landing-features-container'>
        <div className='landing-features-description'><p>Fastest growing Innovation focused ed-tech platform</p></div>

            <div className='landing-features-contents'>
                <div className='landing-features-contents-container'>
                    <div className='landing-features-value'><p>5000+</p></div>
                    <div className='landing-features-key'><p>Learners</p></div>
                </div>
                <div className='landing-features-contents-container'>
                    <div className='landing-features-value'><p>10+</p></div>
                    <div className='landing-features-key'><p>Trainers</p></div>
                </div>
                <div className='landing-features-contents-container'>
                    <div className='landing-features-value'><p>Advanced</p></div>
                    <div className='landing-features-key'><p>Curriculum</p></div>
                </div>
                <div className='landing-features-contents-container'>
                    <div className='landing-features-value'><p>Unlimited</p></div>
                    <div className='landing-features-key'><p>Resources</p></div>
                </div>
            </div>

        </div>
    </div>

    </div>
  )
}

export default LandingPartners

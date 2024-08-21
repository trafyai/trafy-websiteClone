import LandingHero from '@components/landing-page/LandingHero';
import LandingPartners from './LandingPartners';
import LandingPathway from './LandingPathway';
import LandingEnterpreneur from './LandingEnterpreneur';
import LandingMasterclass from './LandingMasterclass';
import LandingInnovation from './LandingInnovation';
import LandingReview from "@components/landing-page/LandingReview";
import LandingAi from './LandingAi';
import LandingBetterTogether from './LandingBetterTogether';

import '@styles/landing-page/LandingPage.css'

export default function landingPage(){
   
    return(
        <>
       
        <LandingHero/>
        <LandingPartners/>
        <LandingPathway/>
        {/* <LandingEnterpreneur/> */}
        <LandingMasterclass/>
        <LandingInnovation/>
        {/* <LandingAi/> 
        <LandingBetterTogether/> */}
        <LandingReview/>
        
        </>
    )
}
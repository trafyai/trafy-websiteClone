import LandingHero from '@components/landing-page/LandingHero';
import LandingPartners from './LandingPartners';
import LandingPathway from './LandingPathway';
import LandingMasterclass from './LandingMasterclass';
import LandingInnovation from './LandingInnovation';
import LandingReview from "@components/landing-page/LandingReview";

import '@styles/landing-page/LandingPage.css'

export default function landingPage(){
   
    return(
        <>
       
        <LandingHero/>
        <LandingPartners/>
        <LandingPathway/>
        <LandingMasterclass/>
        <LandingInnovation/>
        <LandingReview/>
        
        </>
    )
}
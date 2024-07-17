import LandingHero from '@components/landing-page/LandingHero';
import LandingPartners from './LandingPartners';
import LandingPathway from './LandingPathway';
import LandingGoals from './LandingGoals';
import LandingTools from './LandingTools';
import LandingInnovation from './LandingInnovation';
import LandingCaseStudy from './LandingCaseStudy';
import LandingReview from "@components/landing-page/LandingReview";
import '@styles/landing-page/LandingPage.css'

export default function landingPage(){
   
    return(
        <>
       
        <LandingHero/>
        <LandingPartners/>
        <LandingPathway/>
        <LandingGoals/>
        <LandingTools/>
        {/* <LandingInnovation/>
        <LandingCaseStudy/> */}
        <LandingReview/>
        </>
    )
}
import LandingHero from '@components/landing-page/LandingHero';
import LandingPartners from './LandingPartners';
import LandingPathway from './LandingPathway';
import LandingGoals from './LandingGoals';
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
        <LandingInnovation/>
        <LandingCaseStudy/>
        <LandingReview/>
        </>
    )
}
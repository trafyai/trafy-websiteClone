import LandingHero from '@components/landing-page/LandingHero';
import LandingPartners from './LandingPartners';
import LandingPathway from './LandingPathway';
import LandingGoals from './LandingGoals';
import LandingInnovation from './LandingInnovation';
import LandingCaseStudy from './LandingCaseStudy';
import LandingReview from "@components/landing-page/LandingReview";
import LandingNewsletter from "@components/landing-page/LandingNewsletter";
import LandingBetterTogether from "@components/landing-page/LandingBetterTogether";
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
        {/* <LandingBetterTogether/> */}
        <LandingReview/>
        <LandingNewsletter/>
        </>
    )
}
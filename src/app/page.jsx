import React from 'react'
import "@styles/service/Service.css";
import LandingPage from '@components/landing-page/LandingPage';
import { GoogleAnalytics } from "@next/third-parties/google";


const Home = () => {
  return (
   
       
    <div>
        <GoogleAnalytics gaId="GTM-NX8D4BFD" />

        <LandingPage/>
    </div>
   
  )
}

export default Home;
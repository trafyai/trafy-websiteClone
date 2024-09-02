import React from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import "@styles/service/Service.css";
import LandingPage from '@components/landing-page/LandingPage';


const Home = () => {
  return (
   
       
    <div>
      <GoogleAnalytics gaId="GTM-NX8D4BFD" />
      <LandingPage/>
    </div>
   
  )
}

export default Home;
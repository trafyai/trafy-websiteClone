import React from 'react'
import ServiceHero from "@components/service-page/ServiceHero";
import ServiceGrow from "@components/service-page/ServiceGrow";
import ServiceSolution from "@components/service-page/ServiceSolution";
import ServiceStartup from "@components/service-page/ServiceStartup";
import ServicePartnership from "@components/service-page/ServicePartnership";
import ServiceBuild from "@components/service-page/ServiceBuild";
import "@styles/service/Service.css";

const Home = () => {
  return (
   
       
    <div>
       <ServiceHero />
      <ServicePartnership />
      <ServiceGrow />
      <ServiceSolution />
      <ServiceStartup />
      <ServiceBuild />
       
        {/* <LandingPage/> */}
    </div>
   
  )
}

export default Home;
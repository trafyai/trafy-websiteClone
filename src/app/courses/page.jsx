import React from 'react';
import UiuxCourse from '@components/course-page/course-landing-page/UiuxCourse';
import DigitalMarketingCourse from '@components/course-page/course-landing-page/DigitalMarketingCourse';
// import ArtificialIntelligenceCourse from '@components/course-page/course-landing-page/ArtificialIntelligenceCourse';
import Head from 'next/head';

const Course = () => {
  return (
    <div> 
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
        <UiuxCourse/>
        <DigitalMarketingCourse/>
        {/* <ArtificialIntelligenceCourse/> */}
    </div>
  )
}

export default Course
import React from 'react';
import UiuxCourse from '@components/course-page/course-landing-page/UiuxCourse';
import DigitalMarketingCourse from '@components/course-page/course-landing-page/DigitalMarketingCourse';
import Head from 'next/head';
import '@styles/course/course-landing/CourseLanding.css'

const Course = () => {
  return (
    <div className='course-landing-page'> 
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
        <UiuxCourse/>
        <DigitalMarketingCourse/>
    </div>
  )
}

export default Course;
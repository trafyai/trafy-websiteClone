import React from "react";
import '@styles/course/course-single/Course.css';
import '@styles/course/course-landing/CourseLanding.css';
import { CourseHeroData, CourseAboutData, CourseSyllabusData , CourseProjectData , CourseReviewData ,CourseCertificateData , CoursePaymentData, CourseFaqData, CourseSimilarData} from '@api/course/course-single/CourseData';
import CourseHero from "@components/course-page/course-page/CourseHero";
import CourseAbout from "@components/course-page/course-page/CourseAbout";
import CourseSyllabus from "@components/course-page/course-page/CourseSyllabus";
import CourseProject from "@components/course-page/course-page/CourseProject";
import CourseReview from "@components/course-page/course-page/CourseReview";
import CourseCertificate from "@components/course-page/course-page/CourseCertificate";
import CoursePayment from "@components/course-page/course-page/CoursePayment";
import CourseFaq from "@components/course-page/course-page/CourseFaq";
import CourseSimilar from "@components/course-page/course-page/CourseSimilar";

export async function generateMetadata({ params, searchParams }, parent) {
  
    const id = params.slug;
    const product = CourseHeroData.find(course =>course.id === id);
   
   
   
    return {
      title: product.courseHeading,
      description:product.courseDescription,
      openGraph: {
        title: product.courseHeading,
        description:product.courseDescription,
      },
    }
  }


export default function CoursePage({params}) {
    const {slug} = params;
   

    // Find the course data based on the course slug
    const HeroData = CourseHeroData.find(course => course.id === slug);
    const AboutData = CourseAboutData.find(course => course.id === slug);
    const SyllabusData = CourseSyllabusData.find(course => course.id === slug);
    const ProjectData = CourseProjectData.find(course => course.id === slug);
    const ReviewData = CourseReviewData.find(course => course.id === slug);
    const CertificateData = CourseCertificateData.find(course => course.id === slug);
    const PaymentData=CoursePaymentData.find(course => course.id === slug);
    const FaqData=CourseFaqData.find(course => course.id === slug);
    const SimilarData=CourseSimilarData.find(course => course.id === slug);

   
  

    return (
        <main>
             
            <CourseHero {...HeroData} />
            <CourseAbout {...AboutData} />
            <CourseSyllabus {...SyllabusData} />
            <CourseProject {...ProjectData}/>
            <CourseReview {...ReviewData}/>
            <CourseCertificate {...CertificateData}/>
            <CoursePayment {...PaymentData}/>
            <CourseFaq {...FaqData}/>
            <CourseSimilar {...SimilarData}/>
        </main>
    );
}




 



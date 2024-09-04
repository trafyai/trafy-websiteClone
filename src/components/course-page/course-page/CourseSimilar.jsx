import React from 'react';
import Image from 'next/image';
import Link from "next/link";


import { aiCourse, uiuxCourse, dmCourse } from '@api/course/course-landing/CourseData/';

const CourseSimilar = (props) => {
    let courseData = [];

    // Determine which course data to use based on the props.course value
    switch (props.course) {
        case 'aiCourse':
            courseData = aiCourse;
            break;
        case 'uiuxCourse':
            courseData = uiuxCourse;
            break;
        case 'dmCourse':
            courseData = dmCourse;
            break;
        default:
            courseData = [];
    }

    // Filter out the courses based on the props.ids
    const filteredCourseData = courseData.filter(item => !props.ids.includes(item.id));

    return (
        <div style={{padding:"0px 0px 60px 0px"}}>
            {filteredCourseData.length > 0 && (
        <div className="course-landing-uiux" >
             <div className="course-landing-ai-container">
             
                <div className="course-landing-ai-heading">
                    <h2>Upgrade Your UI/UX Journey</h2>
                </div>
            
            </div>
             <div className="course-landing-ai-container">
            {filteredCourseData.map((item, index) => (
                <div className="course-landing-ai-box-container" key={index}>
                    <Link href={`/courses/${item.id}`} className="course-landing-ai-box" key={item.id}>
                    <div className="course-landing-ai-card-title" style={{backgroundColor:item.bgColor}}>
                                        <h1 style={{fontSize:"14px",fontWeight:"400",fontFamily:"Inter",color:"#1c1623",marginBottom:"4px"}}>{item.level}</h1>
                                        <h3 style={{fontWeight:"600"}}>{item.title} </h3>
                                    </div>
                    <div className="course-landing-ai-contents">
                        <div className="landing-ai-card-description">
                            <p>{item.description}</p>
                        </div>
                        <div className="landing-ai-card-labels">
                            <div className="landing-ai-card-labels-contents">
                                {Object.values(item.label).map((label, index) => (
                                    <p key={index}>{label}</p>
                                ))}
                            </div>
                        </div>
                        <hr />
                        <div className="landing-ai-card-ratings">
                            <Image src={item.fullstar} alt="rating" className="fullstar" />
                            <Image src={item.fullstar} alt="rating" className="fullstar" />
                            <Image src={item.fullstar} alt="rating" className="fullstar" />
                            <Image src={item.fullstar} alt="rating" className="fullstar" />
                            <Image src={item.halfstar} alt="rating" className="halfstar" />
                            <p>{item.rating}</p>
                        </div>
                        <div className="landing-ai-card-level">
                            <p>{item.level}</p>
                            <p>{item.duration}</p>
                        </div>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
        </div>
        )}
        </div>
    );
};

export default CourseSimilar;

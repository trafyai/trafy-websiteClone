import React from "react"
import {dmCourse} from '@api/course/course-landing/CourseData/'
import '@styles/course/course-landing/CourseLanding.css';
import Link from "next/link";
import Image from "next/image";

export default function DigitalMarketingCourse(){
    return(
        <div >
      
         <main>
            <div className="course-landing-ai">
                      <div className="course-landing-ai-container">
                      <div className="course-landing-ai-heading"><h2>  Digital Marketing </h2></div>
                        </div>
                  
                        <div className="course-landing-ai-container">
                            

                            { dmCourse.map((item, index) => (
                            <div className="course-landing-ai-box-container" key={index}>
                            
                                <Link href={`/courses/${item.id}`} className="course-landing-ai-box" key={item.id}>
            
                                    <div className="course-landing-ai-card-title" style={{backgroundColor:item.bgColor}}>
                                        <h3>{item.title} </h3>
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
                                            {/* Assuming you have Fullstar and Halfstar components */}
                                            <Image src={item.fullstar} alt="rating" className="fullstar"/>
                                            <Image src={item.fullstar} alt="rating" className="fullstar"/>
                                            <Image src={item.fullstar} alt="rating" className="fullstar"/>
                                            <Image src={item.fullstar} alt="rating" className="fullstar"/>
                                            <Image src={item.halfstar} alt="rating" className="halfstar"/>
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
        </main>
        
        </div>
    )
}

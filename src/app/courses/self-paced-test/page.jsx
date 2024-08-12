

// 'use client';

// import React, { useEffect } from "react";
// import { useRouter } from 'next/navigation';
// import { course } from "@api/course/test/course";
// import { useCourse } from "@context/CourseContext";

// export default function CourseListPage() {
//     const router = useRouter();
//     const { updateCourseNavigation, firstLessonId, firstChapterId } = useCourse();

//     const handleCourseClick = (courseId) => {
//         const selectedCourse = course.find(c => c.id === courseId);

//         if (selectedCourse && selectedCourse.lesson.length > 0) {
//             const lessonId = selectedCourse.lesson[0].id;
//             const chapterId = selectedCourse.lesson[0].chapter[0]?.id;

//             if (chapterId) {
//                 // Update the context with the new navigation state
//                 updateCourseNavigation(lessonId, chapterId);

//                 // Navigate to the new URL using the updated state
//                 router.push(`/courses/self-paced-test/${courseId}/${lessonId}/${chapterId}`);
//             } else {
//                 console.error("No chapters found for the first lesson.");
//             }
//         } else {
//             console.error("No lessons found for the selected course.");
//         }
//     };

//     useEffect(() => {
//         // Ensure that courseId is available and not undefined
//         const courseId = new URLSearchParams(window.location.search).get('courseId');
//         if (courseId && firstLessonId && firstChapterId) {
//             // Automatically redirect to the first lesson and chapter on page load if courseId is present
//             router.push(`/courses/self-paced-test/${courseId}/${firstLessonId}/${firstChapterId}`);
//         }
//     }, [firstLessonId, firstChapterId, router]);

//     return (
//         <div style={{ padding: "120px" }}>
//             <h2>Select a Course</h2>
//             <ul>
//                 {course.map((item, index) => (
//                     <li
//                         key={index}
//                         style={{ cursor: "pointer", padding: "10px", borderBottom: "1px solid #ccc" }}
//                         onClick={() => handleCourseClick(item.id)}
//                     >
//                         {item.title}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }




// 'use client';

// import React, { useEffect } from "react";
// import { useRouter } from 'next/navigation';
// import { course } from "@api/course/test/course";
// import { useCourse } from "@context/CourseContext";

// export default function CourseListPage() {
//     const router = useRouter();
//     const { updateCourseNavigation, firstLessonId, firstChapterId } = useCourse();

//     const handleCourseClick = (courseId) => {
//         const selectedCourse = course.find(c => c.id === courseId);

//         if (selectedCourse && selectedCourse.lesson.length > 0) {
//             const lessonId = selectedCourse.lesson[0].id;
//             const chapterId = selectedCourse.lesson[0].chapter[0]?.id;

//             if (chapterId) {
//                 // Update the context with the new navigation state
//                 updateCourseNavigation(lessonId, chapterId);

//                 // Navigate to the new URL using the updated state
//                 router.push(`/courses/self-paced-test/${courseId}`);
//             } else {
//                 console.error("No chapters found for the first lesson.");
//             }
//         } else {
//             console.error("No lessons found for the selected course.");
//         }
//     };

//     useEffect(() => {
//         // Ensure that courseId is available and not undefined
//         const courseId = new URLSearchParams(window.location.search).get('courseId');
//         if (courseId && firstLessonId && firstChapterId) {
//             // Automatically redirect to the first lesson and chapter on page load if courseId is present
//             router.push(`/courses/self-paced-test/${courseId} `);
//         }
//     }, [firstLessonId, firstChapterId, router]);

//     return (
//         <div style={{ padding: "120px" }}>
//             <h2>Select a Course</h2>
//             <ul>
//                 {course.map((item, index) => (
//                     <li
//                         key={index}
//                         style={{ cursor: "pointer", padding: "10px", borderBottom: "1px solid #ccc" }}
//                         onClick={() => handleCourseClick(item.id)}
//                     >
//                         {item.title}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }


'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useCourse } from "@context/CourseContext";

export default function CourseListPage() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const router = useRouter();
    const { updateCourseNavigation, firstLessonId, firstChapterId } = useCourse();

    useEffect(() => {
        // Fetch course data from the provided URL
        const fetchCourses = async () => {
            try {
                const response = await fetch('https://run.mocky.io/v3/a8a74a16-9fe9-47d6-bd93-75c4cc6f013c');

                // Check if the response is ok
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                // Get the content type to check if it's JSON
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json();
                    setCourses(data); // Update state with fetched data
                } else {
                    // If not JSON, try to read and log the response text for debugging
                    const text = await response.text();
                    throw new Error(`Expected JSON, but got ${contentType}. Response text: ${text}`);
                }

                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const handleCourseClick = (courseId) => {
        const selectedCourse = courses.find(c => c.id === courseId);

        if (selectedCourse && selectedCourse.lesson.length > 0) {
            const lessonId = selectedCourse.lesson[0].id;
            const chapterId = selectedCourse.lesson[0].chapter[0]?.id;

            if (chapterId) {
                // Update the context with the new navigation state
                updateCourseNavigation(lessonId, chapterId);

                // Navigate to the new URL using the updated state
                router.push(`/courses/self-paced-test/${courseId}`);
            } else {
                console.error("No chapters found for the first lesson.");
            }
        } else {
            console.error("No lessons found for the selected course.");
        }
    };

    useEffect(() => {
        // Ensure that courseId is available and not undefined
        const courseId = new URLSearchParams(window.location.search).get('courseId');
        if (courseId && firstLessonId && firstChapterId) {
            // Automatically redirect to the first lesson and chapter on page load if courseId is present
            router.push(`/courses/self-paced-test/${courseId}`);
        }
    }, [firstLessonId, firstChapterId, router]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={{ padding: "120px" }}>
            <h2>Select a Course</h2>
            <ul>
                {courses.map((item, index) => (
                    <li
                        key={index}
                        style={{ cursor: "pointer", padding: "10px", borderBottom: "1px solid #ccc" }}
                        onClick={() => handleCourseClick(item.id)}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

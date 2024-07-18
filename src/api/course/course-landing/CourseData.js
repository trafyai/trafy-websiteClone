import Halfstar from '@public/assets/Images/comman/common/star_half.svg';
import Fullstar from '@public/assets/Images/comman/common/star_full.png';

export const uiuxCourse = [
    {
        id: "responsive-ui-designs",
        title: "Responsive UI Design",
        description: "Learn how to apply design principles and create a responsive pages",
        bgColor: "#d9cefb",
        label: {
            one: "Wireframing",
            two: "Autolayout",
            three: "Components",
            four: "Responsiveness",
        },
        rating: "4.8",
        level: "Beginner",
        certification:"Certified",
        duration: "4 weeks",
        halfstar: Halfstar,
        fullstar: Fullstar
    },
    {
        id: "building-functional-ux",
        title: "Building Functional UX",
        description: "Learn to build projects with native features of platforms and devices ",
        bgColor: "#d9cefb",
        label: {
            one: "UX Research",
            two: " User Journey",
            three: "Prototyping",
            four: " Design System ",
        },
        rating: "4.8",
        level: "Intermediate",
        certification:"Certified",
        duration: "8 weeks",
        halfstar: Halfstar,
        fullstar: Fullstar
    },
    {
        id: "spatial-ui-designs",
        title: "Spatial UI Design",
        description: "Learn to create immersive spatial and connected application ",
        bgColor: "#d9cefb",
        label: {
            one: "Tracking",
            two: "Seamlessness",
            three: "Object Model",
            four: "Adaptiveness",
        },
        rating: "4.8",
        level: "Advanced",
        duration: "12 weeks",
        certification:"Certified",
        halfstar: Halfstar,
        fullstar: Fullstar
    },
];

export const dmCourse = [
    {
        id: "digital-marketing-course",
        title: "Digital Marketing",
        description: "Master digital marketing,  SEO, social media, content creation. Hands-on projects for real-world skills.",
        bgColor: "#fad5a4",
        label: {
            one: "PPC’s",
            two: " Retarget",
            three: "Email",
            four: "Campaigns",
        },
        rating: "4.5",
        level: "Certification",
        duration: "4 weeks",
        halfstar: Halfstar,
        fullstar: Fullstar
    },
];

export const aiCourse = [
    {
        title: "Artificial Intelligence",
        description: "Dive into emerging AI, learn core principles, its applications, use cases, and create AI projects.",
        bgColor: "#cefbdb",
        label: {
            one: "Machine Learning",
            two: "Deep Learning",
            three: "Neural Network"
        },
        rating: "4.7",
        level: "Certification",
        duration: "8 weeks",
        halfstar: Halfstar,
        fullstar: Fullstar
    },
];

const courseData = [uiuxCourse, dmCourse, aiCourse];

export default courseData;
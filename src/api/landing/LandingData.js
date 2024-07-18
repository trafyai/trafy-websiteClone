import landingPage from '@components/landing-page/LandingPage'
import ux from '@public/assets/Images/landing-page/pathway/ux.png'
import ai from '@public/assets/Images/landing-page/pathway/ai.svg'
import dm from '@public/assets/Images/landing-page/pathway/dm.svg'

import quote from '@public/assets/Images/landing-page/quote.svg'

const LandingFeaturesData=[
    {
        top:"1000+",
        bottom:"Students"
    },
    {
        top:"20+",
        bottom:"Expert Mentors"
    }, 
    {
        top:"10+",
        bottom:"Pathways"
    },
    {
        top:"50+",
        bottom:"Companies"
    },
    {
        top:"Unlimited ",
        bottom:"Free Resources"
    },
]

const LandingPathwayData=[
    {
        id:"responsive-ui-designs",
        img:ux,
        title:"Responsive UI Design",
        label:"Responsive UI Design",
        url:"/courses/responsive-ui-designs",
        color:"#F0FFF7"
    }, 
    {
        id:"building-functional-ux",
        img:dm,
        title:"Building Functional UX",
        label:"Building Functional UX",
        url:"/courses/building-functional-ux",
        color:"#FFFFF0"
    },
    {
        id:"spatial-ui-designs",
        img:ai,
        title:"Spatial UI Designs",
        label:"Spatial UI Designs",
        url:"/courses/spatial-ui-designs",
        color:"#F6F0FF"
    },
    
]

const LandingReviewData=[
    {
        img:quote,
        review:"I highly recommend this course to anyone looking to enhance their UI/UX skills. The instructors are top-notch and the content is very relevant.",
        name:"Vikram Reddy",
        url:""
    },
    {
        img:quote,
        review:"Excellent course! The lessons were clear, concise, and well-organized. It has significantly improved my design approach.",
        name:"Megashree",
        url:""
    },
    {
        img:quote,
        review:"This course exceeded my expectations. The practical exercises and case studies were particularly beneficial.",
        name:"Divya",
        url:""
    },
    {
        img:quote,
        review:"The UI/UX course offered a perfect blend of theory and practice. I feel much more confident in my design skills now.",
        name:"Sathish Kumar",
        url:""
    },
    {
        img:quote,
        review:"As a beginner, I found this course very helpful. The step-by-step guidance and feedback were invaluable.",
        name:"Priya Nair",
        url:""
    },
    {
        img:quote,
        review:"Great course! The interactive elements and assignments kept me engaged throughout. Highly recommend it.",
        name:"Sneha",
        url:""
    },
    {
        img:quote,
        review:"The instructors were very knowledgeable and approachable. The course content was well-structured and engaging.",
        name:"Aarav Patel",
        url:""
    },

    {
        img:quote,
        review:"I loved the detailed explanations and the real-world examples. It made complex concepts easier to grasp.",
        name:"Dhenu",
        url:""
    },
    {
        img:quote,
        review:"This UI/UX course was incredibly insightful. The hands-on projects really helped me understand the principles in a practical way.",
        name:"Anirudh",
        url:""
    },


]

export {LandingFeaturesData,LandingPathwayData, LandingReviewData};
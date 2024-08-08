// import React from "react";
// import { testData } from "@api/course/test/testData";
// import TestSelf from "@components/course-page/testing/TestSelf";

// // export async function generateMetadata({ params, searchParams }, parent) {
// //   const { slug } = params;
// //   const Data = testData.find((course) => course.id === slug);

// //   return {
// //     title: HeroData.courseHeading,
// //     description: HeroData.courseDescription,
// //     openGraph: {
// //       title: HeroData.courseHeading,
// //       description: HeroData.courseDescription,
// //     },
// //   };
// // }

// export default function CoursePage({ params }) {
 

// //   const { slug } = params;
// //   const Data = testData.find((course) => course.id === slug);
//   const Data = testData.find((course) => course.id === 'uiux-basic-designs');
//   return (
//     <main>
//       <TestSelf {...Data} />
//     </main>
//   );
// }


// If testData is imported from a separate file
import React from "react";
import { testData } from "@api/course/test/testData";  // Ensure the path is correct
import TestSelf from "@components/course-page/testing/TestSelf";

export default function CoursePage({ params })  {
  const { slug } = params;
  const Data = testData.find((course) => course.id === slug);
  return (
    <main>
      {Data && <TestSelf {...Data} />}
    </main>
  );
}

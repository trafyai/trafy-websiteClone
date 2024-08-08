// import React from "react";
// import { testData } from "@api/course/test/testData";
// import Link from "next/link";

// export default function SelfPacedTesting(){
//     return(
//         <div style={{padding:"120px 0px 60px 0px",display:"flex",gap:"3rem"}}>
//             <div style={{width:"80%", display:"flex",gap:"3rem"}}>
//                 {testData.map((item,index)=>(
//                 <Link href={`/courses/self-paced-test/${item.id}`} style={{width:"300px",height:"max-content",padding:"16px",border:"1px solid"}} key={index}>
//                     <h3>{item.title}</h3>
//                 </Link>
//                   ))}
//             </div>
//         </div>
//     )
// }

'use client'
import React from "react";
import { testData } from "@api/course/test/testData";
import Link from "next/link";
import { UserAuth } from "@context/AuthContext";

export default function SelfPacedTesting() {
    const { user, logOut, loading } = UserAuth();

    return (
        <div style={{ padding: "120px 0px 60px 0px", display: "flex", gap: "3rem" }}>
            <div style={{ width: "80%", display: "flex", gap: "3rem" }}>
                {testData.map((item, index) => (
                    <div style={{ width: "300px", height: "max-content", padding: "16px", border: "1px solid" }} key={index}>
                        {user ? (
                            <Link href={`/courses/self-paced-test/${item.id}`}>
                                <h3>{item.title}</h3>
                            </Link>
                        ) : (
                            <div>
                                <h3>{item.title}</h3>
                                <p>Please <Link href="/signup">sign up</Link> to access this course.</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

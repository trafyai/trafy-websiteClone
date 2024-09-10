// 'use client'
// import React, {useState} from 'react'
// import Image from 'next/image'
// import MasterClassEnquiryForm from '@components/common/auth/masterclass-form/masterClassEnquiry'
// import { UserAuth } from "@context/AuthContext";
// import Router from 'next/navigation';


// export const MasterClassPriceCard = (props) => {
//     const [formOpen, setFormOpen] = useState(false);
//     const { user, logOut, loading } = UserAuth();
//     const router = useRouter();
//     function handleClick(){
//         setFormOpen(!formOpen)
//     }
//     function handleLogin(){
//         router.push("/login")
//     }
//   return (
//     <div className='mc-single-side-card'>
//     <div className='mc-card-container'>

//         <div className='mc-card-content'>
            
//             <div className='mc-card-heading'>
//                 <h3>{props.pCardTitle} </h3>
//                 <h2>{props.title}</h2>
//             </div>

//             <div className='mc-card-description'>
//                 <p>{props.pCardDesc}</p>
//             </div>

//             <div className='mc-card-details'>
//                 <div className='mc-card-detail-content'>
//                     <Image src={props.dateIcon}/>
//                     <p>{props.date}</p>
//                 </div>

//                 <div className='mc-card-detail-content'>
//                     <Image src={props.timeIcon}/>
//                     <p>{props.time}</p>
//                 </div>

//                 <div className='mc-card-detail-content'>
//                     <Image src={props.projectIcon}/>
//                     <p>{props.project}</p>
//                 </div>

//                 <div className='mc-card-detail-content'>
//                     <Image src={props.modeIcon}/>
//                     <p>{props.mode}</p>
//                 </div>

//             </div>
//       </div>

//       <div className='mc-card-price'>
//         <p>{props.price}</p>
//         <button className='mc-card-button' onClick={handleClick}>Register</button>
//       </div>

//      {user ? (
//         {formOpen && <MasterClassEnquiryForm/>}
//         ):(
//          handleLogin();
//          {formOpen && <MasterClassEnquiryForm/>}
//         ) 
//      }
//     </div>

//   </div>
//   )
// }

'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import MasterClassEnquiryForm from '@components/common/auth/masterclass-form/masterClassEnquiry';
import { UserAuth } from "@context/AuthContext";
import { useRouter } from 'next/navigation';

export const MasterClassPriceCard = (props) => {
    const [formOpen, setFormOpen] = useState(false);
    const { user } = UserAuth(); // Removed logOut and loading as they are not used
    const router = useRouter(); // Fixed the incorrect hook usage, changed Router to useRouter

    function handleClick() {
        setFormOpen(!formOpen);
    }

    function handleLogin() {
        router.push("/login");
    }

    return (
        <div className='mc-single-side-card'>
            <div className='mc-card-container'>
                <div className='mc-card-content'>
                    <div className='mc-card-heading'>
                        <h3>{props.pCardTitle}</h3>
                        <h2>{props.title}</h2>
                    </div>

                    <div className='mc-card-description'>
                        <p>{props.pCardDesc}</p>
                    </div>

                    <div className='mc-card-details'>
                        <div className='mc-card-detail-content'>
                            <Image src={props.dateIcon} alt="Date Icon" />
                            <p>{props.date}</p>
                        </div>

                        <div className='mc-card-detail-content'>
                            <Image src={props.timeIcon} alt="Time Icon" />
                            <p>{props.time}</p>
                        </div>

                        <div className='mc-card-detail-content'>
                            <Image src={props.projectIcon} alt="Project Icon" />
                            <p>{props.project}</p>
                        </div>

                        <div className='mc-card-detail-content'>
                            <Image src={props.modeIcon} alt="Mode Icon" />
                            <p>{props.mode}</p>
                        </div>
                    </div>
                </div>

                <div className='mc-card-price'>
                    <p>{props.price}</p>
                    <button className='mc-card-button' onClick={handleClick}>Register</button>
                </div>

                {formOpen && (
                    user ? (
                        <MasterClassEnquiryForm title="Join now" courseFee={`${props.fee}`} courseName={`${props.courseName}`}/>
                    ) : (
                        handleLogin()
                    )
                )}
            </div>
        </div>
    );
};

// 'use client'
// import React,{useState} from "react";
// import Image from "next/image";
// import img from '@public/assets/Images/landing-page/pathway/ui.png';
// import share from '@public/assets/Images/comman/common/share.svg'
// import Click from '@public/assets/Images/landing-page/pathway/click-arrow.svg'

// export default function LandingMasterclass(){
//     return(
//         <div className="landing-masterclass">
//             <div className="landing-masterclass-container">
//                 <div className="landing-masterclass-heading">
//                     <h2>Masterclass</h2>
//                 </div>
//                 <div className="landing-masterclass-contents">
//                     <div className="landing-masterclass-card">
//                         <div className="masterclass-image-wrapper">
//                             <Image src={img} alt="" className="masterclass-main-img"/>
//                             <Image src={share}  alt="" className="masterclass-share-img"/>
//                         </div>
//                         <div className="masterclass-card-content">
//                             <h3>Spatial UI Designs</h3>
//                             <span className="date">Sunday, 1 August | 1:30 PM</span>
//                             <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
//                             <div className='landing-pathway-box-contents-bottom'>
//                                 <span>Register<Image src={Click} style={{marginLeft:"8px"}}/></span>
//                             </div>
//                         </div>
//                     </div>  
//                     <div className="landing-masterclass-card">
//                         <div className="masterclass-image-wrapper">
//                             <Image src={img} alt="" className="masterclass-main-img"/>
//                             <Image src={share} alt="" className="masterclass-share-img"/>
//                         </div>
//                         <div className="masterclass-card-content">
//                             <h3>Spatial UI Designs</h3>
//                             <span className="date">Sunday, 1 August | 1:30 PM</span>
//                             <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
//                             <div className='landing-pathway-box-contents-bottom'>
//                                 <span>Register<Image src={Click} style={{marginLeft:"8px"}}/></span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="landing-masterclass-card">
//                         <div className="masterclass-image-wrapper">
//                             <Image src={img} alt="" className="masterclass-main-img"/>
//                             <Image src={share} alt="" className="masterclass-share-img"/>
//                         </div>
//                         <div className="masterclass-card-content">
//                             <h3>Spatial UI Designs</h3>
//                             <span className="date">Sunday, 1 August | 1:30 PM</span>
//                             <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
//                             <div className='landing-pathway-box-contents-bottom'>
//                                 <span>Register<Image src={Click} style={{marginLeft:"8px"}}/></span>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }





// 'use client'
// import React, { useState } from "react";
// import Image from "next/image";
// import img from '@public/assets/Images/landing-page/pathway/ui.png';
// import share from '@public/assets/Images/comman/common/share.svg';
// import Click from '@public/assets/Images/landing-page/pathway/click-arrow.svg';
// import Modal from "@components/Modal";

// export default function LandingMasterclass() {
//     const [showModal, setShowModal] = useState(false);

//     const handleShareClick = () => {
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };

//     return (
//         <div className="landing-masterclass">
//             <div className="landing-masterclass-container">
//                 <div className="landing-masterclass-heading">
//                     <h2>Masterclass</h2>
//                 </div>
//                 <div className="landing-masterclass-contents">
//                     <div className="landing-masterclass-card">
//                         <div className="masterclass-image-wrapper">
//                             <Image src={img} alt="" className="masterclass-main-img" />
//                             <Image src={share} alt="" className="masterclass-share-img" onClick={handleShareClick} />
//                         </div>
//                         <div className="masterclass-card-content">
//                             <h3>Spatial UI Designs</h3>
//                             <span className="date">Sunday, 1 August | 1:30 PM</span>
//                             <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
//                             <div className='landing-pathway-box-contents-bottom'>
//                                 <span>Register<Image src={Click} style={{ marginLeft: "8px" }} /></span>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Repeat the card as needed */}
//                 </div>
//             </div>
//             <Modal show={showModal} handleClose={handleCloseModal} url="https://trafyai.com/uiux-course" />
//         </div>
//     );
// }


'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img from '@public/assets/Images/landing-page/pathway/ui.png';
import share from '@public/assets/Images/comman/common/share.svg';
import Click from '@public/assets/Images/landing-page/pathway/click-arrow.svg';
import Whatsapp from '@public/assets/Images/comman/common/socials/whatsapp.png';
import Facebook from '@public/assets/Images/comman/common/socials/facebook.png';
import Linkedin from '@public/assets/Images/comman/common/socials/linkedin.png';
import X from '@public/assets/Images/comman/common/socials/twitter.png';

export default function LandingMasterclass() {
    const [showShare, setShowShare] = useState(false);
    const [pageUrl, setPageUrl] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setPageUrl(window.location.href);
        }
    }, []);

    useEffect(() => {
        if (showShare) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showShare]);

    function courseShare() {
        setShowShare(!showShare);
    }

    function shareToLinkedIn() {
        const postTitle = encodeURIComponent('UI/UX Designing');
        const postUrl = encodeURIComponent(pageUrl);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}&title=${postTitle}`, '_blank', 'width=600,height=400');
    }

    function shareToTwitter() {
        const postTitle = encodeURIComponent('UI/UX Designing');
        const postUrl = encodeURIComponent(pageUrl);
        window.open(`https://twitter.com/intent/tweet?text=${postTitle}&url=${postUrl}`, '_blank', 'width=600,height=400');
    }

    function shareToFacebook() {
        const postUrl = encodeURIComponent(pageUrl);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`, '_blank', 'width=600,height=400');
    }

    function shareToWhatsApp() {
        const postUrl = encodeURIComponent(pageUrl);
        window.open(`https://api.whatsapp.com/send?text=${postUrl}`, '_blank');
    }

    function copyUrlToClipboard() {
        navigator.clipboard.writeText(pageUrl)
            .then(() => {
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }

    return (
        <div className="landing-masterclass">
            <div className="landing-masterclass-container">
                <div className="landing-masterclass-heading">
                    <h2>Masterclass</h2>
                </div>
                <div className="landing-masterclass-contents">
                    <div className="landing-masterclass-card">
                        <div className="masterclass-image-wrapper">
                            <Image src={img} alt="" className="masterclass-main-img"/>
                            <Image src={share} onClick={courseShare} alt="" className="masterclass-share-img"/>
                        </div>
                        <div className="masterclass-card-content">
                            <h3>Spatial UI Designs</h3>
                            <span className="date">Sunday, 1 August | 1:30 PM</span>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                            <div className='landing-pathway-box-contents-bottom'>
                                <span>Register<Image src={Click} style={{ marginLeft: "8px" }} /></span>
                            </div>
                        </div>
                    </div>
                    <div className="landing-masterclass-card">
                        <div className="masterclass-image-wrapper">
                            <Image src={img} alt="" className="masterclass-main-img"/>
                            <Image src={share} onClick={courseShare} alt="" className="masterclass-share-img"/>
                        </div>
                        <div className="masterclass-card-content">
                            <h3>Spatial UI Designs</h3>
                            <span className="date">Sunday, 1 August | 1:30 PM</span>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                            <div className='landing-pathway-box-contents-bottom'>
                                <span>Register<Image src={Click} style={{ marginLeft: "8px" }} /></span>
                            </div>
                        </div>
                    </div>
                    <div className="landing-masterclass-card">
                        <div className="masterclass-image-wrapper">
                            <Image src={img} alt="" className="masterclass-main-img"/>
                            <Image src={share} onClick={courseShare} alt="" className="masterclass-share-img"/>
                        </div>
                        <div className="masterclass-card-content">
                            <h3>Spatial UI Designs</h3>
                            <span className="date">Sunday, 1 August | 1:30 PM</span>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                            <div className='landing-pathway-box-contents-bottom'>
                                <span>Register<Image src={Click} style={{ marginLeft: "8px" }} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showShare && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className="popup-header">
                            <p>Share</p>
                            <button onClick={courseShare} className="popup-close">X</button>
                        </div>
                        <div className="course-share-socials">
                            <Image src={Whatsapp} onClick={shareToWhatsApp}/>
                            <Image src={Facebook} onClick={shareToFacebook}/>
                            <Image src={Linkedin}  onClick={shareToLinkedIn}/>
                            <Image src={X} onClick={shareToTwitter}/>
                        </div>
                        <div className="course-share-link">
                            <input type="text" value={pageUrl} readOnly />
                            <button onClick={copyUrlToClipboard}>Copy</button>
                        </div>
                    </div>
                </div>
            )}
            {showAlert && (
                <div className="alert alert-top-right">Link copied to clipboard</div>
            )}
        </div>
    );
}

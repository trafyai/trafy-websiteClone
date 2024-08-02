import React from "react";
import Image from "next/image";
import img from '@public/assets/Images/landing-page/pathway/ui.png';
import share from '@public/assets/Images/comman/common/share.svg'
import Click from '@public/assets/Images/landing-page/pathway/click-arrow.svg'

export default function LandingMasterclass(){
    return(
        <div className="landing-masterclass">
            <div className="landing-masterclass-container">
                <div className="landing-masterclass-heading">
                    <h2>Masterclass</h2>
                </div>
                <div className="landing-masterclass-contents">
                    <div className="landing-masterclass-card">
                        <div className="masterclass-image-wrapper">
                            <Image src={img} alt="" className="masterclass-main-img"/>
                            <Image src={share} alt="" className="masterclass-share-img"/>
                        </div>
                        <div className="masterclass-card-content">
                            <h3>Spatial UI Designs</h3>
                            <span className="date">Sunday, 1 August | 1:30 PM</span>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                            <div className='landing-pathway-box-contents-bottom'>
                                <span>Register<Image src={Click} style={{marginLeft:"8px"}}/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
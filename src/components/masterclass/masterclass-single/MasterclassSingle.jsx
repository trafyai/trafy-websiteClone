import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '@styles/masterclass/MasterclassSingle.css';
import MasterClassHero from './MasterClassHero';
import { MasterClassLearn } from './MasterClassLearn';
import MasterClassAccordion from './MasterClassAccordion';
import { MasterClassInstructor } from './MasterClassInstructor';
import MasterClassEnquiryForm from '@Components/common/auth/masterclass-form/masterClassEnquiry';
import '@styles/common/auth/masterClassEnquiry.css';
import { auth } from '@firebase'; // Adjust this path based on your actual file structure
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function MasterclassSingle(props) {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleEnquiryClick = () => {
    if (isAuthenticated) {
      setShowEnquiry(true);
    } else {
      router.push('/signup'); // Redirect to signup page if not authenticated
    }
  };

  return (
    <div className='mc-single'>
      <div className='mc-single-container'>
        <div className='mc-single-side-card'>
          <div className='mc-card-container'>
            <div className='mc-card-heading'>
              <h3>{props.pCardTitle}</h3>
              <h2>{props.title}</h2>
            </div>
            <div className='mc-card-description'>
              <p>{props.pCardDesc}</p>
            </div>
            <div className='mc-card-details'>
              <div className='mc-card-detail-content'>
                <Image src={props.dateIcon} alt="date icon" />
                <p>{props.date}</p>
              </div>
              <div className='mc-card-detail-content'>
                <Image src={props.timeIcon} alt="time icon" />
                <p>{props.time}</p>
              </div>
              <div className='mc-card-detail-content'>
                <Image src={props.projectIcon} alt="project icon" />
                <p>{props.project}</p>
              </div>
              <div className='mc-card-detail-content'>
                <Image src={props.modeIcon} alt="mode icon" />
                <p>{props.mode}</p>
              </div>
            </div>
            <div className='mc-card-price'>
              <p>{props.price}</p>
              <button className='mc-card-button' onClick={handleEnquiryClick}>Register</button>
            </div>
          </div>
        </div>

        <div className='mc-single-main'>
          <MasterClassHero {...props} />
          <MasterClassLearn {...props} />
          <MasterClassAccordion {...props} />
          <MasterClassInstructor {...props} />
        </div>
      </div>
      {showEnquiry && isAuthenticated && (
        <div className="popup-overlay">
          <MasterClassEnquiryForm {...props} onClose={() => setShowEnquiry(false)} />
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '@styles/masterclass/MasterclassSingle.css';
import MasterClassHero from './MasterClassHero';
import { MasterClassPriceCard } from './MasterClassPriceCard';
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
        

        <div className='mc-single-main'>
        
          <MasterClassHero {...props} />
          <MasterClassPriceCard {...props}/>
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

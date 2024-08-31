// pages/masterclass.js

import React from 'react';
import MasterclassLanding from '@components/masterclass/masterclass-landing/MasterclassLanding';
import '@styles/masterclass/MasterclassLanding.css';

// Correctly export the component as the default export
const MasterclassPage = () => {
  return (
    <div>
      <MasterclassLanding />
    </div>
  );
};

export default MasterclassPage; // Ensure the component is the default export

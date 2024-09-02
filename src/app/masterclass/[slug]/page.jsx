

'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import MasterclassSingle from '@components/masterclass/masterclass-single/MasterclassSingle';
import MasterClassAccordion from '@components/masterclass/masterclass-single/MasterClassAccordion';
import { MasterclassData } from '@api/masterclass/MasterclassData';

export default function MasterclassDetail({params}) {
  const router = useRouter();
  const { slug } = params;

  // Find the matching masterclass data using the slug
  const data = MasterclassData.find((item) => item.id === slug);

  

  return (
    <div >
      <MasterclassSingle {...data} />
    </div>
  );
}


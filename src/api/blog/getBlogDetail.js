// src/api/blogs/getBlogDetail.js

import { db } from '@src/firebase'; // Adjust the path as needed
import { doc, getDoc } from 'firebase/firestore';

export async function getBlogDetail(id) {
  try {
    const docRef = doc(db, 'blogDetails', id); // Ensure 'blogs' is the correct collection
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error('No such document!');
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    throw new Error('Error fetching document');
  }
}

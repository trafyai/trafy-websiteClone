'use client';
import { useContext, createContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [firstLessonId, setFirstLessonId] = useState(null);
  const [firstChapterId, setFirstChapterId] = useState(null);

  const updateCartNavigation = (lessonId, chapterId) => {
    setFirstLessonId(lessonId);
    setFirstChapterId(chapterId);
  };

  return (
    <CartContext.Provider value={{ firstLessonId, firstChapterId, updateCartNavigation }}>
      {children}
    </CartContext.Provider>
  );
};


'use client'
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartDetails, setCartDetails] = useState(null);

  // Save cartDetails to localStorage whenever it's updated
  useEffect(() => {
    if (cartDetails) {
      localStorage.setItem('cartDetails', JSON.stringify(cartDetails));
    }
  }, [cartDetails]);

  // Load cartDetails from localStorage on initial load
  useEffect(() => {
    const storedCartDetails = localStorage.getItem('cartDetails');
    if (storedCartDetails) {
      setCartDetails(JSON.parse(storedCartDetails));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cartDetails, setCartDetails }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

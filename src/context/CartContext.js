// 'use client'
// import { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartDetails, setCartDetails] = useState(null);

//   useEffect(() => {
//     if (cartDetails) {
//       localStorage.setItem('cartDetails', JSON.stringify(cartDetails));
//     }
//   }, [cartDetails]);

//   useEffect(() => {
//     const storedCartDetails = localStorage.getItem('cartDetails');
//     if (storedCartDetails) {
//       setCartDetails(JSON.parse(storedCartDetails));
//     }
//   }, []);

//   return (
//     <CartContext.Provider value={{ cartDetails, setCartDetails }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }

'use client'
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartDetails, setCartDetails] = useState(null);

  // Effect to update localStorage whenever cartDetails changes
  useEffect(() => {
    if (cartDetails) {
      // Clear localStorage and store the updated cart details
      localStorage.removeItem('cartDetails');
      localStorage.setItem('cartDetails', JSON.stringify(cartDetails));
    }
  }, [cartDetails]);

  useEffect(() => {
    // On component mount, load cart details from localStorage
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

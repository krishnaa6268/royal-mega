// src/contexts/CartContext.jsx
import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (name, selectedMain, selectedMega, price) => {
    const newItem = {
      id: Date.now(), // unique ID
      name,
      date: new Date().toLocaleString(),
      sequences: [selectedMain.concat(selectedMega ? [selectedMega] : [])],
      price,
    };
    setCartItems((prev) => [...prev, newItem]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

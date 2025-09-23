import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push({
        id: Date.now(),
        ...action.payload, // name, selectedMain, selectedMega, price
        date: new Date().toLocaleString(),
        sequences: [
          action.payload.selectedMain.concat(
            action.payload.selectedMega ? [action.payload.selectedMega] : [],
          ),
        ],
      });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

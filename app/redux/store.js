import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import jackpotReducer from './jackpotSlice'; // ✅ import jackpot slice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    jackpot: jackpotReducer, // ✅ add jackpot slice
  },
});

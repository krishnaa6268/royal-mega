import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import jackpotReducer from './jackpotSlice';
import userReducer from './userSlice'; // ✅ import

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    jackpot: jackpotReducer,
    user: userReducer, // ✅ add
  },
});

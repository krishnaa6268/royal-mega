import { createSlice } from '@reduxjs/toolkit';

// Load cart from localStorage
const savedCart = localStorage.getItem('cartItems');

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: savedCart ? JSON.parse(savedCart) : [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { name, price, selectedMain = [], selectedMega } = action.payload;

      const sequence = selectedMain.concat(selectedMega ? [selectedMega] : []);

      const existingItem = state.cartItems.find((item) => item.name === name);

      // ✅ Prevent duplicate sequence for the same jackpot
      const isDuplicate =
        existingItem &&
        existingItem.sequences.some(
          (seq) => seq.join('-') === sequence.join('-'),
        );

      if (isDuplicate) return; // skip adding duplicate

      if (existingItem) {
        existingItem.sequences.push(sequence);
      } else {
        state.cartItems.push({
          id: Date.now(),
          name,
          price,
          date: new Date().toLocaleString(),
          sequences: [sequence],
        });
      }

      // Save to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('cartItems');
    },

    removeSequence: (state, action) => {
      const { itemId, seqIndex } = action.payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);

      if (item) {
        item.sequences = item.sequences.filter((_, idx) => idx !== seqIndex);

        if (item.sequences.length === 0) {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== itemId,
          );
        }
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, clearCart, removeSequence } =
  cartSlice.actions;
export default cartSlice.reducer;

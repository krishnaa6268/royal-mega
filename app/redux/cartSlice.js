import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { name, price, selectedMain = [], selectedMega } = action.payload;

      // Create sequence from selected numbers
      const sequence = selectedMain.concat(selectedMega ? [selectedMega] : []);

      const existingItem = state.cartItems.find((item) => item.name === name);

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
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    // ✅ New reducer to delete a single sequence
    removeSequence: (state, action) => {
      const { itemId, seqIndex } = action.payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);

      if (item) {
        item.sequences = item.sequences.filter((_, idx) => idx !== seqIndex);

        // If no sequences left → remove whole item
        if (item.sequences.length === 0) {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== itemId,
          );
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, removeSequence } =
  cartSlice.actions;
export default cartSlice.reducer;

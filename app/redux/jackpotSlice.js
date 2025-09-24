// redux/jackpotSlice.js
import { createSlice } from '@reduxjs/toolkit';

const jackpotSlice = createSlice({
  name: 'jackpot',
  initialState: {
    currentJackpot: null,
  },
  reducers: {
    setJackpot: (state, action) => {
      state.currentJackpot = action.payload;
    },
  },
});

export const { setJackpot } = jackpotSlice.actions;
export default jackpotSlice.reducer;

// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload)); // save to localStorage
    },
    login: (state, action) => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (
        storedUser &&
        (storedUser.username === action.payload.username ||
          storedUser.contact === action.payload.contact) &&
        storedUser.password === action.payload.password
      ) {
        state.user = storedUser;
      } else {
        throw new Error('Invalid credentials');
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { signup, login, logout } = userSlice.actions;
export default userSlice.reducer;

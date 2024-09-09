import { createSlice } from "@reduxjs/toolkit";

// Define initial values
const initialAuthState = { isAuthenticated: false };

// Create slices

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";

import cartItems from "./cartItemSlice";
import visibleSlice from "./visibleSlice";

const store = configureStore({
  reducer: {
    visibleSlice: visibleSlice,
    cartItems: cartItems,
  },
});

export default store;

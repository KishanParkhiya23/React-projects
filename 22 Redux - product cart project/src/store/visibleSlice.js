import { createSlice } from "@reduxjs/toolkit";

const toggleCart = createSlice({
  name: "cart-visibility",
  initialState: { isCartVisible: false, isNotificationVisible: null },
  reducers: {
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    visibleNotification(state, action) {
      if (action.payload !== null) {
        state.isNotificationVisible = {
          status: !action.payload.isNotificationVisible,
          title: action.payload.title,
          message: action.payload.message,
        };
      } else {
        state.isNotificationVisible = null;
      }
    },
  },
});


export const visibilityActions = toggleCart.actions;
export default toggleCart.reducer;

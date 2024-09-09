import { createSlice } from "@reduxjs/toolkit";
const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: { items: [], total: 0, changed: false },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.total = action.payload.total;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
        });
      }
      state.total += newItem.price;
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      state.changed = true;
      state.total -= item.price;
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
  },
});

export const cartItemsActions = cartItemSlice.actions;
export default cartItemSlice.reducer;

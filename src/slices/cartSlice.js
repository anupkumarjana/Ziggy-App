import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => void state.items.push(action.payload),
    removeItem: (state) => void state.items.pop(),
    clearCart: (state) => void (state.items.length = 0),
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

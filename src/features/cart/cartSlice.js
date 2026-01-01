import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const found = state.items.find((i) => i.id === item.id);

      if (found) {
        found.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.total += Number(item.price.replace("$", ""));
    },

    increaseQty(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      item.quantity += 1;
      state.total += Number(item.price.replace("$", ""));
    },

    decreaseQty(state, action) {
      const item = state.items.find((i) => i.id === action.payload);

      if (item.quantity > 1) {
        item.quantity -= 1;
        state.total -= Number(item.price.replace("$", ""));
      }
    },

    removeFromCart(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      state.total -= Number(item.price.replace("$", "")) * item.quantity;
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;




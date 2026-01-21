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
      const price = Number(item.price.toString().replace(/\D/g, "")); // обязательно число

      const found = state.items.find((i) => i.id === item.id);
      if (found) {
        found.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1, price });
      }

      state.total = state.items.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
    },

    increaseQty(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;

      state.total = state.items.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
    },

    decreaseQty(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;

      state.total = state.items.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
    },

    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
      state.total = state.items.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
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











// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
    
//     addToCart(state, action) {
//       const item = state.items.find(i => i.id === action.payload.id);
//       if (item) item.qty += 1;
//       else state.items.push({ ...action.payload, qty: 1 });
//     },

    
//     increaseQty(state, action) {
//       const item = state.items.find(i => i.id === action.payload);
//       if (item) item.qty += 1;
//     },

    
//     decreaseQty(state, action) {
//       const item = state.items.find(i => i.id === action.payload);
//       if (item) {
//         if (item.qty > 1) item.qty -= 1;
//         else state.items = state.items.filter(i => i.id !== item.id);
//       }
//     },

    
//     removeFromCart(state, action) {
//       state.items = state.items.filter(i => i.id !== action.payload);
//     },

    
//     clearCart(state) {
//       state.items = [];
//     },
//   },
// });


// export const { addToCart, increaseQty, decreaseQty, removeFromCart, clearCart } =
//   cartSlice.actions;

// export default cartSlice.reducer;

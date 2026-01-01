import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder(state, action) {
      state.push({
        id: Date.now(),
        ...action.payload,
        date: new Date().toLocaleString(),
      });
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;




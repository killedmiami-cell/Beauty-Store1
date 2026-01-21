import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const res = await fetch(
      "https://6943c5ae7dd335f4c35e0db0.mockapi.io/products"
    );
    return res.json();
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    status: "idle",
    likes: {},
  },
  reducers: {
    toggleLike(state, action) {
      const id = action.payload;
      state.likes[id] = !state.likes[id];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.list = action.payload;
      });
  },
});

export const { toggleLike } = productsSlice.actions;
export default productsSlice.reducer;












import { createSlice } from "@reduxjs/toolkit";

const likesSlice = createSlice({
  name: "likes",
  initialState: {
    items: [],
  },
  reducers: {
    toggleLike(state, action) {
      const exists = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (exists) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleLike } = likesSlice.actions;
export default likesSlice.reducer;



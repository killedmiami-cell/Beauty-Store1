import { createSlice } from "@reduxjs/toolkit";

// Получаем сохранённые лайки из localStorage
const savedLikes = JSON.parse(localStorage.getItem("likes")) || [];

const likesSlice = createSlice({
  name: "likes",
  initialState: {
    items: savedLikes,
  },
  reducers: {
    toggleLike(state, action) {
      const exists = state.items.find((item) => item.id === action.payload.id);

      if (exists) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }

      // Сохраняем в localStorage после изменения
      localStorage.setItem("likes", JSON.stringify(state.items));
    },
    clearLikes(state) {
      state.items = [];
      localStorage.removeItem("likes");
    },
  },
});

export const { toggleLike, clearLikes } = likesSlice.actions;
export default likesSlice.reducer;










// import { createSlice } from "@reduxjs/toolkit";

// const likesSlice = createSlice({
//   name: "likes",
//   initialState: { items: [] },
//   reducers: {
//     toggleLike(state, action) {
//       const exists = state.items.find(i => i.id === action.payload.id);
//       if (exists) state.items = state.items.filter(i => i.id !== action.payload.id);
//       else state.items.push(action.payload);
//     },
//   },
// });

// export const { toggleLike } = likesSlice.actions;
// export default likesSlice.reducer;

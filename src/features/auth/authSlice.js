import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    isAdmin: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;

      
      if (action.payload.email === "admin@gmail.com") {
        state.isAdmin = true;
      } else {
    state.isAdmin = false;
  }
    },
    logout: (state) => {
      state.isAuth = false;
      state.isAdmin = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

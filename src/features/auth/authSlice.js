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














// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     isAdmin: localStorage.getItem("admin") === "true",
//   },
//   reducers: {
//     login(state, action) {
//       const { login, password } = action.payload;
//       if (login === "admin" && password === "12345") {
//         state.isAdmin = true;
//         localStorage.setItem("admin", "true");
//       } else {
//         alert("Неверный логин или пароль");
//       }
//     },
//     logout(state) {
//       state.isAdmin = false;
//       localStorage.removeItem("admin");
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;













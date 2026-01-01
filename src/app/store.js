import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import likesReducer from "../features/likes/likesSlice";
import ordersReducer from "../features/orders/ordersSlice";
import usersReducer from "../features/users/usersSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    likes: likesReducer,
    orders: ordersReducer,
    users: usersReducer,
    auth: authReducer,
    
  },
});

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import CartUiSlice from "./shopping-cart/cartUiSlice";
const store = configureStore({
  reducer:{
    cart : cartSlice.reducer,
    cartUi : CartUiSlice.reducer
  }
})
export default store;
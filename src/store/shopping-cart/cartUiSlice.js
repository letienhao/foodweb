import React from "react";
import { createSlice ,current} from "@reduxjs/toolkit";

const CartUiSlice = createSlice({
    name : 'cartUi',
    initialState : {cartVisible: false},
    reducers:{
       toggle(state) {
          state.cartVisible = !state.cartVisible;
       }
    }
})
export const CartUiActions = CartUiSlice.actions
export default CartUiSlice

import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const exitingItem = state.cartItems.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!exitingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image01
        })
      } else {
        exitingItem.quantity++;
        exitingItem.totalPrice = +exitingItem.totalPrice + +newItem.price
      }
      state.totalAmount = state.cartItems.reduce((total, item) => {
        console.log(item.totalPrice , item.quantity)
        return total + Number(item.price * item.quantity)
      }, 0)
    },
    removeItem(state, action) {
      const idRemove = action.payload.id
      const exitingItem = state.cartItems.find((item) => item.id === idRemove)
      state.totalQuantity--
      if (exitingItem.quantity  === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== idRemove)
      }
      else {
        exitingItem.quantity--
        exitingItem.totalPrice = +exitingItem.totalPrice - +exitingItem.price
      }
      state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + +(item.price * item.quantity)
      },0)
    },
    deleteItem(state, action) {
      const id = action.payload.id
      const exitingItem = state.cartItems.find((item)=> item.id === id)
      state.totalQuantity -= exitingItem.quantity
      if(exitingItem){
        state.cartItems = state.cartItems.filter((item)=> item.id !== id)
      }
      state.totalAmount = state.cartItems.reduce((total,value)=>{
        return total + Number(value.price * value.quantity)
      },0)
    }
  }
})
export const cartActions = cartSlice.actions;
export default cartSlice;
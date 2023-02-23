import React from 'react'
import { Routes , Route,Navigate} from 'react-router-dom'
import {Home,Cart,AllFoods,FoodDetail,Login,Register,Checkout,Contact} from '../pages'
const Routers = () => {
  return (
   <Routes>
      <Route path="/" element={<Navigate to='/home'/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/foods" element={<AllFoods/>} />
      <Route path="/foods/:id" element={<FoodDetail/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/contact" element={<Contact/>} />
   </Routes>
  )
}

export default Routers
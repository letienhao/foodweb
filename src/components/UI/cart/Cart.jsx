import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import '../../../styles/cart.css'
import { useDispatch, useSelector } from "react-redux";
import { CartUiActions } from "../../../store/shopping-cart/cartUiSlice";
const Cart = () => {
  const dispatch = useDispatch()
  const toggleCloseCart = ()=>{
      dispatch(CartUiActions.toggle())
  }
  const cartProducts = useSelector((item)=>item.cart.cartItems)
  const totalAmount = useSelector((item)=> item.cart.totalAmount)
  return (
    <div className="cart__container">
      <ListGroup className="cart">
         <div className="cart__close" onClick={toggleCloseCart}>
          <span><i className="ri-close-fill"></i></span>
         </div>
         <div className="cart__item-list">
          {cartProducts?.length === 0 ? <h6 className="text-center mt-5">No item add to the cart</h6> : (
             cartProducts?.map((item,index)=>(
               <CartItem item={item} key={index} />
             ))
          ) }
         </div>
         <div className="cart__bottom d-flex align-items-center justify-content-between">
            <h6>Subtotal amount : <span>${totalAmount}</span></h6>
            <button><Link to='/checkout'>CheckOut</Link></button>
         </div>
      </ListGroup>
    </div>
  );
};
export default Cart;

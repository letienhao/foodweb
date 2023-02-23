import { ListGroupItem } from "reactstrap";
import '../../../styles/cart-item.css'
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({item}) => {
  console.log(item)
  const {id,title,price, image, quantity,totalPrice} = item;
  const dispatch = useDispatch()
  const increase = ()=>{
     dispatch(cartActions.addItem({
      id, 
      title,
      price,
      image,
     }))
  }
  const decrease = (id)=>{
    dispatch(cartActions.removeItem({id}))
  }
  const deleteItem = (id)=>{
    dispatch(cartActions.deleteItem({id}))
  }
  return (
    <ListGroupItem className="border-0 cart__items">
      <div className="cart__item-info d-flex gap-2">
        <img src={image} alt=""  />
        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
           <div>
             <h6 className="cart__product-title ">{title}</h6>
             <p className="cart__product-price d-flex align-items-center gap-5" >{quantity}x <span>${totalPrice}</span></p>
             <div className="d-flex align-items-center justify-content-between gap-3 increase__decrease-btn rounded-2 " >
               <span className="btn__increase"  onClick={increase} ><i className="ri-add-line"></i></span>
               <span className="quantity">{quantity}</span>
               <span className="btn__decrease " onClick={()=>decrease(id)}><i className="ri-subtract-line"></i></span>
             </div>
           </div>
           <span className="delete__btn" onClick={()=>deleteItem(id)} ><i className="ri-close-line"></i></span>
        </div>
      </div>
    </ListGroupItem>
  );
};
export default CartItem;

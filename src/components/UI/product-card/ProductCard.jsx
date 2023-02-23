import React from 'react'
import { Link } from 'react-router-dom'
import productImg from '../../../assets/images/product_2.1.jpg'
import { useDispatch } from "react-redux";
import '../../../styles/productCard.css'
import { cartActions } from '../../../store/shopping-cart/cartSlice';
const ProductCard = (props) => {
  const {id,title,image01,price } = props.item
  const dispatch = useDispatch()
  const addToCart = ()=>{
     dispatch(cartActions.addItem({
      id, 
      title,
      price,
      image01,
     }))
  }
  return (
   <div className="product__item mt-5">
      <div className="product__img mb-2 text-center">
          <img src={image01} alt="productimg" className='w-50' />
      </div>
      <div className="product__content text-center">
        <h5><Link to={`/foods/${id}`}>{title}</Link></h5> 
        <div className="d-flex align-items-center justify-content-between gap-3">
           <span className="product__price">${price}</span>
           <button className='addToCart__btn' onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
   </div>
  )
}

export default ProductCard
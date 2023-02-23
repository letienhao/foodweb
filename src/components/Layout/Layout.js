import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'
import Cart from '../UI/cart/Cart'
import { useSelector } from 'react-redux'
const Layout = () => {
  const cartVisible = useSelector((item)=> item.cartUi.cartVisible)
  return (
    <div>
        <Header/>
          <div>
            {
              cartVisible ? <Cart/> : ""
            }
            <Routers/>
          </div>
         <Footer/> 
    </div>
  )
}
export default Layout
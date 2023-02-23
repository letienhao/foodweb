import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/cart-page.css";
const Cart = () => {
  const cart = useSelector((item) => item.cart.cartItems);
  const totalMoneyCart = useSelector((item) => item.cart.totalAmount);
  return (
    <Helmet title="cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cart.length === 0 ? (
                <h5 className="text-center"> Your cart is empty </h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center">Image</th>
                      <th className="text-center">Product Title</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                      {cart.map((item, index) => (
                        <Tr item={item} key={index} />
                      ))}
                  </tbody>
                </table>
              )}
              <div>
                 <h4>Tổng tiền: ${totalMoneyCart} </h4>
                 <p>Thuế và phí sẽ được tính khi thanh toán </p>
                 <div  className='d-flex gap-4' >
                 <button className="addToCart__btn " ><Link className="mb-2" to='/foods'>Tiếp tục mua sắm <i className="ri-google-play-fill"></i></Link></button>
                    <button className="addToCart__btn" ><Link className="mb-2" to='/checkout'>Thanh Toán <i class="ri-money-dollar-box-fill"></i></Link></button>
                 </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
const Tr = (props) => {
  const { id, image, title, price, quantity } = props.item;
  const dispatch = useDispatch();
  const deleteProductRow = () => {
    dispatch(cartActions.deleteItem({ id }));
  };
  return (
      <tr>
        <td className="text-center cart__img-box">
          <img src={image} alt={title} />
        </td>
        <td className="text-center">{title}</td>
        <td className="text-center">${price}</td>
        <td className="text-center">{quantity}</td>
        <td
          className="text-center cart__item-delete"
          onClick={deleteProductRow}
        >
          <i className="ri-delete-bin-line"></i>
        </td>
      </tr>
  );
};

export default Cart;

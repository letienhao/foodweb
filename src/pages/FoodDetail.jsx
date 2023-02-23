import React, { useEffect, useState ,useRef} from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import productImg from "../assets/images/product_01.1.jpg";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/foodDetail.css";
import { useParams } from "react-router-dom";
import products from "../assets/fake-data/products.js";
import ProductCart from "../components/UI/product-card/ProductCard";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
const FoodDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const { price, title, desc, category, image01 } = product;
  const [imageProduct, setImageProduct] = useState(product.image01);
  const [tabs, setTabs] = useState("Desc");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [prevMess, setPrevMess] = useState("");
  const productLated = products.filter((item) => item.category === category);
  const [dataMessages, setDataMessages] = useState([]);
  const dispatch = useDispatch();
  const inputRef = useRef()
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: name,
      email: email,
      prevMess: prevMess,
    };
    setDataMessages((p) => [...p, obj]);
    setName('')
    setEmail('');
    setPrevMess('');
    inputRef.current.focus()
  };
  useEffect(() => {
    setImageProduct(product.image01);
  }, [product]);
  return (
    <Helmet title="Product-Detail">
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product_images">
                <div
                  className="img_item"
                  onClick={() => setImageProduct(product.image01)}
                >
                  <img src={product.image01} alt="img" className="w-50" />
                </div>
                <div
                  className="img_item"
                  onClick={() => setImageProduct(product.image02)}
                >
                  <img src={product.image02} alt="img" className="w-50" />
                </div>{" "}
                <div
                  className="img_item"
                  onClick={() => setImageProduct(product.image03)}
                >
                  <img src={product.image03} alt="img" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="product_images-main">
                <div className="img_item mt-4">
                  <img src={imageProduct} alt="img" className="w-100" />
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title">{title}</h2>
                <span className="product__price">Price : ${price}</span>
                <p>
                  Category : <span>{category}</span>
                </p>
                <button className="addToCart__btn" onClick={addToCart}>
                  Add to cart
                </button>
              </div>
            </Col>
            <Col lg="12" md="12">
              <div className="tabs d-flex align-items-center gap-4 ">
                <h6
                  className={` ${tabs === "Desc" ? "tab__active" : ""} `}
                  onClick={() => setTabs("Desc")}
                >
                  Description
                </h6>
                <h6
                  className={` ${tabs === "rev" ? "tab__active" : ""} `}
                  onClick={() => setTabs("rev")}
                >
                  Review
                </h6>
              </div>
              {tabs === "Desc" ? (
                <div className="content_tab">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  {dataMessages.map((item) => (
                    <div className="review">
                      <p className="user__name mb-0">{item.name}</p>
                      <p className="user__email ">{item.email}</p>
                      <p className="feedback__text">{item.prevMess}</p>
                    </div>
                  ))}

                  <div className="tab__form">
                    <form className="form" onSubmit={onSubmit}>
                      <div className="form_group ">
                        <input
                        ref={inputRef}
                          type="text"
                          placeholder="Enter your name"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          required

                        />
                      </div>
                      <div className="form_group ">
                        <input
                          type="text"
                          placeholder="Enter your name"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                        />
                      </div>
                      <div className="form_group ">
                        <textarea
                          rows="8"
                          type="text"
                          placeholder="Enter your name"
                          onChange={(e) => setPrevMess(e.target.value)}
                          value={prevMess}
                          required
                        />
                      </div>
                      <button className="addToCart__btn">Submit</button>
                    </form>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mb-5">
              <h2>You might also like</h2>
            </Col>
            {productLated.map((item) => (
              <Col lg="3" md="4" sm="4">
                <ProductCart item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetail;

import React, { useState, useEffect } from "react";
import Helment from "../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import { Link } from "react-router-dom";
import "../styles/hero-secsion.css";
import Category from "../components/UI/category/Category";
import "../styles/home.css";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-03.png";
import featureImg03 from "../assets/images/service-03.png";
import products from "../assets/fake-data/products.js";
import foodCategory01 from "../assets/images/hamburger.png";
import foodCategory02 from "../assets/images/pizza.png";
import foodCategory03 from "../assets/images/bread.png";
import ProductCard from "../components/UI/product-card/ProductCard";
import whyImg from "../assets/images/location.png";

import shareImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider";



const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur, ",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur, ",
  },
  {
    title: "Easy Pick",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur, ",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProduct, setAllProduct] = useState(products);
  const [pizzaHot, setPizzaHot] = useState([]);

  useEffect(() => {
    const listPizza = allProduct.filter((item) => item.category === "Pizza");
    const sliceHot = listPizza.slice(0, 4);
    setPizzaHot(sliceHot);
  }, []);
  useEffect(() => {
    if (category === "ALL") {
      setAllProduct(products);
    }
    if (category === "PIZZA") {
      const category = products.filter((item) => item.category === "Pizza");
      setAllProduct(category);
    }
    if (category === "BURGER") {
      const category = products.filter((item) => item.category === "Burger");
      setAllProduct(category);
    }
    if (category === "BREAD") {
      const category = products.filter((item) => item.category === "Bread");
      setAllProduct(category);
    }
  }, [category]);
  return (
    <Helment title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3 hero__title">Easy way to make an order</h5>
                <h1 className="mb-4">
                  <span>Hungry?</span>Just wait food at<span> your door</span>
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima nobis maxime, libero corporis magnam maiores dolor ipsa
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4 ">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order Now <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/foods">See a foods</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-4">
                  <p>
                    <span className="shipping__icons d-flex align-items-center gap-2">
                      <i className="ri-car-line"></i>No shipping charges
                    </span>
                  </p>
                  <p>
                    <span className="d-flex align-items-center gap-2">
                      <i className="ri-shield-check-line"></i>100% secure
                      checkout
                    </span>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="heroImg" className="w-100" />
              </div>
            </Col>
          </Row>
          <section className="pt-0">
            <Category />
          </section>
          <section>
            <Container>
              <Row>
                <Col lg="12" className="text-center">
                  <h5 className="feature__subtitle mb-4">What we serve</h5>
                  <h2 className="feature__title">Just sit back at home</h2>
                  <h2 className="feature__title">
                    we will <span>take care</span>
                  </h2>
                  <p className="mb-1 mt-4 feature__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, architecto. Reiciendis nulla repellat, atque nemo
                  </p>
                  <p>
                    officiis possimus est cumque aspernatur, labore eos, amet
                    ipsam pariatur minima sed. Voluptatum, eos!{" "}
                  </p>
                </Col>
                {featureData.map((item, idx) => (
                  <Col lg="4" md="4" key={idx} className="mt-5">
                    <div className="feature__item text-center px-2 py-3">
                      <img src={item.imgUrl} alt="" className="w-25 mb-3" />
                      <h5 className=" fw-bold mb-3">{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Pupular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center">
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-3 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategory01} alt="" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-3 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategory02} alt="" />
                  Pizza
                </button>{" "}
                <button
                  className={`d-flex align-items-center gap-3 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategory03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {allProduct.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-10">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div>
                <img src={whyImg} alt="why__treat-mean" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="why__treat-title">
                <h3>
                  Why <span>Tast Treat?</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  deleniti animi eum a provident praesentium alias expedita
                  sequi sit?
                </p>
              </div>
              <ListGroup className="">
                <ListGroupItem className="choose__title-check border-0 ps-0">
                  <p className="d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i>
                    Fresh and tasty foods
                  </p>
                  <p className="mt-2 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    aliquam at?
                  </p>
                </ListGroupItem>
                <ListGroupItem className=" choose__title-check border-0 ps-0">
                  <p className="d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i>
                    Quality support
                  </p>
                  <p className="mt-2 d-flex align-items-center gap-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    aliquam at?
                  </p>
                </ListGroupItem>
                <ListGroupItem className=" choose__title-check border-0 ps-0">
                  <p className="d-flex align-items-center gap-2">
                    <i className=" ri-checkbox-circle-line"></i>
                    Order from any location
                  </p>
                  <p className="mt-2 d-flex align-items-center gap-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    aliquam at?
                  </p>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Hot Pizza</h2>
            </Col>
          </Row>
          <Row>
            {pizzaHot.map((item, idex) => (
              <Col lg="3" md="4">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="text-start">
              <div className="testimonial__title">
                <h4>Testimonial</h4>
              </div>
              <div className="testimonial__subtitle mt-4">
                <h3>
                  What our <span>customer</span> are saying
                </h3>
                <p className="testimonial__sub mt-3 " >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  corporis ipsam maiores. Praesentium aliquid error animi.
                </p>
              </div>
              <TestimonialSlider/>
            </Col>
            <Col lg="6" md="6" className="text-center">
              <img src={shareImg} alt="netword_img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helment>
  );
};

export default Home;

import React from "react";
import Slider from "react-slick";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
const TestimonialSlider = () => {
  const settings = {
    dots: true,
    Infinity: true,
    speed: 3000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="">
          <span className="info__desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quam
            fugit aliquid fugiat deleniti at similique alias odio?
          </span>
          <div className="d-flex align-item-center gap-3">
          <img src={ava01} alt="ava01" className=" w-25 rounded" />
          <p className="mt-3">Steven</p>
          </div>
      </div>
      <div className="">
          <span className="info__desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quam
            fugit aliquid fugiat deleniti at similique alias odio?
          </span>
          <div className="d-flex align-item-center gap-3">
          <img src={ava02} alt="ava01" className="w-25 border-2" />
          <p className="mt-3">Balance</p>
          </div>
      </div>
      <div className="">
          <span className="info__desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quam
            fugit aliquid fugiat deleniti at similique alias odio?
          </span>
          <div className="d-flex align-item-center gap-3">
          <img src={ava03} alt="ava01" className="w-25 border-2" />
          <p className="mt-3">Antony</p>
          </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;

import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";
const AllFoods = () => {
  const [searchFoods, setSearchFood] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const searchFood =  
  products.filter((item) => {
    if (searchFoods.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchFoods.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });
  const productPerpage = 8;
  const visitedPage = pageNumber * productPerpage;

  const displayPage = searchFood.slice(visitedPage, visitedPage + productPerpage);

  const pageCount = Math.ceil(searchFood.length / productPerpage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Food" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="search__widget d-flex align-items-center justify-content-between w-50">
                <input
                  type="text"
                  placeholder="I'm looking for..."
                  onChange={(e) => setSearchFood(e.target.value)}
                />
                <span className="text-end">
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="sorting__widget mb-5 text-end">
                <select className="w-50">
                  <option value="ascending">Alphabetically A-Z</option>
                  <option value="descending">Alphabetically Z-A</option>
                  <option value="high-price">Hight - Low</option>
                  <option value="low-price">Low - High</option>
                </select>
              </div>
            </Col>
            {
              displayPage.map((item) => (
                <Col lg="3" md="4">
                  <ProductCard item={item} />
                </Col>
              ))}
          </Row>
          <ReactPaginate
            breakLabel="..."
            nextLabel={"next >"}
            onPageChange={changePage}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={"< previous"}
            renderOnZeroPageCount={null}
            containerClassName="paginationBtn"
          />
        </Container>
      </section>
    </Helmet>
  );
};
export default AllFoods;

import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                iusto quae labore necessitatibus odio repellendus consequuntur
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h4>Delivery Time</h4>
            <ListGroup className="delivery__time__list">
              <ListGroupItem className="delivery__time__items border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time__items border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__contact">Contact</h5>
            <ListGroup>
              <ListGroupItem className=" contact__info border-0 ps-0">
                <span className="location">
                  Location: Trung chánh, Hóc môn, Hồ Chí Minh
                </span>
              </ListGroupItem>
              <ListGroupItem className=" contact__info border-0 ps-0">
                <span className="phone_number">Phone: 0986430615</span>
              </ListGroupItem>
              <ListGroupItem className=" contact__info border-0 ps-0">
                <span className="gmail__contact">
                  Gmail: letienhao1004@gmail.com
                </span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="letter">NewsLetter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newLetters">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
          <Row className="mt-5 d-flex ">
            <Col lg="6" md="6" className="copyright__text">
              <p>
                Copyright &copy; - 2023, Website made HaoLe. All Rights Reserved
              </p>
            </Col>
            <Col lg="6" md="6" className="">
              <div className="social__links d-flex  align-items-center gap-4 justify-content-end">
                <p>Follow</p>
                <span>
                  <Link to="http://www.facebook.com">
                    <i className="ri-facebook-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="http://www.facebook.com">
                    <i className="ri-github-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="http://www.facebook.com">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/checkout.css";
const Checkout = () => {
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="form__checkout">
                <form action="" className="form__group">
                  <div className="form__Content d-flex align-items-center  justify-content-center gap-4 mb-3 ">
                    <div>Name</div>
                    <input type="text" />
                  </div>
                  <div className="form__Content d-flex align-items-center  justify-content-center gap-4 mb-3">
                    <div>Email</div>
                    <input type="text" />
                  </div>
                  <div className="form__Content d-flex align-items-center  justify-content-center gap-4 mb-3">
                    <div>Phone Number</div>
                    <input type="number" />
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;

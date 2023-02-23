import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../styles/common-secction.css";
const CommonSection = (props) => {
  return (
    <section className="common__section mb-3">
      <Container>
        <h2 className="text-start  common__title">{props.title}</h2>
      </Container>
    </section>
  );
};
export default CommonSection;

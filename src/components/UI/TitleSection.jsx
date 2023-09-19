import React from "react";
import { Col } from "reactstrap";
import "../../styles/titleSection.css";
const TitleSection = ({ title }) => {
  return (
    <Col lg="12" className="title_section_home text-center  py-0">
      <h2 className="section_title">{title}</h2>
    </Col>
  );
};

export default TitleSection;

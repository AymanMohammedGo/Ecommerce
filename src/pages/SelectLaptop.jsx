import React, { useState } from "react";
import SurveyComponent from "../components/UI/SurveyComponent";
import Helmet from "../components/Helmet/Helmet";
import "../styles/selectLaptop.css";
import { motion } from "framer-motion";
import pc1 from "../assets/images/pc1.jpg";
import laptop from "../assets/images/laptop.jpg";
import { Container, Row, Col } from "reactstrap";
import SelectPc from "../components/UI/SelectPc";
const SelectLaptop = () => {
  const [showLaptop, setShowLaptop] = useState(false);
  const [showPc, setShowPc] = useState(false);
  const resetPage = () => {
    setShowPc(false);
    setShowLaptop(false);
  };
  return (
    <Helmet title="Tools">
      <section className="p-0">
        {!showLaptop && !showPc && (
          <>
            <Container>
              <Row className="d-flex align-items-center justify-content-center">
                <Col lg="4" className=" flex">
                  <motion.img
                    whileHover={{ scale: 0.9 }}
                    src={laptop}
                    onClick={() => {
                      setShowLaptop(true);
                    }}
                  />
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="shop_btn auth_btn w-100  mb-4 mt-0 p-3"
                    onClick={() => {
                      setShowLaptop(true);
                    }}
                  >
                    نساعدك في اختيار حاسوبك المحمول
                  </motion.button>
                </Col>
                <Col lg="4" className=" flex ">
                  <motion.img
                    whileHover={{ scale: 0.9 }}
                    src={pc1}
                    onClick={() => {
                      setShowPc(true);
                    }}
                  />
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="shop_btn auth_btn w-100  mb-4 mt-0 p-3 "
                    onClick={() => {
                      setShowPc(true);
                    }}
                  >
                    نساعدك في تجميع حاسوبك المكتبي
                  </motion.button>
                </Col>
              </Row>
            </Container>
          </>
        )}

        {showLaptop && <SurveyComponent reset={resetPage} />}
        {showPc && <SelectPc reset={resetPage} />}
      </section>
    </Helmet>
  );
};

export default SelectLaptop;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import "./services.css";

const serviceData = [
  {
    icon: "ri-truck-line",
    title: "توصيل مجاني",
    subtitle: "توصيل المنتجات بشكل مجاني ضمن المحافظة",
    bg: "#fdefe6",
  },
  {
    icon: "ri-refresh-line",
    title: "إعادة المنتجات",
    subtitle: "يمكن إرجاع المنتجات في غضون يومين من الاستلام",
    bg: "#ceebe9",
  },
  {
    icon: "ri-secure-payment-line",
    title: "جودة واسعار منافسة",
    subtitle: "نقدم منتجات ذات معاير عالية واسعار مناسبة",
    bg: "#e2f2b2",
  },
  {
    icon: "ri-exchange-dollar-line",
    title: "دفع عند الاستلام",
    subtitle: "لن تدفع ثمن طلبك الا عند تسلمك له ومعاينة المنتج",
    bg: "#d6e5fb",
  },
];

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="services_item"
                style={{ background: `${item.bg}` }}
              >
                <span>
                  <i class={item.icon}></i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;

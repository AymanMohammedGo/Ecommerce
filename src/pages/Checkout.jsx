import React from "react";
import { Container, Col, Row, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";
const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing_form">
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your name"></input>
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="email" placeholder="Enter your email"></input>
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="number" placeholder="Phone number"></input>
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Street address"></input>
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="City"></input>
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Postal code"></input>
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Country"></input>
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout_cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping:
                    <br />
                    Free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Total cost: <span>${totalAmount}</span>
                </h4>
                <button className="shop_btn auth_btn w-100 ">
                  Place an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;

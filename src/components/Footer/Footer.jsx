import React from "react";
import "./fooder.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <div>
                <h1 className="text-white">Multimart</h1>
              </div>
            </div>
            <p className="footer_text mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              perspiciatis, modi enim eveniet voluptatem fugit recusandae vel
              ex? Voluptatem odit neque ab accusamus quisquam numquam vero
              laudantium voluptatum, eum cum?
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phone</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modren Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watchs</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Contact</h4>
              <ListGroup className=" footer_contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gab-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>123 zindaBazar, Sylhet, Bangladesh</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gab-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+0881234567890</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gab-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>example123@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer_copyright">
              Copyright {year} developed by Muhibur Raham.All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

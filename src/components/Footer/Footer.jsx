import React from "react";
import "./fooder.css";
import logo from "../../assets/images/logo_footer.png";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo_Footer">
              <img src={logo} alt="" />
            </div>
            <p className="footer_text mt-4">
              نحنُ شركة رائدة في مجال بيع الحواسيب المحمولة والمكتبية. تضمُ
              منتجاتنا مجموعة واسعة من أنظمة الحواسيب المكتبية وملحقاتها،
              والألعاب، والحواسيب المحمولة، ومنتجات الشبكات، والمستلزمات
              المكتبية، والإلكترونيات الأخرى.
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">تصنيفات الموقع</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="px-0 pb-2 border-0">
                  <Link to="/shop/categary/الاجهزة%20المحمولة%20وملحقاتها/products/اجهزة%20الكمبيوتر%20المحمول">
                    حواسيب محمولة
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 pb-2 border-0">
                  <Link to="/shop/categary/مكونات%20الكمبيوتر%20المكتبي">
                    مكونات الكمبيوتر المكتبي
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 pb-2 border-0">
                  <Link to="/shop/categary/مكونات%20الكمبيوتر%20المكتبي/products/بطاقات%20الرسوميات">
                    كروت شاشة
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="px-0 pb-2 border-0">
                  <Link to="/shop/categary/مكونات%20الكمبيوتر%20المكتبي/products/ذواكر%20الأجهزة%20المكتبية%20(RAM)">
                    ذواكر
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 pb-2 border-0">
                  <Link to="/shop/categary/مكونات%20الكمبيوتر%20المكتبي/products/شاشة%20الكمبيوتر">
                    شاشات
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">روابط سريعة</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="px-0 pb-2 border-0">
                  <Link to="/shop">المنتجات</Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 pb-2 border-0">
                  <Link to="/cart">المشتريات</Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 pb-2 border-0">
                  <Link to="/login">تسجيل دخول</Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 pb-2 border-0">
                  <Link to="/signup">انشاء حساب</Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 pb-2 border-0">
                  <Link to="/contact">اتصل بنا</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">تواصل معنا:</h4>
              <ListGroup className=" footer_contact">
                <ListGroupItem className="px-0 pb-2 border-0 d-flex align-items-center gab-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>سوريا - حلب - الجميلية </p>
                </ListGroupItem>
                <ListGroupItem className="px-0 pb-2 border-0 d-flex align-items-center gab-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>544 542 993 963+</p>
                </ListGroupItem>
                <ListGroupItem className="px-0 pb-2 border-0 d-flex align-items-center gab-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>045 263 947 963+</p>
                </ListGroupItem>

                <ListGroupItem className="px-0 pb-2 border-0 d-flex align-items-center gab-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>CompanyAM@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer_copyright">
              جميع الحقوق محفوظة {year} من تطوير فريقنا المميز.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [show, setShow] = useState("");
  useEffect(() => {
    cartItems.length !== 0 && setShow("/checkout");
  }, [cartItems]);

  return (
    <Helmet title="Cart">
      <section>
        <Container>
          <div className="fs-3 mb-5">المشتريات :</div>
          <Row>
            <Col lg="8">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">لا يوجد مشتريات.</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>صورة المنتج</th>
                      <th>اسم المنتج</th>
                      <th>السعر</th>
                      <th>العدد</th>
                      <th>حذف</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg="4">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  المجموع الكلي :
                  <span className="fs-4 fw-bold">
                    {parseInt(totalAmount).toLocaleString()}
                    <span className="fs-6 fw-bold"> ل.س</span>
                  </span>
                </h6>
              </div>
              {/* <p className="fs-6 mt-2">
                taxes and shipping will calculate in checkout
              </p> */}
              <div>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="shop_btn w-100 "
                >
                  <Link to={show}>اكمال عملية الشراء</Link>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="shop_btn w-100 mt-3 black"
                  onClick={() => {
                    dispatch(cartActions.deleteAll());
                  }}
                >
                  حذف كل المشتريات
                </motion.button>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="shop_btn w-100 mt-3 black"
                >
                  <Link to="/shop">متابعة التسوق</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price}ل.س</td>
      <td>{item.quantity}قطعة</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={deleteProduct}
          class="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};
export default Cart;

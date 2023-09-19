import React, { useEffect } from "react";
import "../styles/order.css";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { motion } from "framer-motion";
import { useState } from "react";
import { db } from "../firebase.confgi";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import Spinner from "../components/UI/Spinner";
import { useParams } from "react-router-dom";
const Order = () => {
  const [orders, setOrders] = useState({});

  const userId = useParams();

  useEffect(() => {
    const user = userId.id;
    const getOrders = async () => {
      const ord = [];

      const colRef = collection(db, "users", user, "orders");
      try {
        const docsSnap = await getDocs(colRef);
        docsSnap.forEach((doc) => {
          ord.push(doc.data());
        });
      } catch {
        console.log("خطا بجلب الطلبات");
      }
      setOrders(ord);
    };

    getOrders();
  }, []);

  return (
    <Helmet title="Orders">
      {/* <CommonSection title="تتبع الطلبات" /> */}
      <section>
        <Container>
          <Row>
            <Col>
              <div className="fs-3 mb-5">طلباتي :</div>
              {orders.length > 0 ? (
                orders.map((items) => (
                  <div>
                    <div className="order">
                      <div>
                        <div className="fs-5">
                          عدد القطع:
                          <div className="fs-5 my-2">
                            {parseInt(items.totalQty).toLocaleString()}
                          </div>
                        </div>
                        <div className="fs-5">
                          السعر الكلي:
                          <div className="fs-5 my-2">
                            {parseInt(items.totalAmount).toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2">اسم المستلم : {items.Name}</div>
                        <div className="mb-2">حساب الايميل : {items.Email}</div>
                        <div>
                          <div className="mb-2">
                            رقم الموبايل : {items.Phone}
                          </div>
                          <div className="mb-2">
                            رقم الهاتف : {items.Phone1}
                          </div>
                        </div>
                        <div className="mb-2">المحافظة : {items.City}</div>
                      </div>
                      <div>
                        <button className="shop_btn auth_btn work w-100 mb-3 mt-0">
                          {items.typeOrder}
                        </button>
                        <button className="shop_btn auth_btn work w-100 mb-3 mt-0">
                          {items.state}
                        </button>

                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          className="shop_btn auth_btn work1 w-100 mb-3 mt-0"
                        >
                          {items.Address} / {items.Notes}
                        </motion.button>
                      </div>
                    </div>
                    <Row className="my-5">
                      <table className={`table bordered `}>
                        <thead>
                          <tr>
                            <th>صورة المنتج</th>
                            <th>اسم المنتج</th>
                            <th>السعر</th>
                            <th>العدد</th>
                            <th>المجموع النهائي</th>
                          </tr>
                        </thead>
                        <tbody>
                          {items.cartItems.map((item) => (
                            <tr>
                              <td>
                                <img src={item.imgUrl} alt="" />
                              </td>
                              <td>{item.productName}</td>
                              <td>{parseInt(item.price).toLocaleString()}</td>
                              <td>
                                {parseInt(item.quantity).toLocaleString()}
                              </td>
                              <td>
                                {parseInt(item.totalPrice).toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </Row>
                  </div>
                ))
              ) : orders.length === 0 ? (
                <div className="NofoundOrder">لايوجد طلبات حاليا</div>
              ) : (
                <Spinner />
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Order;

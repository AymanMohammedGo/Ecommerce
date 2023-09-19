import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/dashboard.css";
import logo from "../assets/images/logo1-01.png";
import useGetsData from "../custom-hooks/useGetData";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.confgi";

const Dashboard = () => {
  const { data: products } = useGetsData("products");
  const { data: users } = useGetsData("users");

  const Total = products.reduce((sum, item) => sum + parseInt(item.price), 0);

  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const allOrders = [];
      for (const user of users) {
        try {
          const colRef = collection(db, "users", user.uid, "orders");
          const docsSnap = await getDocs(colRef);
          docsSnap.forEach((doc) => {
            allOrders.push(doc.data());
          });
        } catch (error) {
          console.log("خطا بجلب الطلبات", error);
        }
      }
      setOrderData(allOrders);
    };
    fetchOrders();
  }, [users]);

  const TotalSales = orderData.reduce(
    (sum, item) => sum + parseInt(item.totalAmount),
    0
  );

  return (
    <section>
      <Container>
        <Row>
          <Col className="lg-3">
            <div className="revenue_box">
              <h5>اجمالي سعر المنتجات</h5>
              <span>
                {Total.toLocaleString()}
                <span className="fs-6">ل.س</span>
              </span>
            </div>
          </Col>
          <Col className="lg-3">
            <div className="order_box">
              <h5>اجمالي المبيعات</h5>
              <span>
                {TotalSales.toLocaleString()}
                <span className="fs-6">ل.س</span>
              </span>
            </div>
          </Col>

          <Col className="lg-3">
            <div className="products_box">
              <h5>عدد المنتجات</h5>
              <span>{products.length}</span>
            </div>
          </Col>
          <Col className="lg-3">
            <div className="users_box">
              <h5>عدد المستخدمين </h5>
              <span>{users.length}</span>
            </div>
          </Col>
        </Row>
        <Row
          className="mt-5     d-flex
    align-items-center;
    justify-content-center"
        >
          <img className="w-50" src={logo} alt="" />
        </Row>
      </Container>
    </section>
  );
};

export default Dashboard;

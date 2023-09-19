import React from "react";
import { Container, Row, Col } from "reactstrap";
import { db } from "../firebase.confgi";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import Spinner from "../components/UI/Spinner";
import useGetData from "../custom-hooks/useGetData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const OrdersAdmin = () => {
  const [show, setShow] = useState(true);
  const [detailsOrders, setDetailsOrders] = useState();
  const [orderData, setOrderData] = useState([]);
  const { data: users, loading } = useGetData("users");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      const allOrders = [];
      for (const user of users) {
        try {
          const colRef = collection(db, "users", user.uid, "orders");
          const docsSnap = await getDocs(colRef);

          docsSnap.forEach((doc) => {
            const documentID = doc.data();
            documentID.ID = doc.id;

            allOrders.push(documentID);
          });
        } catch (error) {
          console.log("خطا بجلب الطلبات", error);
        }
      }
      setOrderData(allOrders);
    };
    fetchOrders();
  }, [users, update]);

  return (
    <section>
      <Container>
        {show ? (
          <Row>
            <h4 className="mb-5">سجل الطلبات :</h4>
            <Col lg="12">
              <table className="table table align-middle">
                <thead>
                  <tr>
                    <th>اسم المستلم </th>
                    <th>الايميل</th>
                    <th>الهاتف</th>
                    <th>المدينة</th>
                    <th>اجمالي الطلب</th>
                    <th>حالة الطلب</th>
                    <th>نوع الدفع</th>
                    <th>العمليات</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <Spinner />
                  ) : (
                    orderData.map((item, index) => (
                      <tr key={item.id}>
                        <td>{item.Name}</td>
                        <td>{item.Email}</td>
                        <td>
                          <div>{item.Phone}</div>
                          {item.Phone1}
                        </td>
                        <td>{item.City}</td>
                        <td>{parseInt(item.totalAmount).toLocaleString()}</td>
                        <td>{item.state}</td>
                        <td>{item.typeOrder}</td>
                        <td>
                          {item.state === "تم التسليم" ? (
                            <div className="btn btn-success mb-2 w-75">
                              {item.state}
                            </div>
                          ) : (
                            <div
                              className="btn btn-warning mb-2 w-75"
                              onClick={async () => {
                                const OrderRef = doc(
                                  db,
                                  "users",
                                  item.userId,
                                  "orders",
                                  item.ID
                                );

                                try {
                                  const update = {
                                    state: "تم التسليم",
                                  };
                                  await updateDoc(OrderRef, update);
                                  toast.success("تم تسليم الطلب بنجاح");
                                  setUpdate(true);
                                } catch {
                                  toast.error("حدث خطا ما!");
                                }
                              }}
                            >
                              استلام الطلب
                            </div>
                          )}

                          <div>
                            <button
                              className="btn btn-primary w-75"
                              onClick={() => {
                                setShow(false);
                                setDetailsOrders(item);
                              }}
                            >
                              تفاصيل الطلب
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </Col>
          </Row>
        ) : (
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
                {detailsOrders.cartItems.map((item) => (
                  <tr>
                    <td>
                      <img src={item.imgUrl} alt="" />
                    </td>
                    <td>{item.productName}</td>
                    <td>{parseInt(item.price).toLocaleString()}</td>
                    <td>{parseInt(item.quantity).toLocaleString()}</td>
                    <td>{parseInt(item.totalPrice).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="btn btn-success"
              onClick={() => {
                setShow(true);
              }}
            >
              رجوع
            </button>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default OrdersAdmin;

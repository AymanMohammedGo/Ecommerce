import React, { useRef, useState } from "react";
import { Container, Col, Row, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.confgi";
import { toast } from "react-toastify";
import "../styles/checkout.css";
import { useSelector } from "react-redux";
import useAuth from "../custom-hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { motion } from "framer-motion";
import qr from "../assets/images/qr.png";
import bemo from "../assets/images/bemo.png";
const Checkout = () => {
  const dispatch = useDispatch();
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const orderName = useRef("");
  const orderEmail = useRef("");
  const orderPhone = useRef("");
  const orderPhone1 = useRef("");
  const orderCity = useRef("");
  const orderAddress = useRef("");
  const orderNotes = useRef("");
  const { currentUser } = useAuth();

  const navigate = useNavigate();

  const [show, setshow] = useState(false);
  const [showP, setshowP] = useState(false);

  const addOrder = (e) => {
    e.preventDefault();
    const userId = currentUser.reloadUserInfo.localId;
    try {
      const docRef = collection(db, "users", userId, "orders");

      const Name = orderName.current.value;
      const Email = orderEmail.current.value;
      const Phone = orderPhone.current.value;
      const Phone1 = orderPhone1.current.value;
      const City = orderCity.current.value;
      const Address = orderAddress.current.value;
      const Notes = orderNotes.current.value;

      addDoc(docRef, {
        cartItems,
        totalQty,
        totalAmount,
        Name,
        Email,
        Phone,
        Phone1,
        City,
        Address,
        Notes,
        state: "جاري العمل على تسليم الطلب",
        typeOrder: show ? "حوالة بنكية " : "الدفع نقدًا عند الاستلام",
        userId: userId,
      });
      toast.success("تم اضافة الطلب بنجاح");
      dispatch(cartActions.deleteAll());
      navigate(`/order/${userId}`);
    } catch {
      toast.error("خطا برفع الطلب على السيرفر");
    }
  };

  return (
    <Helmet title="Checkout">
      <section>
        <Container>
          <div className="fs-3 mb-5"> اضافة الطلب:</div>
          <Row>
            <Col lg="7">
              <h6 className="mb-4 fw-bold">معلومات اضافية لاستلام الطلب</h6>
              <Form className="billing_form" onSubmit={addOrder}>
                <FormGroup className="form_group">
                  <input
                    type="text"
                    ref={orderName}
                    placeholder=" اسم المستلم الكامل"
                    required
                  ></input>
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="email"
                    ref={orderEmail}
                    placeholder="الايميل الشخصي"
                    required
                  ></input>
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="number"
                    ref={orderPhone}
                    placeholder="رقم الهاتف"
                    required
                  ></input>
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="number"
                    ref={orderPhone1}
                    placeholder="رقم الارضي"
                    required
                  ></input>
                </FormGroup>
                <FormGroup className="form_group">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    ref={orderCity}
                    placeholder="المحافظة"
                    required
                    onChange={(e) => {
                      if (e.target.value !== "حلب") {
                        setshowP(true);
                      } else {
                        setshowP(false);
                      }
                    }}
                  >
                    <option value="حلب">حلب</option>
                    <option value="دمشق">دمشق</option>
                    <option value="حماة">حماة</option>
                    <option value="حمص">حمص</option>
                  </select>
                </FormGroup>

                {showP && (
                  <p className="mb-3">
                    تنبيه هام: التوصيل مجاني فقط للعملاء من داخل محافظة حلب، إذا
                    كنت ترغب بالشحن خارج محافظة حلب ستقوم بدفع كلفة إضافية لدى
                    شركة الشحن
                  </p>
                )}
                <FormGroup className="form_group">
                  <input
                    type="text"
                    ref={orderAddress}
                    placeholder="رقم المنزل واسم الشارع / الحي"
                    required
                  ></input>
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="text"
                    ref={orderNotes}
                    placeholder="رقم الشقة، الجناح، الوحدة"
                    required
                  ></input>
                </FormGroup>
                <FormGroup class="form-checkall">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked={show === false}
                      onChange={() => {
                        setshow(false);
                      }}
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      الدفع نقدًا عند الاستلام
                    </label>
                    {!show && <p className="mt-2">الدفع عند التسليم مباشرة.</p>}
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked={show === true}
                      onChange={(e) => {
                        setshow(true);
                      }}
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      حوالة بنكية مباشرة
                    </label>
                    {show && (
                      <p className="mt-2">
                        الرجاء إرسال حوالة بالمبلغ المترتب عليكم إلى الحساب
                        الظاهر يسارا ، وايضا يرجى كتابة الايميل الشخصي في خانة
                        الوصف أو الشرح عند دفع المبلغ من خلال البنك ومن ثم سيتم
                        التواصل معكم وشحن الطلبية إلى عنواكم في حال تأكيد وصول
                        الحوالة.
                      </p>
                    )}
                  </div>
                </FormGroup>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="shop_btn auth_btn w-100 "
                >
                  ارسال الطلب
                </motion.button>
              </Form>
            </Col>
            <Col lg="5">
              <div className="checkout_cart">
                <h6>
                  عدد المنتجات:
                  <span> {parseInt(totalQty).toLocaleString()} منتج</span>
                </h6>
                <h6>
                  المجموع الكلي:
                  <span>{parseInt(totalAmount).toLocaleString()} ل.س</span>
                </h6>
                <h6>
                  <span>
                    التوصيل:
                    <br />
                    {showP
                      ? "ستقوم بدفع كلفة إضافية لدى شركة الشحن"
                      : "التوصيل مجانا"}
                  </span>
                  {!showP && (
                    <span>
                      0 <span className="fs-6 ">ل.س</span>
                    </span>
                  )}
                </h6>
                <h6>
                  <span>
                    خصم:
                    <br />
                    0%
                  </span>
                  <span>
                    0 <span className="fs-6 ">ل.س</span>
                  </span>
                </h6>
                <h4>
                  التكلفة النهائية:
                  <span>
                    {parseInt(totalAmount).toLocaleString()}
                    <span className="fs-6 ">ل.س</span>
                  </span>
                </h4>

                {/* <button className="shop_btn auth_btn w-100 " onClick={addOrder}>
                  ارسال الطلب
                </button> */}
              </div>
              {show && (
                <a
                  target="_blank"
                  href="//bbsfonline.com/BbsfOnline/User/BankServices/TransferToProvider"
                >
                  <div className="cash mt-5">
                    <div className="item">
                      <div className="detail">
                        <img className="bemo" src={bemo} />
                        <h5 className="acount">
                          رقم الحساب : <span>047284036SYP001</span>
                        </h5>
                      </div>
                      <img className="w-25" src={qr} />
                    </div>
                  </div>
                </a>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;

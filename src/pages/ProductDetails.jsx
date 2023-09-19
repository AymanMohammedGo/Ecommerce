import React, { useState, useRef, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductsList from "../components/UI/ProductsList";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { motion } from "framer-motion";
import "../styles/productDetails.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { db } from "../firebase.confgi";
import { doc, getDoc } from "firebase/firestore";
import useGetData from "../custom-hooks/useGetData";
import useAuth from "../custom-hooks/useAuth";
const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState({});

  const { currentUser } = useAuth();
  const { id } = useParams();
  const [tab, setTab] = useState("desc");
  const navigate = useNavigate();
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const { data: products } = useGetData("products");

  const getReviews = async () => {
    const rev = [];
    const colRef = collection(db, "products", id, "reviews");
    try {
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        rev.push(doc.data());
      });
    } catch {
      console.log("خطا بجلب التقيمات");
    }
    setReviews(rev);
  };

  const getProduct = async () => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProduct(docSnap.data());
    } else {
      console.log("لايوجد منتج");
    }
  };
  useEffect(() => {
    getProduct();
    getReviews();
  }, [id, products]);
  const { imgUrl, productName, price, description, shortDesc, category } =
    product;

  const relatedProducts = products.filter((item) => item.category === category);
  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserMsg = reviewMsg.current.value;

    const docRef = collection(db, "products", id, "reviews");

    addDoc(docRef, {
      text: reviewUserMsg,
      nameUser: currentUser.reloadUserInfo.displayName,
      photoUser: currentUser.reloadUserInfo.photoUrl,
    });

    toast.success("تم اضافة التقيم بنجاح");
    reviewMsg.current.value = null;
    getReviews();
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("تم اضافة المنتج بنجاح");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet title={productName}>
      <section className="py-0">
        <Container>
          <Row>
            <Col lg="4" className="mt-3">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="8" className="px-5 d-flex  justify-content-center">
              <div className="product_details">
                <h2>{productName}</h2>
                <div className="product_rating d-flex align-item-center gap-5 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-line"></i>
                    </span>
                  </div>

                  <p>
                    (<span>التقيمات</span> "4.5" )
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="product_price">
                    {parseInt(price).toLocaleString()}
                    <span className="fs-6">ل.س</span>
                  </span>
                  <span>التصنيف: {category}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="shop_btn"
                  onClick={addToCart}
                >
                  اضافة الى المشتريات
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab_wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active_tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  شرح أكثر
                </h6>
                <h6
                  className={`${tab === "rev" ? "active_tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  التعليقات ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab_content mt-5">
                  {category !== "اجهزة الكمبيوتر المحمول" && (
                    <p>{description}</p>
                  )}
                </div>
              ) : (
                <div className="product_review mt-5">
                  <div className="review_wrapper">
                    {reviews.length > 0 && (
                      <>
                        {reviews.map((item) => (
                          <div className="commentProducts my-3">
                            <img
                              className="imageRev"
                              src={item.photoUser}
                              alt=""
                            />
                            <div>
                              <h5>{item.nameUser}</h5>
                              <span>{item.text}</span>
                            </div>
                          </div>
                        ))}
                      </>
                    )}

                    <div className="review_form">
                      <h4>اكتب تعليق عن تجربتك</h4>

                      <form onSubmit={submitHandler}>
                        <div className="form_group">
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type="text"
                            placeholder="رسالة التعليق..."
                            required
                          />
                        </div>
                        {currentUser ? (
                          <motion.button
                            whileTap={{ scale: 1.2 }}
                            type="submit"
                            className="shop_btn mt-0"
                          >
                            اضافة تعليق
                          </motion.button>
                        ) : (
                          <>
                            يرجى تسجيل الدخول لاضافة تعليق
                            <motion.button
                              whileTap={{ scale: 1.2 }}
                              type="submit"
                              className="shop_btn mt-0 mx-3"
                              onClick={() => {
                                navigate("/login");
                              }}
                            >
                              تسجيل الدخول
                            </motion.button>
                          </>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            {category === "اجهزة الكمبيوتر المحمول" && tab === "desc" && (
              <Col lg="12">
                <table className="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>المعالج</td>
                      <td>{product.enter1}</td>
                    </tr>
                    <tr>
                      <td>التردد / الأنوية</td>
                      <td>{product.enter2}</td>
                    </tr>
                    <tr>
                      <td>الذاكرة العشوائية</td>
                      <td>{product.enter3}</td>
                    </tr>
                    <tr>
                      <td>التخزين</td>
                      <td>{product.enter4}</td>
                    </tr>
                    <tr>
                      <td>حجم الشاشة</td>
                      <td>{product.enter5}</td>
                    </tr>
                    <tr>
                      <td>دقة الشاشة</td>
                      <td>{product.enter6}</td>
                    </tr>
                    <tr>
                      <td>كرت الشاشة</td>
                      <td>{product.enter7}</td>
                    </tr>
                    <tr>
                      <td>موديل كرت الشاشة</td>
                      <td>{product.enter8}</td>
                    </tr>
                    <tr>
                      <td>السواقة الليزرية</td>
                      <td>{product.enter9}</td>
                    </tr>
                    <tr>
                      <td>كاميرا الويب</td>
                      <td>{product.enter10}</td>
                    </tr>
                    <tr>
                      <td>الشبكة اللاسلكية</td>
                      <td>{product.enter11}</td>
                    </tr>
                    <tr>
                      <td>نظام الاتصال السلكي</td>
                      <td>{product.enter12}</td>
                    </tr>
                    <tr>
                      <td>نظام الصوت</td>
                      <td>{product.enter13}</td>
                    </tr>
                    <tr>
                      <td>المنافذ</td>
                      <td>{product.enter14}</td>
                    </tr>
                    <tr>
                      <td>البطارية</td>
                      <td>{product.enter15}</td>
                    </tr>
                    <tr>
                      <td>الوزن</td>
                      <td>{product.enter16}</td>
                    </tr>
                    <tr>
                      <td>نظام التشغيل</td>
                      <td>{product.enter17}</td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            )}
            <Col lg="12" className="mt-5">
              <h2 className="related_title">اقتراحات يمكن ان تنال اعجابك</h2>
            </Col>

            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;

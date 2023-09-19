import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth.js";
import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.confgi";
import { toast } from "react-toastify";

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalQuantityFavorite = useSelector(
    (state) => state.cart.totalQuantityFavorite
  );

  const profileActionRef = useRef(null);

  const menuRef = useRef(null);
  const dropRef = useRef(null);

  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 90 ||
        document.documentElement.scrollTop > 90
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("تم تسجيل الخروج بنجاح");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");

  const navigatorToCart = () => {
    navigate("/cart");
  };
  const navigatorToFavorite = () => {
    navigate("/favorite");
  };
  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show_profileActions");

  const handleSearch = (e) => {
    navigate("shopSearch/" + e.target.value.toLowerCase());
  };
  // const [user, setuser] = useState(false);
  let userId;
  try {
    userId = currentUser.reloadUserInfo.localId;
  } catch {
    //setuser(false);
  }

  const active = (navClass) => (navClass.isActive ? "nav_active" : "");
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <Link to="home" className="logo">
              <img src={logo} alt="" />
            </Link>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                <li className="nav_item">
                  <NavLink to="home" className={active}>
                    الرئيسية
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to="cart" className={active}>
                    المشتريات
                  </NavLink>
                </li>
                <li className="nav_item shop">
                  <NavLink to="shop" className={active}>
                    المنتجات
                  </NavLink>
                  <ul className="submenu" ref={dropRef}>
                    <li>
                      <Link to="/shop/categary/الاجهزة%20المحمولة%20وملحقاتها">
                        الاجهزة المحمولة وملحقاتها
                      </Link>
                      <i class=" icondrop ri-arrow-left-circle-fill"></i>
                      <ul className="submenu1">
                        <li>
                          <Link to="/shop/categary/الاجهزة%20المحمولة%20وملحقاتها/products/اجهزة%20الكمبيوتر%20المحمول">
                            اجهزة الكمبيوتر المحمولة
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop/categary/الاجهزة%20المحمولة%20وملحقاتها/products/الحقائب%20المحمولة">
                            الحقائب المحمولة
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop/categary/الاجهزة%20المحمولة%20وملحقاتها/products/قواعد%20تبريد%20الأجهزة%20المحمولة">
                            قواعد تبريد
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop/categary/الاجهزة%20المحمولة%20وملحقاتها/products/ذواكر%20الأجهزة%20المحمولة%20(RAM)">
                            ذواكر (RAM)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/shop">اجهزة الكمبيوتر المكتبية</Link>
                      <i class=" icondrop ri-arrow-left-circle-fill"></i>
                      <ul className="submenu1">
                        <li>
                          <Link to="/shop/categary/مكونات%20الكمبيوتر%20المكتبي">
                            مكونات الكمبيوتر المكتبي
                          </Link>
                          <i class=" icondrop ri-arrow-left-circle-fill"></i>
                          <ul className="submenu1">
                            <li>
                              <Link to="/shop/categary/مكونات%20الكمبيوتر%20المكتبي/products/اللوحات%20الرئيسية">
                                الوحات الرئيسية
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/مكونات%20الكمبيوتر%20المكتبي/products/المعالجات">
                                المعالجات
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/مكونات%20الكمبيوتر%20المكتبي/products/ذواكر%20الأجهزة%20المكتبية%20(RAM)">
                                ذواكر الاجهزة المكتبية (RAM)
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/مكونات%20الكمبيوتر%20المكتبي/products/بطاقات%20الرسوميات">
                                بطاقات الرسوميات
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/مكونات%20الكمبيوتر%20المكتبي/products/شاشة%20الكمبيوتر">
                                شاشات الكمبيوتر
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/مكونات%20الكمبيوتر%20المكتبي/products/صندوق%20الجهاز">
                                صندوق الجهاز
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/مكونات%20الكمبيوتر%20المكتبي/products/لوحة%20المفاتيح">
                                لوحات المفاتيح
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/مكونات%20الكمبيوتر%20المكتبي/products/الماوسات">
                                الماوسات
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/مكونات%20الكمبيوتر%20المكتبي/products/وحدة%20التغذية">
                                وحدة التغذية
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/مكونات%20الكمبيوتر%20المكتبي/products/التبريد">
                                التبريد
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/shop/categary/وسائط%20التخزين">
                            وسائط التخزين
                          </Link>
                          <i class=" icondrop ri-arrow-left-circle-fill"></i>
                          <ul className="submenu1">
                            <li>
                              <Link to="/shop/categary/وسائط%20التخزين/products/الأقراص%20الصلبة%20(مكتبي)">
                                الاقراص الصلبة (مكتبي)
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/وسائط%20التخزين/products/الأقراص%20الصلبة%20(محمول)">
                                الاقراص الصلبة (محمول)
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/وسائط%20التخزين/products/الأقراص%20الصلبة%20(خارجي)">
                                الاقراص الصلبة (خارجي)
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/وسائط%20التخزين/products/وحدة%20تحوي%20SSD%20M2%20SATA">
                                وحدة تخزين SSD M2 SATA
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/وسائط%20التخزين/products/وحدة%20تخزين%20SSD%20M2%20NVME">
                                وحدة تخزين SSD M2 NVME
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/وسائط%20التخزين/products/وحدة%20تخزين%20SSD%202.5%20SATA">
                                وحدة تخزين SSD 2.5 SATA
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/shop/categary/الاجهزة%20الصوتية">
                            الاجهزة الصوتية
                          </Link>
                          <i class=" icondrop ri-arrow-left-circle-fill"></i>
                          <ul className="submenu1">
                            <li>
                              <Link to="/shop/categary/الاجهزة%20الصوتية/products/مكبرات%20الصوت">
                                مكبرات الصوت
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/الاجهزة%20الصوتية/products/مايك%20الكمبيوتر">
                                مايك الكمبيوتر
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/الاجهزة%20الصوتية/products/سماعات%20الراس">
                                سماعات الراس
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/categary/الاجهزة%20الصوتية/products/سماعات%20الأذن">
                                سماعات الاذن
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="nav_item">
                  <NavLink to={`/order/${userId}`} className={active}>
                    تتبع الطلبات
                  </NavLink>
                </li>

                <li className="nav_item">
                  <NavLink to="/selectlaptop" className={active}>
                    ادوات مساعدة
                  </NavLink>
                </li>

                <li className="nav_item">
                  <NavLink to="/contact" className={active}>
                    اتصل بنا
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="nav_icons">
              <div className="search_box" onChange={handleSearch}>
                <input type="text" placeholder="بحث........." />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
              <span className="fav_icon" onClick={navigatorToFavorite}>
                <i class="ri-heart-line"></i>
                <span className="badge">{totalQuantityFavorite}</span>
              </span>
              <span className="cart_icon" onClick={navigatorToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  onClick={toggleProfileActions}
                />
                <div
                  className="profile_actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <>
                      {currentUser.displayName === "admin" && (
                        <>
                          <div className="d-flex  justify-content-between ">
                            <Link className="pb-2" to="/dashboard">
                              لوحة التحكم
                            </Link>
                            <i class=" icondrop ri-arrow-left-circle-fill"></i>
                          </div>
                          <div className="d-flex  justify-content-between ">
                            <Link to="dashboard/add-product">اضافة منتجات</Link>
                            <i class=" icondrop ri-arrow-left-circle-fill"></i>
                          </div>
                        </>
                      )}
                      <div className="d-flex  justify-content-between ">
                        <span onClick={logout}>تسجيل خروج</span>
                        <i class=" icondrop ri-arrow-left-circle-fill"></i>
                      </div>

                      {/* <div className="d-flex  justify-content-between ">
                        <Link to="dashboard">لوحة التحكم</Link>
                        <i class=" icondrop ri-arrow-left-circle-fill"></i>
                      </div> */}

                      {/* <div className="d-flex  justify-content-between ">
                        <a
                          onClick={() => {
                            const userId = currentUser.reloadUserInfo.localId;
                            navigate(`/order/${userId}`);
                          }}
                        >
                          تتبع الطلبات
                        </a>
                        <i class=" icondrop ri-arrow-left-circle-fill"></i>
                      </div> */}
                    </>
                  ) : (
                    <div className="d-flex  justify-content-center flex-column">
                      <div className="d-flex  justify-content-between ">
                        <Link className="pb-2" to="/signup">
                          انشاء حساب
                        </Link>
                        <i class=" icondrop ri-arrow-left-circle-fill"></i>
                      </div>

                      <div className="d-flex  justify-content-between ">
                        <Link className="pb-2" to="/login">
                          تسجيل دخول
                        </Link>
                        <i class=" icondrop ri-arrow-left-circle-fill"></i>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

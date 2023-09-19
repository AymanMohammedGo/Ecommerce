import React from "react";
import { Container, Row } from "reactstrap";
import useAuth from "../custom-hooks/useAuth";
import "../styles/admin-nav.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../src/assets/images/logo.png";

const admin_nav = [
  {
    display: "لوحة التحكم",
    path: "/dashboard",
  },
  {
    display: "المنتجات",
    path: "/dashboard/all-products",
  },
  {
    display: "اضافة منتجات",
    path: "/dashboard/Add-Product",
  },
  {
    display: "الطلبات",
    path: "/dashboard/order",
  },
  {
    display: "المستخدمين",
    path: "/dashboard/users",
  },
  {
    display: "الذهاب للمتجر",
    path: "/home",
  },
];

const AdminNav = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    navigate("/dashboard/all-products/" + e.target.value.toLowerCase());
  };
  return (
    <>
      <header className="admin_header">
        <div className="admin_nav-top">
          <Container>
            <div className="admin_nav-wrapper-top">
              <Link to="home" className="logo">
                <img src={logo} alt="" />
              </Link>
              <div className="search_box" onChange={handleSearch}>
                <input type="text" placeholder="بحث........." />
                {/* <span>
                  <i class="ri-search-line"></i>
                </span> */}
              </div>
              <div className="admin_nav-top-right">
                <span>
                  <i class="ri-notification-3-line"></i>
                </span>
                <span>
                  <i class="ri-settings-2-line"></i>
                </span>
                <img src={currentUser && currentUser.photoURL} alt="" />
              </div>
            </div>
          </Container>
        </div>
      </header>
      <section className="admin_menu p-0">
        <Container>
          <Row>
            <div className="admin_navigation">
              <ul className="admin_menu-list">
                {admin_nav.map((item, index) => (
                  <li className="admin_menu-item" key={index}>
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "active_admin-menu" : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;

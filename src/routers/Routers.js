import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import ShopSearch from "../pages/ShopSearch";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../admin/Dashboard";
import AddProducts from "../admin/AddProducts.jsx";
import AllProducts from "../admin/AllProducts";
import Users from "../admin/Users";
import useAuth from "../custom-hooks/useAuth";
import UpdateProducts from "../admin/UpdateProducts";
import CategaryDetails from "../pages/CategaryDetails";
import CategaryProducts from "../pages/CategaryProducts";
import Order from "../pages/Order";
import Contact from "../pages/ContactUs";
import SelectLaptop from "../pages/SelectLaptop";
import Favorite from "../pages/Favorite";
import SearchProducts from "../admin/SearchProducts";
import OrdersAdmin from "../admin/OrdersAdmin.jsx";

const Routers = () => {
  const { currentUser } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="order/:id" element={<Order />} />
      <Route path="contact" element={<Contact />} />
      <Route path="favorite" element={<Favorite />} />
      <Route path="selectlaptop" element={<SelectLaptop />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="shop/categary/:id" element={<CategaryDetails />} />
      <Route
        path="shop/categary/:id/products/:id"
        element={<CategaryProducts />}
      />
      <Route path="shopSearch" element={<Home />} />
      <Route path="shopSearch/:id" element={<ShopSearch />} />
      <Route path="cart" element={<Cart />} />
      <Route path="/*" element={<ProtectedRoute />}>
        <Route path="checkout" element={<Checkout />} />
        <Route
          path="dashboard"
          element={
            currentUser && currentUser.displayName === "admin" ? (
              <Dashboard />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="dashboard/all-products"
          element={
            currentUser && currentUser.displayName === "admin" ? (
              <AllProducts />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="dashboard/all-products/:id"
          element={
            currentUser && currentUser.displayName === "admin" ? (
              <SearchProducts />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="dashboard/add-product"
          element={
            currentUser && currentUser.displayName === "admin" ? (
              <AddProducts />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="dashboard/update-product/:id"
          element={
            currentUser && currentUser.displayName === "admin" ? (
              <UpdateProducts />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="dashboard/order"
          element={
            currentUser && currentUser.displayName === "admin" ? (
              <OrdersAdmin />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="dashboard/users"
          element={
            currentUser && currentUser.displayName === "admin" ? (
              <Users />
            ) : (
              <Login />
            )
          }
        />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;

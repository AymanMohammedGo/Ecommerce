import React from "react";
import { motion } from "framer-motion";
import "../../styles/product-cart.css";
import { Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCart = ({ item, view }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
        shortDesc: item.shortDesc,
      })
    );
    toast.success("تم اضافة المنتج بنجاح");
  };
  const addToFavorite = () => {
    dispatch(
      cartActions.addFavoriteItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
        shortDesc: item.shortDesc,
        category: item.category,
      })
    );
  };
  const goToProduct = () => {
    navigate(`/shop/${item.id}`);
  };

  return (
    <Col lg="3" md="4" className={` ${view}`}>
      <div className="product_item">
        <div className="product_title" onClick={goToProduct}>
          <div className="product_img">
            <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
          </div>
          <div className="p-2 product_info">
            <h3 className="product_name">
              <Link to={`/shop/${item.id}`}>{item.productName}</Link>
            </h3>
            <span> ({item.category})</span>
            <br />
            <span> {item.shortDesc}</span>
          </div>
        </div>
        <div>
          <div className="product_cart-bottom   p-2" onClick={goToProduct}>
            <div>
              <span className="price  ">السعر:</span>
              <span className="price ">
                {parseInt(item.price).toLocaleString()}
                <span className="fs-6 "> ل.س </span>
              </span>
            </div>
          </div>
          <div className="add">
            <motion.span
              className="mx-2"
              whileTap={{ scale: 1.2 }}
              onClick={addToCart}
            >
              <i class="ri-add-line"></i>
            </motion.span>
            <motion.span
              className="mx-2"
              whileTap={{ scale: 1.2 }}
              onClick={addToFavorite}
            >
              <i class="ri-heart-line"></i>
            </motion.span>
            <motion.span
              className="mx-2"
              whileTap={{ scale: 1.2 }}
              onClick={goToProduct}
            >
              <i class="ri-bill-line"></i>
            </motion.span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCart;

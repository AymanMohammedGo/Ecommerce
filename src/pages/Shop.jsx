import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import TitleSection from "../components/UI/TitleSection";
import Spinner from "../components/UI/Spinner";
import SwiperSlider from "../components/UI/SwiperSlider";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";

import useGetData from "../custom-hooks/useGetData";
import { Link } from "react-router-dom";

import laptop from "../assets/images/اجهزة الكمبيوتر المحمول.jpg";
import computer from "../assets/images/مكونات الكمبيوتر المكتبي.jpg";
import ssd from "../assets/images/وحدات تخزين SSD 2.5 SATA.jpg";
import sound from "../assets/images/sound.jpg";

const Shop = () => {
  const { data: products, loading } = useGetData("products");
  const [productsData, setProductsData] = useState(products);

  useEffect(() => {
    setProductsData(
      products.filter(
        (product) => product.category === "اجهزة الكمبيوتر المحمول"
      )
    );
  }, [products]);

  // const handleFilter = (e) => {
  //   setProductsData(
  //     products.filter((product) => product.category === e.target.value)
  //   );
  // };
  // const handleSearch = (e) => {
  //   setProductsData(
  //     products.filter((item) =>
  //       item.productName.toLowerCase().includes(e.target.value.toLowerCase())
  //     )
  //   );
  // };

  const categary = [
    {
      name: "الاجهزة المحمولة وملحقاتها",
      img: laptop,
    },
    {
      name: "مكونات الكمبيوتر المكتبي",
      img: computer,
    },
    {
      name: "وسائط التخزين",
      img: ssd,
    },
    {
      name: "الاجهزة الصوتية",
      img: sound,
    },
  ];

  return (
    <Helmet title="Shop">
      <section>
        <Container>
          <Row>
            {categary.map((item) => (
              <Col lg="3" md="6">
                <Link to={`categary/${item.name}`}>
                  <h5 className="my-3 text-center titleh5">{item.name}</h5>
                  <div className="product_img">
                    <motion.img
                      whileHover={{ scale: 0.9 }}
                      src={item.img}
                      alt=""
                    />
                  </div>
                </Link>
              </Col>
            ))}

            {/* <Col lg="3" md="6">
              <div className="filter_widget">
                <h5 className="mb-3 text-center titleh5">الاجهزة الصوتية </h5>
                <div className="product_img">
                  <motion.img whileHover={{ scale: 0.9 }} src={sound} alt="" />
                </div>
                 <select onChange={handleFilter}>
                  <option>اختر تصنيف</option>
                  <option value="مكبرات الصوت">مكبرات الصوت</option>
                  <option value="مايك الكمبيوتر">مايك الكمبيوتر</option>
                  <option value="سماعات الراس">سماعات الراس</option>
                  <option value="سماعات الأذن">سماعات الأذن</option>
                </select>
              </div>
            </Col> 

           <Col lg="6" md="12">
              <div className="search_box search_shop" onChange={handleSearch}>
                <input type="text" placeholder="ابحث هنا........." />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
      <section className="best_sales pt-0">
        <Container>
          <TitleSection title="المنتجات المميزة" />
          {loading ? (
            <Spinner />
          ) : (
            <SwiperSlider data={productsData} view="HomeSlide" />
          )}
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;

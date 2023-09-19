import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import Services from "../services/Services";
import Clock from "../components/UI/Clock";

import { Container, Row, Col } from "reactstrap";
import counterImg from "../../src/assets/images/gaming-PC.png";

import useGetData from "../custom-hooks/useGetData";
import TitleSection from "../components/UI/TitleSection";
import Spinner from "../components/UI/Spinner";
import one from "../assets/images/1.jpg";
import two from "../assets/images/2.jpg";
import three from "../assets/images/3.jpg";
import SwiperSlider from "../components/UI/SwiperSlider";

const Home = () => {
  const { data: products, loading } = useGetData("products");

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [BestGupProducts, setBestGpuProducts] = useState([]);
  const [MotherProducts, setMotherProducts] = useState([]);
  const [screenProducts, setScreenProducts] = useState([]);
  const [boxsProducts, setBoxsProducts] = useState([]);
  const [pieceProducts, setPieceProducts] = useState([]);

  useEffect(() => {
    const filterTrendingProducts = products.filter(
      (item) => item.category === "اجهزة الكمبيوتر المحمول"
    );
    const filterBestGupProducts = products.filter(
      (item) => item.category === "بطاقات الرسوميات"
    );
    const filterMotherProducts = products.filter(
      (item) => item.category === "اللوحات الرئيسية"
    );

    const filterScreenProducts = products.filter(
      (item) => item.category === "شاشة الكمبيوتر"
    );
    const filterBoxsProducts = products.filter(
      (item) => item.category === "صندوق الجهاز"
    );

    const filterPieceProducts = [
      {
        category: "الماوسات",
        description: "اللون: أسود , النوع: Wired",
        id: "KIGj6r3Jr51Dqc1xqNMV",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/store-1ae3a.appspot.com/o/productImages%2F1681033619398j7YJEAxdBoRMfik.jpg?alt=media&token=fa764e16-59d9-43e6-93b0-db1c7074abd4",
        price: "240000",
        productName: "RGB GAMING Mouse P81S",
        shortDesc: "اللون: أسود , النوع: Wired",
      },
      {
        category: "لوحة المفاتيح",
        description:
          " لوحة مفاتيح الألعاب الميكانيكية البصرية ، لاسلكية ديلوكس ، مفتاح أحمر RX ، معدل تقرير USB 1000 هرتز ، مصابيح LED RGB لكل مفتاح ، اتصال USB 2.0 / Bluetooth ، أسود | 90M",
        id: "lLMkBKwTPifzY6885czk",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/store-1ae3a.appspot.com/o/productImages%2F168105275977122_11zon.jpg?alt=media&token=5368d74f-43c3-46ac-a0a0-da72552abab1",
        price: "1000000",
        productName: "Asus X807 Rog Strix Scope RX TKL",
        shortDesc:
          "لوحة مفاتيح الألعاب الميكانيكية البصرية ، لاسلكية ديلوكس ، مفتاح أحمر RX ، معدل تقرير USB 1000 هرتز ،",
      },
      {
        category: "سماعات الراس",
        description:
          "الموديل: VH520C , نطاق التردد: 20-20000Hz , طريقة التوصيل:3.5mm+USB  , الحساسية: 103±3dB",
        id: "3qp35i6iiP2EAvLw5kWp",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/store-1ae3a.appspot.com/o/productImages%2F1681036715659gYTX8fHKDPtnFW2.jpg?alt=media&token=1ba59729-7ffa-4f02-b4f7-49ac6e3eb055",
        price: "244000",
        productName: "RAPOO VH520C Gaming",
        shortDesc: "الموديل: VH520C , نطاق التردد: 20-20000Hz ",
      },
      {
        category: "الماوسات",
        description:
          "مصمم لإعادة تعريف معايير الدقة والسرعة ، محرك الماوس الرائع هذا يسحق المنافسة. مصمم لمنحك ميزة في اللعب المكثف. مع الأجهزة الدموية تتفاعل بشكل أسرع وتكون دائمًا متقدمًا على خصومك.",
        id: "nJGMhWBtQ7T9R4kfZIRs",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/store-1ae3a.appspot.com/o/productImages%2F16810337130604l5gymBJwFG10On%20(1).jpg?alt=media&token=7bf6693c-bb82-4fe7-862a-d09132635a50",
        price: "212000",
        productName: " A4TECH GAMING V8M Bloody",
        shortDesc:
          "مصمم لإعادة تعريف معايير الدقة والسرعة ، محرك الماوس الرائع هذا يسحق المنافسة. مصمم لمنحك ميزة في اللعب المكثف.",
      },

      {
        category: "لوحة المفاتيح",
        description:
          "Razer Huntsman V2 Analog Optical، 16.8 Million Color Options، Razer Doubleshot PBT Keycaps ، لوحة مفاتيح الألعاب | RZ03-03610100-R3M1",
        id: "3U5jNnIb0bheUEKGS8Vq",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/store-1ae3a.appspot.com/o/productImages%2F168105318856625_11zon.jpg?alt=media&token=600afd58-1351-4de2-b6a1-6289902bf304",
        price: "2000000",
        productName: "Razer Huntsman V2 Analog Optical",
        shortDesc:
          "Razer Huntsman V2 Analog Optical، 16.8 Million Color Options، Razer Doubleshot PBT Keycaps ، لوحة مفاتيح الألعاب | RZ03-03610100-R3M1",
      },

      {
        category: "سماعات الراس",
        description:
          "الموديل: VH310 , نطاق التردد: 20-20000Hz  ,الحساسية: 103±3dB",
        id: "6ALV5Z3VBWckADzYzC8N",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/store-1ae3a.appspot.com/o/productImages%2F1681036778811Khm6Os0iFy4zqAn.jpg?alt=media&token=50aee8d7-d37d-4714-9c2b-c8cafd5f057c",
        price: "228000",
        productName: " RAPOO VH310 Virtual 7.1 Channels Gaming USB",
        shortDesc: "الموديل: VH310 , نطاق التردد: 20-20000Hz ",
      },
    ];

    setTrendingProducts(filterTrendingProducts);
    setBestGpuProducts(filterBestGupProducts);
    setMotherProducts(filterMotherProducts);
    setScreenProducts(filterScreenProducts);
    setBoxsProducts(filterBoxsProducts);
    setPieceProducts(filterPieceProducts);
  }, [products]);

  return (
    <Helmet title={"Home"}>
      <section className="hero_section p-0">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="4000">
              <Link to="/shop">
                <img src={one} class="d-block w-100" alt="..." />
              </Link>
            </div>
            <div class="carousel-item" data-bs-interval="4000">
              <Link to="/shop/categary/الاجهزة%20المحمولة%20وملحقاتها/products/اجهزة%20الكمبيوتر%20المحمول">
                <img src={two} class="d-block w-100" alt="..." />
              </Link>
            </div>
            <div class="carousel-item" data-bs-interval="4000">
              <Link to="/selectlaptop">
                <img src={three} class="d-block w-100" alt="..." />
              </Link>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <Services />

      <section className="trending_products  pt-0">
        <Container>
          <TitleSection title="أجهزة الكمبيوتر الأكثر مبيعاً" />

          {loading ? (
            <Spinner />
          ) : (
            <SwiperSlider data={trendingProducts} view="HomeSlide" />
          )}
        </Container>
      </section>
      <section className="trending_products  pt-0">
        <Container>
          <TitleSection title="الأكسسورات ذات الجودة العالية" />

          {loading ? (
            <Spinner />
          ) : (
            <SwiperSlider data={pieceProducts} view="HomeSlide" />
          )}
        </Container>
      </section>
      <section className="best_sales pt-0">
        <Container>
          <TitleSection title="أفضل بطاقات الجرافيك مبيعاً" />
          {loading ? (
            <Spinner />
          ) : (
            <SwiperSlider data={BestGupProducts} view="HomeSlide" />
          )}{" "}
        </Container>
      </section>
      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down-col">
              <div className="clock_top-content">
                <h4 className="text-white fs-6 ">عروض لفترة محدودة</h4>
                <h3 className="text-white fs-5 mb-3 mt-3">
                  حسومات وعروض مميزة لعديد من المنتجات
                </h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="shop_btn store_btn"
              >
                <Link to="/offer">تصفح المنتجات</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter_img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new_arrivals">
        <Container>
          <TitleSection title="اللوحات الأم المميزة" />

          {loading ? (
            <Spinner />
          ) : (
            <SwiperSlider data={MotherProducts} view="HomeSlide" />
          )}
        </Container>
      </section>
      <section className="new_arrivals pt-0">
        <Container>
          <TitleSection title="صناديق الحاسوب الاكثر تميزاً" />

          {loading ? (
            <Spinner />
          ) : (
            <SwiperSlider data={boxsProducts} view="HomeSlide" />
          )}
        </Container>
      </section>
      <section className="popular_category pt-0">
        <Container>
          <TitleSection title="أفضل شاشات الكمبيوتر" />

          {loading ? (
            <Spinner />
          ) : (
            <SwiperSlider data={screenProducts} view="HomeSlide" />
          )}
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;

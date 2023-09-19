import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import TitleSection from "../components/UI/TitleSection";
import Spinner from "../components/UI/Spinner";
import { Container, Row, Col } from "reactstrap";
import ProductList from "../components/UI/ProductsList";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useGetData from "../custom-hooks/useGetData";
import { useParams } from "react-router-dom";
import one1 from "../assets/images/اجهزة الكمبيوتر المحمول.jpg";
import one2 from "../assets/images/الحقائب المحمولة.jpg";
import one3 from "../assets/images/قواعد تبريد الأجهزة المحمولة.jpg";
import one4 from "../assets/images/ذواكر الأجهزة المحمولة (RAM).jpg";
import two1 from "../assets/images/اللوحات الرئيسية.jpg";
import two2 from "../assets/images/المعالجات.jpg";
import two3 from "../assets/images/ذواكر الأجهزة المكتبية ( RAM ).jpg";
import two4 from "../assets/images/بطاقات الرسوميات.jpg";
import two5 from "../assets/images/شاشات الكمبيوتر.jpg";
import two6 from "../assets/images/صندوق الجهاز.jpg";
import two7 from "../assets/images/لوحات المفاتيح.jpg";
import two8 from "../assets/images/الماوسات.jpg";
import two9 from "../assets/images/وحدة التغذية.jpg";
import two10 from "../assets/images/التبريد.jpg";
import three1 from "../assets/images/الأقراص الصلبة (مكتبي).jpg";
import three2 from "../assets/images/الأقراص الصلبة (محمول).jpg";
import three3 from "../assets/images/الأقراص الصلبة (خارجي).jpg";
import three4 from "../assets/images/وحدات تخزين SSD M.2 SATA.jpg";
import three5 from "../assets/images/وحدات تخزين SSD M.2 NVME.jpg";
import three6 from "../assets/images/وحدات تخزين SSD 2.5 SATA.jpg";
import four1 from "../assets/images/مكبرات الصوت.jpg";
import four2 from "../assets/images/مايك الكمبيوتر.jpg";
import four3 from "../assets/images/سماعات الراس.jpg";
import four4 from "../assets/images/سماعات الاذن.jpg";

const CategaryDetails = () => {
  const { data: products, loading } = useGetData("products");
  const [productsData, setProductsData] = useState(products);

  const { id } = useParams();

  const [categary, setcategary] = useState([]);
  useEffect(() => {
    if (id === "الاجهزة المحمولة وملحقاتها") {
      setcategary([
        { name: "اجهزة الكمبيوتر المحمول", img: one1 },
        { name: "الحقائب المحمولة", img: one2 },
        { name: "قواعد تبريد الأجهزة المحمولة", img: one3 },
        { name: "ذواكر الأجهزة المحمولة (RAM)", img: one4 },
      ]);
    }
    if (id === "مكونات الكمبيوتر المكتبي") {
      setcategary([
        { name: "اللوحات الرئيسية", img: two1 },
        { name: "المعالجات", img: two2 },
        { name: "ذواكر الأجهزة المكتبية (RAM)", img: two3 },
        { name: "بطاقات الرسوميات", img: two4 },
        { name: "شاشة الكمبيوتر", img: two5 },
        { name: "صندوق الجهاز", img: two6 },
        { name: "لوحة المفاتيح", img: two7 },
        { name: "الماوسات", img: two8 },
        { name: "وحدة التغذية", img: two9 },
        { name: "التبريد", img: two10 },
      ]);
    }
    if (id === "وسائط التخزين") {
      setcategary([
        { name: "الأقراص الصلبة (مكتبي)", img: three1 },
        { name: "الأقراص الصلبة (محمول)", img: three2 },
        { name: "الأقراص الصلبة (خارجي)", img: three3 },
        { name: "وحدة تحوي SSD M2 SATA", img: three4 },
        { name: "وحدة تخزين SSD M2 NVME", img: three5 },
        { name: "وحدة تخزين SSD 2.5 SATA", img: three6 },
      ]);
    }
    if (id === "الاجهزة الصوتية") {
      setcategary([
        { name: "مكبرات الصوت", img: four1 },
        { name: "مايك الكمبيوتر", img: four2 },
        { name: "سماعات الراس", img: four3 },
        { name: "سماعات الأذن", img: four4 },
      ]);
    }
  }, [id]);

  useEffect(() => {
    const allProductCategory = categary.map((item) =>
      products.filter((product) => product.category === item.name)
    );

    setProductsData(allProductCategory);
  }, [products]);

  return (
    <Helmet title="Shop">
      <section className="pt-5">
        <Container>
          <Row>
            <div className="linkTitle">
              <Link to="/shop">المنتجات</Link>
              <span>
                <i class="ri-arrow-left-s-line"></i>
                <span>{id}</span>
              </span>
            </div>
            {categary.map((item) => (
              <Col lg="3" md="6" className="my-2">
                <Link to={`products/${item.name}`}>
                  <h5 className="mb-3 text-center titleh5">{item.name}</h5>
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
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <TitleSection title={`منتجات صنف ${id}`} />
        </Container>
        <Container>
          <Row>
            {loading ? (
              <Spinner />
            ) : productsData.length === 0 ? (
              <h1 className="text-center fs-4">لايوجد منتجات</h1>
            ) : (
              productsData.map((item) => <ProductList data={item} />)
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CategaryDetails;

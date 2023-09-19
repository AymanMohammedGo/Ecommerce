import React from "react";
import { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import TitleSection from "../components/UI/TitleSection";
import Spinner from "../components/UI/Spinner";
import useGetData from "../custom-hooks/useGetData";
import { Link, useParams } from "react-router-dom";
import ProductsList from "../components/UI/ProductsList";
const CategaryProducts = () => {
  const { data: products, loading } = useGetData("products");
  const [productsData, setProductsData] = useState(products);
  const { id } = useParams();

  useEffect(() => {
    setProductsData(products.filter((product) => product.category === id));
  }, [products, id]);

  const a1 = [
    [
      "الاجهزة المحمولة وملحقاتها",
      "اجهزة الكمبيوتر المحمول",
      "الحقائب المحمولة",
      "قواعد تبريد الأجهزة المحمولة",
      "ذواكر الأجهزة المحمولة (RAM)",
    ],
    [
      "مكونات الكمبيوتر المكتبي",
      "اللوحات الرئيسية",
      "المعالجات",
      "ذواكر الأجهزة المكتبية (RAM)",
      "بطاقات الرسوميات",
      "شاشة الكمبيوتر",
      "صندوق الجهاز",
      "لوحة المفاتيح",
      "الماوسات",
      "وحدة التغذية",
      "التبريد",
    ],
    [
      "وسائط التخزين",
      "الأقراص الصلبة (مكتبي)",
      "الأقراص الصلبة (محمول)",
      "الأقراص الصلبة (خارجي)",
      "وحدة تحوي SSD M2 SATA",
      "وحدة تخزين SSD M2 NVME",
      "وحدة تخزين SSD 2.5 SATA",
    ],
    [
      "الاجهزة الصوتية",
      "مكبرات الصوت",
      "مايك الكمبيوتر",
      "سماعات الراس",
      "سماعات الأذن",
    ],
  ];
  const a = a1.filter((item) => item.includes(id));
  console.log(a);
  return (
    <section className="pt-3">
      <Container>
        <TitleSection title={` ${id}`} />
      </Container>
      <Container>
        <Row>
          <div className="linkTitle mt-4">
            <Link to="/shop">المنتجات</Link>
            <span>
              <i class="ri-arrow-left-s-line"></i>
              <Link to={`/shop/categary/${a[0][0]}`}>{a[0][0]}</Link>
            </span>
            <span>
              <i class="ri-arrow-left-s-line"></i>
              <span>{id}</span>
            </span>
          </div>
          {loading ? (
            <Spinner />
          ) : productsData.length === 0 ? (
            <h1 className="text-center fs-4">لايوجد منتجات</h1>
          ) : (
            <ProductsList data={productsData} />
          )}
        </Row>
      </Container>
    </section>
  );
};

export default CategaryProducts;

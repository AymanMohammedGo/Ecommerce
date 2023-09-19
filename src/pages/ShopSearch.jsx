import React, { useEffect, useState } from "react";
import ProductsList from "../components/UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";
import { useParams } from "react-router-dom";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

const ShopSearch = () => {
  const { data: products } = useGetData("products");
  const [productsData, setProductsData] = useState(products);
  const { id } = useParams();
  useEffect(() => {
    setProductsData(
      products.filter((item) =>
        item.productName.toLowerCase().includes(id.toLowerCase())
      )
    );
  }, [id]);
  return (
    <Helmet title="Search">
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">لايوجد منتجات</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ShopSearch;

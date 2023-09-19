import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import ProductsList from "../components/UI/ProductsList";
const Favorite = () => {
  const FavoriteItems = useSelector((state) => state.cart.FavoriteItems);
  console.log(FavoriteItems);

  return (
    <Helmet title="Favorite">
      <section>
        <Container>
          <div className="fs-3 mb-4">المفضلة :</div>
          <Row>
            {FavoriteItems.length === 0 ? (
              <h2 className="fs-4 text-center my-5">
                لا يوجد منتجات في المفضلة.
              </h2>
            ) : (
              <ProductsList data={FavoriteItems} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Favorite;

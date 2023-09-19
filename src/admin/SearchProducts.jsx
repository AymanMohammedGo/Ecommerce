import React from "react";
import { Container, Row, Col } from "reactstrap";
import { db } from "../firebase.confgi";
import { doc, deleteDoc } from "firebase/firestore";
import Spinner from "../components/UI/Spinner";

import useGetData from "../custom-hooks/useGetData";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const SearchProducts = () => {
  const { data: products, loading } = useGetData("products");
  const { id } = useParams();
  const [productsData, setProductsData] = useState(products);
  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("تم الحذف بنجاح");
  };

  useEffect(() => {
    setProductsData(
      products.filter((item) =>
        item.productName.toLowerCase().includes(id.toLowerCase())
      )
    );
  }, [id]);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>صورة المنتج</th>
                  <th>اسم المنتج</th>
                  <th>الصنف</th>
                  <th>السعر</th>
                  <th> العملية</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <Spinner />
                ) : (
                  productsData.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.imgUrl} alt="" />
                      </td>
                      <td>{item.productName}</td>
                      <td>{item.category}</td>
                      <td>{item.price}</td>
                      <td>
                        <Link
                          to={`/dashboard/update-product/${item.id}`}
                          className="btn btn-success"
                        >
                          تعديل
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            deleteProduct(item.id);
                          }}
                          className="btn btn-danger"
                        >
                          حذف
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SearchProducts;

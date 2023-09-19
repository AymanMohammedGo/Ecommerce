import React from "react";
import { Container, Row, Col } from "reactstrap";
import { db } from "../firebase.confgi";
import { doc, deleteDoc } from "firebase/firestore";
import Spinner from "../components/UI/Spinner";

import useGetData from "../custom-hooks/useGetData";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("products");

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("تم الحذف بنجاح");
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table table align-middle">
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
                      <td>{parseInt(item.price).toLocaleString()}</td>
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

export default AllProducts;

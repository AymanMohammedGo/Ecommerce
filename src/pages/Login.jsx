import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.confgi";
import { toast } from "react-toastify";
import Spinner from "../components/UI/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);

      setLoading(false);
      toast.success("تم تسجيل الدخول بنجاح");
      navigate("/home");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Spinner />
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">تسجيل الدخول</h3>
                <Form className="auth_form" onSubmit={signIn}>
                  <FormGroup className="form_group">
                    <input
                      type="email"
                      placeholder="اسم الايميل"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="password"
                      placeholder="كلمة المرور"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <button type="submit" className="shop_btn auth_btn">
                    تسجيل الدخول
                  </button>
                  <p>
                    ليس لديك حساب سابق؟
                    <Link to="/signup"> انشاء حساب جديد</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;

import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import Spinner from "../components/UI/Spinner";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { setDoc, doc } from "firebase/firestore";

import { auth } from "../firebase.confgi";
import { storage } from "../firebase.confgi";
import { db } from "../firebase.confgi";

import { toast } from "react-toastify";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const Signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTast = uploadBytesResumable(storageRef, file);

      uploadTast.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTast.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      setLoading(false);
      toast.success("تم انشاء الحساب بنجاح");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("حدث خطا بالتسجيل");
    }
  };

  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Spinner />
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">انشاء حساب</h3>
                <Form className="auth_form" onSubmit={Signup}>
                  <FormGroup className="form_group">
                    <input
                      type="text"
                      placeholder="اسم المستخدم"
                      value={username}
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="email"
                      placeholder="اسم الايميل"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="password"
                      placeholder="كلمة المرور"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className="form_group">
                    <div class="custom-file">
                      <label class="custom-file-label" for="fileInput">
                        اختر صورة لحسابك
                      </label>
                      <input
                        type="file"
                        class="custom-file-input"
                        id="fileInput"
                        required
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </div>
                  </FormGroup>
                  <button type="submit" className="shop_btn auth_btn">
                    انشاء حساب
                  </button>
                  <p>
                    هل لديك حساب سابق؟
                    <Link to="/login">تسجيل دخول</Link>
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

export default Signup;

import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import { motion } from "framer-motion";
import "../styles/ContactUs.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactUs = () => {
  const orderName = useRef("");
  const orderEmail = useRef("");
  const orderMessage = useRef("");
  const sent = (e) => {
    e.preventDefault();
    const Name = orderName.current.value;
    const Email = orderEmail.current.value;
    const Message = orderEmail.current.value;
    emailjs.sendForm(
      "service_pce0725",
      "template_5cbxt4l",
      Message,
      "3VDT7N1sfotFdWbgp"
    );
  };
  return (
    <Helmet title="ContactUs">
      <section className="contact">
        <Container>
          <Row>
            <div class="contact">
              <div class="container">
                <div class="main-heading">
                  <h2> نموذج المراسلة</h2>
                </div>
                <div class="content">
                  <form action="" onSubmit={sent}>
                    <input
                      ref={orderName}
                      className="main-input"
                      type="text"
                      placeholder="الاسم "
                    />
                    <input
                      ref={orderEmail}
                      name="email_form"
                      className="main-input"
                      type="email"
                      placeholder="البريد الالكتروني"
                    />
                    <textarea
                      ref={orderMessage}
                      className="main-input"
                      name="message"
                      placeholder="كتابة الرسالة هنا"
                    ></textarea>
                    <motion.input
                      className="mb-4"
                      type="submit"
                      value="أرسال الرسالة"
                    />
                  </form>
                  <div class="info">
                    <h4>تواصل معنا :</h4>
                    <div className="number-1">
                      <span>
                        <i className="ri-phone-line"></i>
                      </span>
                      <p>544 542 993 963+</p>
                    </div>
                    <div className="number-2">
                      <span>
                        <i className="ri-phone-line"></i>
                      </span>
                      <p>045 263 947 963+</p>
                    </div>

                    <h4>العنوان :</h4>
                    <div className="address">
                      <i className="ri-map-pin-line"></i>
                      <p>سوريا - حلب - الجميلية</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ContactUs;

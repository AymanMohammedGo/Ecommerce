import React, { useState } from "react";
import { toast } from "react-toastify";
import { db, storage } from "../firebase.confgi";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/UI/Spinner";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);

  const [enter1, setEnter1] = useState(null);
  const [enter2, setEnter2] = useState(null);
  const [enter3, setEnter3] = useState(null);
  const [enter4, setEnter4] = useState(null);
  const [enter5, setEnter5] = useState(null);
  const [enter6, setEnter6] = useState(null);
  const [enter7, setEnter7] = useState(null);
  const [enter8, setEnter8] = useState(null);
  const [enter9, setEnter9] = useState(null);
  const [enter10, setEnter10] = useState(null);
  const [enter11, setEnter11] = useState(null);
  const [enter12, setEnter12] = useState(null);
  const [enter13, setEnter13] = useState(null);
  const [enter14, setEnter14] = useState(null);
  const [enter15, setEnter15] = useState(null);
  const [enter16, setEnter16] = useState(null);
  const [enter17, setEnter17] = useState(null);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const docRef = collection(db, "products");
      const storageRef = ref(
        storage,
        `productImages/${Date.now() + enterProductImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);
      uploadTask.on(
        () => {
          toast.error("حدث خطا برفع الصورة");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            let add;
            enterCategory === "اجهزة الكمبيوتر المحمول"
              ? (add = {
                  productName: enterTitle,
                  shortDesc: enterShortDesc,
                  description: enterDescription,
                  price: enterPrice,
                  category: enterCategory,
                  imgUrl: downloadURL,
                  enter1: enter1,
                  enter2: enter2,
                  enter3: enter3,
                  enter4: enter4,
                  enter5: enter5,
                  enter6: enter6,
                  enter7: enter7,
                  enter8: enter8,
                  enter9: enter9,
                  enter10: enter10,
                  enter11: enter11,
                  enter12: enter12,
                  enter13: enter13,
                  enter14: enter14,
                  enter15: enter15,
                  enter16: enter16,
                  enter17: enter17,
                })
              : (add = {
                  productName: enterTitle,
                  shortDesc: enterShortDesc,
                  description: enterDescription,
                  price: enterPrice,
                  category: enterCategory,
                  imgUrl: downloadURL,
                });
            console.log(add);
            await addDoc(docRef, add);
          });
        }
      );
      setLoading(false);
      toast.success("product successfully added!");
      navigate("/dashboard/all-products");
    } catch (err) {
      setLoading(false);
      toast.error("product not added!");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <Spinner />
            ) : (
              <>
                <h4 className="mb-5">اضافة منتج جديد</h4>
                <Form onSubmit={addProduct}>
                  <FormGroup className="form_group">
                    <span>اسم المنتج</span>
                    <input
                      type="text"
                      placeholder="حاسوب محمول..."
                      value={enterTitle}
                      onChange={(e) => setEnterTitle(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <span>شرح المنتج</span>
                    <input
                      type="text"
                      placeholder=" ذاكرة 500... "
                      value={enterShortDesc}
                      onChange={(e) => setEnterShortDesc(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <span>تفاصيل المنتج</span>
                    <input
                      type="text"
                      placeholder="معالج وكرت شاشة..."
                      value={enterDescription}
                      onChange={(e) => setEnterDescription(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <div className="d-flex align-items-center justify-content-between gap-5">
                    <FormGroup className="form_group w-50">
                      <span>السعر</span>
                      <input
                        type="number"
                        placeholder="1000ل.س"
                        value={enterPrice}
                        onChange={(e) => setEnterPrice(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="form_group w-50">
                      <span>التصنيف</span>
                      <select
                        className="w-100 p-2"
                        value={enterCategory}
                        onChange={(e) => setEnterCategory(e.target.value)}
                        required
                      >
                        <option>اختر تصنيف</option>
                        <option value="اجهزة الكمبيوتر المحمول">
                          اجهزة الكمبيوتر المحمول
                        </option>
                        <option value="الحقائب المحمولة">
                          الحقائب المحمولة
                        </option>
                        <option value="قواعد تبريد الأجهزة المحمولة">
                          قواعد تبريد الأجهزة المحمولة
                        </option>
                        <option value="ذواكر الأجهزة المحمولة (RAM)">
                          ذواكر الأجهزة المحمولة (ram)
                        </option>
                        <option value="اللوحات الرئيسية">
                          اللوحات الرئيسية
                        </option>
                        <option value="المعالجات">المعالجات</option>
                        <option value="ذواكر الأجهزة المكتبية (RAM)">
                          ذواكر الأجهزة المكتبية (RAM)
                        </option>
                        <option value="بطاقات الرسوميات">
                          بطاقات الرسوميات
                        </option>
                        <option value="شاشة الكمبيوتر">شاشة الكمبيوتر</option>
                        <option value="صندوق الجهاز">صندوق الجهاز</option>
                        <option value="لوحة المفاتيح">لوحة المفاتيح</option>
                        <option value="الماوسات">الماوسات</option>
                        <option value="وحدة التغذية">وحدة التغذية</option>
                        <option value="التبريد">التبريد</option>

                        <option value="الأقراص الصلبة (مكتبي)">
                          الأقراص الصلبة (مكتبي)
                        </option>
                        <option value="الأقراص الصلبة (محمول)">
                          الأقراص الصلبة (محمول)
                        </option>
                        <option value="الأقراص الصلبة (خارجي)">
                          الأقراص الصلبة (خارجي)
                        </option>
                        <option value="وحدة تحوي SSD M2 SATA">
                          وحدة تحوي SSD M2 SATA
                        </option>
                        <option value="وحدة تخزين SSD M2 NVME">
                          وحدة تخزين SSD M2 NVME
                        </option>
                        <option value="وحدة تخزين SSD 2.5 SATA">
                          وحدة تخزين SSD 2.5 SATA
                        </option>
                        <option value="مكبرات الصوت">مكبرات الصوت</option>
                        <option value="مايك الكمبيوتر">مايك الكمبيوتر</option>
                        <option value="سماعات الراس">سماعات الراس</option>
                        <option value="سماعات الأذن">سماعات الأذن</option>
                      </select>
                    </FormGroup>
                  </div>
                  {enterCategory === "اجهزة الكمبيوتر المحمول" && (
                    <div>
                      <FormGroup className="form_group">
                        <span>المعالج</span>
                        <input
                          type="text"
                          placeholder="المعالج"
                          value={enter1}
                          onChange={(e) => setEnter1(e.target.value)}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="form_group">
                        <span>التردد / الأنوية</span>
                        <input
                          type="text"
                          placeholder="التردد / الأنوية"
                          value={enter2}
                          onChange={(e) => setEnter2(e.target.value)}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="form_group">
                        <span>الذاكرة العشوائية</span>
                        <input
                          type="text"
                          placeholder="الذاكرة العشوائية"
                          value={enter3}
                          onChange={(e) => setEnter3(e.target.value)}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="form_group">
                        <span>التخزين</span>
                        <input
                          type="text"
                          placeholder="التخزين"
                          value={enter4}
                          onChange={(e) => setEnter4(e.target.value)}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="form_group">
                        <span>حجم الشاشة</span>
                        <input
                          type="text"
                          placeholder="حجم الشاشة"
                          value={enter5}
                          onChange={(e) => setEnter5(e.target.value)}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="form_group">
                        <span>دقة الشاشة</span>
                        <input
                          type="text"
                          placeholder="دقة الشاشة"
                          value={enter6}
                          onChange={(e) => setEnter6(e.target.value)}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="form_group">
                        <span>كرت الشاشة</span>
                        <input
                          type="text"
                          placeholder="كرت الشاشة"
                          value={enter7}
                          onChange={(e) => setEnter7(e.target.value)}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="form_group">
                        <span>موديل كرت الشاشة</span>
                        <input
                          type="text"
                          placeholder="موديل كرت الشاشة"
                          value={enter8}
                          onChange={(e) => setEnter8(e.target.value)}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="form_group">
                        <span>السواقة الليزرية</span>
                        <input
                          type="text"
                          placeholder="السواقة الليزرية"
                          value={enter9}
                          onChange={(e) => setEnter9(e.target.value)}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="form_group">
                        <span>كاميرا الويب</span>
                        <input
                          type="text"
                          placeholder="كاميرا الويب"
                          value={enter10}
                          onChange={(e) => setEnter10(e.target.value)}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="form_group">
                        <span>الشبكة اللاسلكية</span>
                        <input
                          type="text"
                          placeholder="الشبكة اللاسلكية"
                          value={enter11}
                          onChange={(e) => setEnter11(e.target.value)}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="form_group">
                        <span>نظام الاتصال السلكي</span>
                        <input
                          type="text"
                          placeholder="نظام الاتصال السلكي"
                          value={enter12}
                          onChange={(e) => setEnter12(e.target.value)}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="form_group">
                        <span>نظام الصوت</span>
                        <input
                          type="text"
                          placeholder="نظام الصوت"
                          value={enter13}
                          onChange={(e) => setEnter13(e.target.value)}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="form_group">
                        <span>المنافذ</span>
                        <input
                          type="text"
                          placeholder="المنافذ"
                          value={enter14}
                          onChange={(e) => setEnter14(e.target.value)}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="form_group">
                        <span>البطارية</span>
                        <input
                          type="text"
                          placeholder="البطارية"
                          value={enter15}
                          onChange={(e) => setEnter15(e.target.value)}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="form_group">
                        <span>الوزن</span>
                        <input
                          type="text"
                          placeholder="الوزن"
                          value={enter16}
                          onChange={(e) => setEnter16(e.target.value)}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="form_group">
                        <span>نظام التشغيل</span>
                        <input
                          type="text"
                          placeholder="نظام التشغيل"
                          value={enter17}
                          onChange={(e) => setEnter17(e.target.value)}
                          required
                        />
                      </FormGroup>
                    </div>
                  )}
                  <div>
                    <FormGroup className="form_group">
                      <span>صورة المنتج</span>
                      <input
                        type="file"
                        onChange={(e) => setEnterProductImg(e.target.files[0])}
                        required
                      />
                    </FormGroup>
                  </div>
                  <button className="shop_btn ">اضافة المنتج</button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;

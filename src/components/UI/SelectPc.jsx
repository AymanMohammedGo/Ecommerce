import React, { useEffect, useState } from "react";
import useGetData from "../../custom-hooks/useGetData";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";

import "../../styles/selectPc.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const SelectPc = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: products } = useGetData("products");
  const [allSelectProducts, setAllSelectProducts] = useState([]);
  const [cpu, setCpu] = useState([]);
  const [motherboards, setMotherboards] = useState([]);
  const [ram, setRam] = useState([]);
  const [gpu, setGpu] = useState([]);
  const [screen, setScreen] = useState([]);
  const [box, setBox] = useState([]);
  const [keyboard, setKeyboard] = useState([]);
  const [mouse, setMouse] = useState([]);
  const [power, setPower] = useState([]);
  const [cooling, setCooling] = useState([]);
  const [disk, setDisk] = useState([]);
  const [diskssdM2, setDiskssdM2] = useState([]);
  const [diskssdM2NVME, setDiskssdM2NVME] = useState([]);
  const [speaker, setSpeaker] = useState([]);
  const [priceCpu, setPriceCpu] = useState(0);
  const [pricemotherboards, setpriceMotherboards] = useState(0);
  const [priceram, setpriceRam] = useState(0);
  const [pricegpu, setpriceGpu] = useState(0);
  const [pricescreen, setpriceScreen] = useState(0);
  const [pricebox, setpriceBox] = useState(0);
  const [pricekeyboard, setpriceKeyboard] = useState(0);
  const [pricemouse, setpriceMouse] = useState(0);
  const [pricepower, setpricePower] = useState(0);
  const [pricecooling, setpriceCooling] = useState(0);
  const [pricedisk, setpriceDisk] = useState(0);
  const [pricediskssd, setpriceDiskssd] = useState(0);
  const [pricediskssdM2NVME, setpricediskssdM2NVME] = useState(0);
  const [pricespeaker, setpriceSpeaker] = useState(0);
  const [pricetotal, setpricetotal] = useState(0);
  const [countram, setcountram] = useState(1);
  const [counthddsdd, setcounthddsdd] = useState(1);
  const [maxRam, setMaxRam] = useState(1);
  const [maxhddsdd, setMaxhddsdd] = useState(1);
  const [showSSDM2SATA, setShowSSDM2SATA] = useState(true);

  useEffect(() => {
    const filterCpu = products.filter((item) => item.category === "المعالجات");
    const filterMotherboards = products.filter(
      (item) =>
        item.id === "S6H8as9f0YKZQAwFDPuv" || item.id === "WpsF7raGJWrnDjzl29ih"
    );
    const filterRam = products.filter(
      (item) => item.category === "ذواكر الأجهزة المكتبية (RAM)"
    );
    const filterGpu = products.filter(
      (item) => item.category === "بطاقات الرسوميات"
    );
    const filterScreen = products.filter(
      (item) => item.category === "شاشة الكمبيوتر"
    );
    const filterBox = products.filter(
      (item) => item.category === "صندوق الجهاز"
    );
    const filterKeyboard = products.filter(
      (item) => item.category === "لوحة المفاتيح"
    );
    const filterMouse = products.filter((item) => item.category === "الماوسات");
    const filterPower = products.filter(
      (item) => item.category === "وحدة التغذية"
    );
    const filterCooling = products.filter(
      (item) => item.category === "التبريد"
    );
    const filterdisk = products.filter(
      (item) =>
        item.category === "الأقراص الصلبة (مكتبي)" ||
        item.category === "الأقراص الصلبة (محمول)" ||
        item.category === "وحدة تخزين SSD 2.5 SATA"
    );
    const filterdiskssdM2 = products.filter(
      (item) => item.category === "وحدة تحوي SSD M2 SATA"
    );
    const filterdiskssdNVME = products.filter(
      (item) => item.category === "وحدة تخزين SSD M2 NVME"
    );
    const filterspeaker = products.filter(
      (item) => item.category === "مكبرات الصوت"
    );

    setCpu(filterCpu);
    setMotherboards(filterMotherboards);
    setRam(filterRam);
    setGpu(filterGpu);
    setScreen(filterScreen);
    setBox(filterBox);
    setKeyboard(filterKeyboard);
    setMouse(filterMouse);
    setPower(filterPower);
    setCooling(filterCooling);
    setDisk(filterdisk);
    setDiskssdM2(filterdiskssdM2);
    setDiskssdM2NVME(filterdiskssdNVME);
    setSpeaker(filterspeaker);
  }, [products]);
  useEffect(() => {
    let price = 0;
    price +=
      parseInt(priceCpu) +
      parseInt(pricemotherboards) +
      parseInt(priceram) +
      parseInt(pricegpu) +
      parseInt(pricescreen) +
      parseInt(pricebox) +
      parseInt(pricekeyboard) +
      parseInt(pricemouse) +
      parseInt(pricepower) +
      parseInt(pricecooling) +
      parseInt(pricedisk) +
      parseInt(pricediskssd) +
      parseInt(pricediskssdM2NVME) +
      parseInt(pricespeaker);
    setpricetotal(price);
  }, [
    priceCpu,
    pricemotherboards,
    priceram,
    pricegpu,
    pricescreen,
    pricebox,
    pricekeyboard,
    pricemouse,
    pricepower,
    pricecooling,
    pricedisk,
    pricediskssd,
    pricediskssdM2NVME,
    pricespeaker,
  ]);
  let update = [];
  const addProduct = (e, name, price) => {
    //id for product i3....
    // if (e.target.value === "EmPa59fnIKQ6MN14kkYj") {
    //   setValueCpu("i3");
    // } else {
    //   setValueCpu("i5");
    // }

    let detail = [];
    detail = name.filter((item) => item.id === e.target.value);

    if (e.target.value === "notselect") {
      if (name === disk) {
        update = allSelectProducts.filter(
          (item) =>
            item.category !== "الأقراص الصلبة (مكتبي)" &&
            item.category !== "الأقراص الصلبة (محمول)" &&
            item.category !== "وحدة تخزين SSD 2.5 SATA"
        );
      } else {
        update = allSelectProducts.filter(
          (item) => item.category !== name[0].category
        );
      }

      setAllSelectProducts(update);
      price(0);
      if (name[0].category === "ذواكر الأجهزة المكتبية (RAM)") setcountram(1);
      if (name[0].category === "الأقراص الصلبة (مكتبي)") setcounthddsdd(1);
      if (name[0].category === "وحدة تخزين SSD 2.5 SATA") setcounthddsdd(1);
      if (name[0].category === "الأقراص الصلبة (محمول)") setcounthddsdd(1);
    } else if (allSelectProducts.length > 0) {
      if (name === disk) {
        update = allSelectProducts.filter(
          (item) =>
            item.category !== "الأقراص الصلبة (مكتبي)" &&
            item.category !== "الأقراص الصلبة (محمول)" &&
            item.category !== "وحدة تخزين SSD 2.5 SATA"
        );
      } else {
        update = allSelectProducts.filter(
          (item) => item.category !== name[0].category
        );
      }

      detail[0].count = "1";

      update.push(detail[0]);

      setAllSelectProducts(update);
      console.log(allSelectProducts);
      price(detail[0].price);
      if (name[0].category === "ذواكر الأجهزة المكتبية (RAM)") setcountram(1);
      if (name[0].category === "الأقراص الصلبة (مكتبي)") setcounthddsdd(1);
      if (name[0].category === "وحدة تخزين SSD 2.5 SATA") setcounthddsdd(1);
      if (name[0].category === "الأقراص الصلبة (محمول)") setcounthddsdd(1);
    } else {
      detail[0].count = "1";
      update.push(detail[0]);

      setAllSelectProducts(update);
      price(detail[0].price);
      if (name[0].category === "ذواكر الأجهزة المكتبية (RAM)") setcountram(1);
      if (name[0].category === "الأقراص الصلبة (مكتبي)") setcounthddsdd(1);
      if (name[0].category === "وحدة تخزين SSD 2.5 SATA") setcounthddsdd(1);
      if (name[0].category === "الأقراص الصلبة (محمول)") setcounthddsdd(1);
    }
  };
  const ReloadButton = () => {
    props.reset();
  };
  const incrementCount = (e, name) => {
    if (name === "ram") {
      let a = allSelectProducts.filter(
        (item) => item.category === "ذواكر الأجهزة المكتبية (RAM)"
      );
      a[0].count = e.target.value;
      setpriceRam(a[0].price * e.target.value);
      setcountram(e.target.value);
    }
    if (name === "hdd") {
      let a = allSelectProducts.filter(
        (item) =>
          item.category === "الأقراص الصلبة (محمول)" ||
          item.category === "الأقراص الصلبة (مكتبي)" ||
          item.category === "وحدة تخزين SSD 2.5 SATA"
      );
      console.log(a);
      a[0].count = e.target.value;
      setpriceDisk(a[0].price * e.target.value);
      setcounthddsdd(e.target.value);
    }
  };
  const addToCart = () => {
    allSelectProducts.map((item) => dispatch(cartActions.addToolItem(item)));
    navigate("/cart");
  };
  return (
    <>
      <section className="SelectPc pt-5 pb-5">
        <Container>
          <Row>
            <form action="" className="build-pc">
              <div className="form-all">
                <label>المعالج</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(event) => {
                    addProduct(event, cpu, setPriceCpu);
                  }}
                >
                  <option value="notselect" selected>
                    لم يتم الاختيار
                  </option>
                  {cpu.map((item) => (
                    <option value={item.id}>
                      ({parseInt(item.price).toLocaleString()})
                      {item.productName}
                    </option>
                  ))}
                </select>
                <span className="ammount">
                  {parseInt(priceCpu).toLocaleString()}
                </span>
              </div>
              <div className="form-all">
                <label>اللوحة الأم</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(event) => {
                    addProduct(event, motherboards, setpriceMotherboards);

                    if (event.target.value === "S6H8as9f0YKZQAwFDPuv") {
                      let a = countram;
                      let b = priceram;
                      setpriceRam(b / a);
                      setcountram(1);
                      setMaxRam(2);

                      let a1 = counthddsdd;
                      let b1 = pricedisk;
                      setpriceDisk(b1 / a1);
                      setcounthddsdd(1);
                      setMaxhddsdd(4);

                      // try {
                      //   let update1 = allSelectProducts.filter(
                      //     (item) => item.category !== "وحدة تحوي SSD M2 SATA"
                      //   );
                      //   setAllSelectProducts(update1);
                      // } catch {}

                      setShowSSDM2SATA(false);
                      setpriceDiskssd(0);
                    }
                    if (event.target.value === "WpsF7raGJWrnDjzl29ih") {
                      let a = countram;
                      let b = priceram;
                      setpriceRam(b / a);
                      setcountram(1);
                      setMaxRam(4);

                      let a1 = counthddsdd;
                      let b1 = pricedisk;
                      setpriceDisk(b1 / a1);
                      setcounthddsdd(1);
                      setMaxhddsdd(6);

                      setShowSSDM2SATA(true);
                      setpriceDiskssd(0);
                    }
                  }}
                >
                  <option value="notselect" selected>
                    لم يتم الاختيار
                  </option>
                  {/* {console.log(valueCpu)}
                  {motherboards.length > 0 && (
                    <option
                      value={motherboards[0].id}
                      selected={valueCpu === "i3"}
                    >
                      ({parseInt(motherboards[0].price).toLocaleString()})
                      {motherboards[0].productName}
                    </option>
                  )}
                  {motherboards.length > 0 && (
                    <option
                      value={motherboards.length > 0 && motherboards[1].id}
                      selected={valueCpu === "i5"}
                    >
                      ({parseInt(motherboards[1].price).toLocaleString()})
                      {motherboards[1].productName}
                    </option>
                  )} */}
                  {motherboards.map((item) => (
                    <option value={item.id}>
                      ({parseInt(item.price).toLocaleString()})
                      {item.productName}
                    </option>
                  ))}
                </select>
                <span className="ammount">
                  {parseInt(pricemotherboards).toLocaleString()}
                </span>
              </div>
              <div className="form-all">
                <label>التبريد</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(event) => {
                    addProduct(event, cooling, setpriceCooling);
                  }}
                >
                  <option value="notselect" selected>
                    لم يتم الاختيار
                  </option>
                  {cooling.map((item) => (
                    <option value={item.id}>
                      ({parseInt(item.price).toLocaleString()}){" "}
                      {item.productName}
                    </option>
                  ))}
                </select>
                <span className="ammount">
                  {parseInt(pricecooling).toLocaleString()}
                </span>
              </div>
              <div className="form-all">
                <label>الذاكرة العشوائية</label>
                <div>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(event) => {
                      addProduct(event, ram, setpriceRam);
                    }}
                  >
                    <option value="notselect" selected>
                      لم يتم الاختيار
                    </option>
                    {ram.map((item) => (
                      <option value={item.id}>
                        ({parseInt(item.price).toLocaleString()}){" "}
                        {item.productName}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    onChange={(event) => {
                      incrementCount(event, "ram");
                    }}
                    placeholder="1"
                    value={countram}
                    min="1"
                    max={maxRam}
                  />
                </div>
                <span className="ammount">
                  {parseInt(priceram).toLocaleString()}
                </span>
              </div>
              <div className="form-all">
                <label>التخزين (HDD+SDD) </label>
                <div>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(event) => {
                      addProduct(event, disk, setpriceDisk);
                    }}
                  >
                    <option value="notselect" selected>
                      لم يتم الاختيار
                    </option>
                    {disk.map((item) => (
                      <option value={item.id}>
                        ({parseInt(item.price).toLocaleString()})
                        {item.productName}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    onChange={(event) => {
                      incrementCount(event, "hdd");
                    }}
                    placeholder="1"
                    value={counthddsdd}
                    min="1"
                    max={maxhddsdd}
                  />
                </div>
                <span className="ammount">
                  {parseInt(pricedisk).toLocaleString()}
                </span>
              </div>
              {showSSDM2SATA && (
                <div className="form-all">
                  <label>التخزين (SSD M2 SATA)</label>
                  <div>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(event) => {
                        addProduct(event, diskssdM2, setpriceDiskssd);
                      }}
                    >
                      <option value="notselect" selected>
                        لم يتم الاختيار
                      </option>
                      {diskssdM2.map((item) => (
                        <option value={item.id}>
                          ({parseInt(item.price).toLocaleString()})
                          {item.productName}
                        </option>
                      ))}
                    </select>
                    <input type="number" placeholder="1" value="1" />
                  </div>
                  <span className="ammount">
                    {parseInt(pricediskssd).toLocaleString()}
                  </span>
                </div>
              )}
              <div className="form-all">
                <label>التخزين (SSD M2 NVME)</label>
                <div>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(event) => {
                      addProduct(event, diskssdM2NVME, setpricediskssdM2NVME);
                    }}
                  >
                    <option value="notselect" selected>
                      لم يتم الاختيار
                    </option>
                    {diskssdM2NVME.map((item) => (
                      <option value={item.id}>
                        ({parseInt(item.price).toLocaleString()})
                        {item.productName}
                      </option>
                    ))}
                  </select>
                  <input type="number" placeholder="1" value="1" />
                </div>
                <span className="ammount">
                  {parseInt(pricediskssdM2NVME).toLocaleString()}
                </span>
              </div>

              <div className="form-all">
                <label>بطاقة إظهار الرسومات</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(event) => {
                    addProduct(event, gpu, setpriceGpu);
                  }}
                >
                  <option value="notselect" selected>
                    لم يتم الاختيار
                  </option>
                  {gpu.map((item) => (
                    <option value={item.id}>
                      ({parseInt(item.price).toLocaleString()})
                      {item.productName}
                    </option>
                  ))}
                </select>
                <span className="ammount">
                  {parseInt(pricegpu).toLocaleString()}
                </span>
              </div>
              <div className="form-all">
                <label>الشاشة</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(event) => {
                    addProduct(event, screen, setpriceScreen);
                  }}
                >
                  <option value="notselect" selected>
                    لم يتم الاختيار
                  </option>
                  {screen.map((item) => (
                    <option value={item.id}>
                      ({parseInt(item.price).toLocaleString()})
                      {item.productName}
                    </option>
                  ))}
                </select>
                <span className="ammount">
                  {parseInt(pricescreen).toLocaleString()}
                </span>
              </div>
              <div className="form-all">
                <label>صندوق الحاسب</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(event) => {
                    addProduct(event, box, setpriceBox);
                  }}
                >
                  <option value="notselect" selected>
                    لم يتم الاختيار
                  </option>
                  {box.map((item) => (
                    <option value={item.id}>
                      ({parseInt(item.price).toLocaleString()})
                      {item.productName}
                    </option>
                  ))}
                </select>
                <span className="ammount">
                  {parseInt(pricebox).toLocaleString()}
                </span>
              </div>
              <div className="form-all">
                <label>وحدة التغذية</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(event) => {
                    addProduct(event, power, setpricePower);
                  }}
                >
                  <option value="notselect" selected>
                    لم يتم الاختيار
                  </option>
                  {power.map((item) => (
                    <option value={item.id}>
                      ({parseInt(item.price).toLocaleString()})
                      {item.productName}
                    </option>
                  ))}
                </select>
                <span className="ammount">
                  {parseInt(pricepower).toLocaleString()}
                </span>
              </div>
              <div className="form-all">
                <label>لوحة المفاتيح</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(event) => {
                    addProduct(event, keyboard, setpriceKeyboard);
                  }}
                >
                  <option value="notselect" selected>
                    لم يتم الاختيار
                  </option>
                  {keyboard.map((item) => (
                    <option value={item.id}>
                      ({parseInt(item.price).toLocaleString()})
                      {item.productName}
                    </option>
                  ))}
                </select>
                <span className="ammount">
                  {parseInt(pricekeyboard).toLocaleString()}
                </span>
              </div>
              <div className="form-all">
                <label>الفأرة الليزرية</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(event) => {
                    addProduct(event, mouse, setpriceMouse);
                  }}
                >
                  <option value="notselect" selected>
                    لم يتم الاختيار
                  </option>
                  {mouse.map((item) => (
                    <option value={item.id}>
                      ({parseInt(item.price).toLocaleString()})
                      {item.productName}
                    </option>
                  ))}
                </select>
                <span className="ammount">
                  {parseInt(pricemouse).toLocaleString()}
                </span>
              </div>
              <div className="form-all">
                <label>مكبرات الصوت</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(event) => {
                    addProduct(event, speaker, setpriceSpeaker);
                  }}
                >
                  <option value="notselect" selected>
                    لم يتم الاختيار
                  </option>
                  {speaker.map((item) => (
                    <option value={item.id}>
                      ({parseInt(item.price).toLocaleString()})
                      {item.productName}
                    </option>
                  ))}
                </select>
                <span className="ammount">
                  {parseInt(pricespeaker).toLocaleString()}
                </span>
              </div>
              <div className="form-allTotal">
                <label>المجموع الكلي :</label>
                <span className="ammount">
                  {parseInt(pricetotal).toLocaleString()}
                </span>
              </div>
            </form>
          </Row>
        </Container>
      </section>
      <section className="mt-0 pt-0 ">
        <Container>
          <div className="fs-3 mb-4 ">المنتجات المختارة :</div>
          <Row className="display-flex justify-content-center">
            {allSelectProducts.map((item, index) => (
              <img className="imageInTool" src={item.imgUrl} alt="" />
            ))}
          </Row>
          <div className="mt-5">
            <motion.button
              whileTap={{ scale: 1.2 }}
              className="shop_btn auth_btn w-100 p-3 "
              onClick={addToCart}
            >
              طلب شراء المنتجات
            </motion.button>
            <motion.button
              whileTap={{ scale: 1.2 }}
              className="shop_btn auth_btn w-100 p-3 cancel"
              onClick={ReloadButton}
            >
              رجوع
            </motion.button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SelectPc;

import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";
import { data } from "./data";
import "survey-core/survey.i18n";
import { useState } from "react";
import { motion } from "framer-motion";

import { Container, Row } from "reactstrap";
import ProductCart from "../UI/ProductCart";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

function SurveyComponent(props) {
  const survey = new Model(json);
  const [show, setShow] = useState(false);
  const [result, setResult] = useState([]);

  //console.log(survey.getPlainData());
  const ans = [];
  const ReloadButton = () => {
    props.reset();
  };

  survey.onValueChanging.add((survey, { name, question, oldValue, value }) => {
    let a = false;
    if (ans.length > 0) {
      if (ans[ans.length - 1].an1 === name) {
        ans[ans.length - 1].an2 = value;
      } else {
        // eslint-disable-next-line array-callback-return
        ans.map((item, index) => {
          if (item.an1 === name) {
            ans[index].an2 = value;
            a = true;
          }
        });

        if (a === false) {
          ans.push({ an1: name, an2: value });
        }
      }
    } else {
      ans.push({ an1: name, an2: value });
    }
  });

  console.log(data.one);
  survey.onComplete.add((sender, options) => {
    if (ans[0].an2 === "التصفح") {
      if (ans[1].an2 === true) {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_highBattery_localStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === true) {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === true) {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === true) {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === true) {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_highBattery_cloudStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === true) {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === true) {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === true) {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }

      if (ans[1].an2 === false) {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_highBattery_localStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === false) {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === false) {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === false) {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === false) {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_highBattery_cloudStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === false) {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === false) {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === false) {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }

      if (ans[1].an2 === true) {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.mediumLaptop_highBattery_localStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === true) {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === true) {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === true) {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === true) {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.mediumLaptop_highBattery_cloudStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === true) {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === false) {
                setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === true) {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === false) {
                setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === true) {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }

      if (ans[1].an2 === false) {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.LowLaptop_highBattery_localStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === false) {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === false) {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === false) {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === false) {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.LowLaptop_highBattery_cloudStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === false) {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === false) {
                setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === false) {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === false) {
                setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === false) {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
    }

    if (ans[0].an2 === "التعليم") {
      // طالب مدرسة
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_localStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_cloudStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_localStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_cloudStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.mediumLaptop_highBattery_localStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.mediumLaptop_highBattery_cloudStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.LowLaptop_highBattery_localStorage_hightTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.LowLaptop_highBattery_cloudStorage_hightTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب مدرسة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      // طالب جامعة
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "هندسة العمارة او المدني") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_highBattery_localStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "هندسة العمارة او المدني") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "هندسة العمارة او المدني") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "هندسة العمارة او المدني") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "هندسة العمارة او المدني") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_highBattery_cloudStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "هندسة العمارة او المدني") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "هندسة العمارة او المدني") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "هندسة العمارة او المدني") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }

      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "اقسام الهندسات الاخرى") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_localStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "اقسام الهندسات الاخرى") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "اقسام الهندسات الاخرى") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "اقسام الهندسات الاخرى") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "اقسام الهندسات الاخرى") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_cloudStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "اقسام الهندسات الاخرى") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "اقسام الهندسات الاخرى") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "اقسام الهندسات الاخرى") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "اقسام الهندسات الاخرى") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.mediumLaptop_highBattery_localStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "اقسام الهندسات الاخرى") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "اقسام الهندسات الاخرى") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "اقسام الهندسات الاخرى") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "اقسام الهندسات الاخرى") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.mediumLaptop_highBattery_cloudStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "اقسام الهندسات الاخرى") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "اقسام الهندسات الاخرى") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "اقسام الهندسات الاخرى") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === true) {
                if (ans[6].an2 === "التخزين على حاسوبك نفسه") {
                  if (ans[7].an2 === true) {
                    setResult(
                      data.mediumLaptop_highBattery_localStorage_hightTime
                    );
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === false) {
                if (ans[6].an2 === "التخزين على حاسوبك نفسه") {
                  if (ans[7].an2 === false) {
                    setResult(
                      data.mediumLaptop_LowBattery_localStorage_lowTime
                    );
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === true) {
                if (ans[6].an2 === "التخزين على حاسوبك نفسه") {
                  if (ans[7].an2 === false) {
                    setResult(
                      data.mediumLaptop_LowBattery_localStorage_lowTime
                    );
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === false) {
                if (ans[6].an2 === "التخزين على حاسوبك نفسه") {
                  if (ans[7].an2 === true) {
                    setResult(
                      data.mediumLaptop_LowBattery_localStorage_lowTime
                    );
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === true) {
                if (ans[6].an2 === "التخزين السحابي (drive...)") {
                  if (ans[7].an2 === true) {
                    setResult(
                      data.mediumLaptop_highBattery_cloudStorage_hightTime
                    );
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === false) {
                if (ans[6].an2 === "التخزين السحابي (drive...)") {
                  if (ans[7].an2 === false) {
                    setResult(
                      data.mediumLaptop_LowBattery_cloudStorage_lowTime
                    );
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === true) {
                if (ans[6].an2 === "التخزين السحابي (drive...)") {
                  if (ans[7].an2 === false) {
                    setResult(
                      data.mediumLaptop_LowBattery_cloudStorage_lowTime
                    );
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === false) {
                if (ans[6].an2 === "التخزين السحابي (drive...)") {
                  if (ans[7].an2 === true) {
                    setResult(
                      data.mediumLaptop_LowBattery_cloudStorage_lowTime
                    );
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === true) {
                if (ans[6].an2 === "التخزين على حاسوبك نفسه") {
                  if (ans[7].an2 === true) {
                    setResult(
                      data.hightLaptop_highBattery_localStorage_hightTime
                    );
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === false) {
                if (ans[6].an2 === "التخزين على حاسوبك نفسه") {
                  if (ans[7].an2 === false) {
                    setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === true) {
                if (ans[6].an2 === "التخزين على حاسوبك نفسه") {
                  if (ans[7].an2 === false) {
                    setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === false) {
                if (ans[6].an2 === "التخزين على حاسوبك نفسه") {
                  if (ans[7].an2 === true) {
                    setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === true) {
                if (ans[6].an2 === "التخزين السحابي (drive...)") {
                  if (ans[7].an2 === true) {
                    setResult(
                      data.hightLaptop_highBattery_cloudStorage_hightTime
                    );
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === false) {
                if (ans[6].an2 === "التخزين السحابي (drive...)") {
                  if (ans[7].an2 === false) {
                    setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === true) {
                if (ans[6].an2 === "التخزين السحابي (drive...)") {
                  if (ans[7].an2 === false) {
                    setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === false) {
                if (ans[6].an2 === "التخزين السحابي (drive...)") {
                  if (ans[7].an2 === true) {
                    setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === true) {
                if (ans[6].an2 === "التخزين على حاسوبك نفسه") {
                  if (ans[7].an2 === true) {
                    setResult(
                      data.hightLaptop_highBattery_localStorage_hightTime
                    );
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === false) {
                if (ans[6].an2 === "التخزين على حاسوبك نفسه") {
                  if (ans[7].an2 === false) {
                    setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === true) {
                if (ans[6].an2 === "التخزين على حاسوبك نفسه") {
                  if (ans[7].an2 === false) {
                    setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === false) {
                if (ans[6].an2 === "التخزين على حاسوبك نفسه") {
                  if (ans[7].an2 === true) {
                    setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === true) {
                if (ans[6].an2 === "التخزين السحابي (drive...)") {
                  if (ans[7].an2 === true) {
                    setResult(
                      data.hightLaptop_highBattery_cloudStorage_hightTime
                    );
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === false) {
                if (ans[6].an2 === "التخزين السحابي (drive...)") {
                  if (ans[7].an2 === false) {
                    setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === true) {
                if (ans[6].an2 === "التخزين السحابي (drive...)") {
                  if (ans[7].an2 === false) {
                    setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === false) {
                if (ans[6].an2 === "التخزين السحابي (drive...)") {
                  if (ans[7].an2 === true) {
                    setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === true) {
                if (ans[6].an2 === "التخزين على حاسوبك نفسه") {
                  if (ans[7].an2 === true) {
                    setResult(
                      data.LowLaptop_highBattery_localStorage_hightTime
                    );
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === false) {
                if (ans[6].an2 === "التخزين على حاسوبك نفسه") {
                  if (ans[7].an2 === false) {
                    setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === false) {
                if (ans[6].an2 === "التخزين على حاسوبك نفسه") {
                  if (ans[7].an2 === true) {
                    setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === true) {
                if (ans[6].an2 === "التخزين على حاسوبك نفسه") {
                  if (ans[7].an2 === false) {
                    setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === true) {
                if (ans[6].an2 === "التخزين السحابي (drive...)") {
                  if (ans[7].an2 === true) {
                    setResult(
                      data.LowLaptop_highBattery_cloudStorage_hightTime
                    );
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === false) {
                if (ans[6].an2 === "التخزين السحابي (drive...)") {
                  if (ans[7].an2 === false) {
                    setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === false) {
                if (ans[6].an2 === "التخزين السحابي (drive...)") {
                  if (ans[7].an2 === true) {
                    setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "طالب جامعة") {
        if (ans[2].an2 === "المعاهد او باقي الكليات") {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === true) {
                if (ans[6].an2 === "التخزين السحابي (drive...)") {
                  if (ans[7].an2 === false) {
                    setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                    setShow(true);
                  }
                }
              }
            }
          }
        }
      }
      //  تعليم ذاتي
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_localStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_cloudStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_localStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_cloudStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.mediumLaptop_highBattery_localStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.mediumLaptop_highBattery_cloudStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.LowLaptop_highBattery_localStorage_hightTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true)
                  setResult(data.LowLaptop_highBattery_cloudStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false)
                  setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false)
                  setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "تعليم ذاتي") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true)
                  setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
    }

    if (ans[0].an2 === "العمل") {
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_localStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_cloudStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_localStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_cloudStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.mediumLaptop_highBattery_localStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.mediumLaptop_highBattery_cloudStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.LowLaptop_highBattery_localStorage_hightTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.LowLaptop_highBattery_cloudStorage_hightTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "عمل يحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.mediumLaptop_highBattery_localStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.mediumLaptop_highBattery_cloudStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === false) {
                setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === false) {
                setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }

      if (ans[1].an2 === "عمل يحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_highBattery_localStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_highBattery_cloudStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }

      if (ans[1].an2 === "عمل يحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }

      if (ans[1].an2 === "عمل يحتاج الى مواصفات عالية") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === "التخزين على حاسوبك نفسه") {
            if (ans[4].an2 === true) {
              setResult(data.hightLaptop_highBattery_localStorage_hightTime);
              setShow(true);
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات عالية") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === "التخزين على حاسوبك نفسه") {
            if (ans[4].an2 === false) {
              setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
              setShow(true);
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات عالية") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === "التخزين على حاسوبك نفسه") {
            if (ans[4].an2 === false) {
              setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
              setShow(true);
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات عالية") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === "التخزين على حاسوبك نفسه") {
            if (ans[4].an2 === true) {
              setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
              setShow(true);
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات عالية") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === "التخزين السحابي (drive...)") {
            if (ans[4].an2 === true) {
              setResult(data.hightLaptop_highBattery_cloudStorage_hightTime);
              setShow(true);
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات عالية") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === "التخزين السحابي (drive...)") {
            if (ans[4].an2 === false) {
              setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
              setShow(true);
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات عالية") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === "التخزين السحابي (drive...)") {
            if (ans[4].an2 === false) {
              setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
              setShow(true);
            }
          }
        }
      }
      if (ans[1].an2 === "عمل يحتاج الى مواصفات عالية") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === "التخزين السحابي (drive...)") {
            if (ans[4].an2 === true) {
              setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
              setShow(true);
            }
          }
        }
      }
    }

    if (ans[0].an2 === "العاب") {
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_localStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_cloudStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_localStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.hightLaptop_highBattery_cloudStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.mediumLaptop_highBattery_localStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(
                    data.mediumLaptop_highBattery_cloudStorage_hightTime
                  );
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.LowLaptop_highBattery_localStorage_hightTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === false) {
                  setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين على حاسوبك نفسه") {
                if (ans[6].an2 === true) {
                  setResult(data.LowLaptop_LowBattery_localStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.LowLaptop_highBattery_cloudStorage_hightTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === true) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === false) {
                  setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات منخفضة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === false) {
              if (ans[5].an2 === "التخزين السحابي (drive...)") {
                if (ans[6].an2 === true) {
                  setResult(data.LowLaptop_LowBattery_cloudStorage_lowTime);
                  setShow(true);
                }
              }
            }
          }
        }
      }

      if (ans[1].an2 === "العاب تحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.mediumLaptop_highBattery_localStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.mediumLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.mediumLaptop_highBattery_cloudStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === false) {
                setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === false) {
                setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.mediumLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }

      if (ans[1].an2 === "العاب تحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_highBattery_localStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين على حاسوبك نفسه") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_LowBattery_localStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_highBattery_cloudStorage_hightTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === true) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === false) {
                setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات متوسطة") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === false) {
            if (ans[4].an2 === "التخزين السحابي (drive...)") {
              if (ans[5].an2 === true) {
                setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);
                setShow(true);
              }
            }
          }
        }
      }

      if (ans[1].an2 === "العاب تحتاج الى مواصفات عالية") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === "التخزين على حاسوبك نفسه") {
            if (ans[4].an2 === true) {
              setResult(data.hightLaptop_highBattery_localStorage_hightTime);
              setShow(true);
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات عالية") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === "التخزين على حاسوبك نفسه") {
            if (ans[4].an2 === false) {
              setResult(data.hightLaptop_LowBattery_localStorage_lowTime);

              setShow(true);
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات عالية") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === "التخزين على حاسوبك نفسه") {
            if (ans[4].an2 === false) {
              setResult(data.hightLaptop_LowBattery_localStorage_lowTime);

              setShow(true);
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات عالية") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === "التخزين على حاسوبك نفسه") {
            if (ans[4].an2 === true) {
              setResult(data.hightLaptop_LowBattery_localStorage_lowTime);

              setShow(true);
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات عالية") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === "التخزين السحابي (drive...)") {
            if (ans[4].an2 === true) {
              setResult(data.hightLaptop_highBattery_cloudStorage_hightTime);

              setShow(true);
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات عالية") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === "التخزين السحابي (drive...)") {
            if (ans[4].an2 === false) {
              setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);

              setShow(true);
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات عالية") {
        if (ans[2].an2 === true) {
          if (ans[3].an2 === "التخزين السحابي (drive...)") {
            if (ans[4].an2 === false) {
              setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);

              setShow(true);
            }
          }
        }
      }
      if (ans[1].an2 === "العاب تحتاج الى مواصفات عالية") {
        if (ans[2].an2 === false) {
          if (ans[3].an2 === "التخزين السحابي (drive...)") {
            if (ans[4].an2 === true) {
              setResult(data.hightLaptop_LowBattery_cloudStorage_lowTime);

              setShow(true);
            }
          }
        }
      }
    } else {
      setShow(true);
    }
  });

  survey.onAfterRenderPage.add(function (sender, options) {
    let ques = document.querySelector(".sv-string-viewer");

    const choicesForWork = [
      {
        selector: `.sd-selectbase__label[aria-label="عمل يحتاج الى مواصفات منخفضة"] .sd-item__control-label`,
        text: "هذا الخيار مناسب للبرامج الخفيفة و الاساسية وبرامج  الاوفيس و التصفح و برامج المحاسبة والبرامج القديمة ",
      },
      {
        selector: `.sd-selectbase__label[aria-label="عمل يحتاج الى مواصفات متوسطة"] .sd-item__control-label`,
        text: "هذا الخيار مناسب للبرامج تعديل الصور و برامج البرمجة والبرامج المتوسطة التي لا تطلب مواصفات عالية جدا",
      },
      {
        selector: `.sd-selectbase__label[aria-label="عمل يحتاج الى مواصفات عالية"] .sd-item__control-label`,
        text: "هذا الخيار مناسب للبرامج الضخمة و برامج تعديل الفيديو و المونتاج وبرامج الرسم والتصميم الاحترافية",
      },
    ];
    const choicesForGames = [
      {
        selector: `.sd-selectbase__label[aria-label="العاب تحتاج الى مواصفات منخفضة"] .sd-item__control-label`,
        text: "هذا الخيار مناسب للالعاب الورق و العاب اطفال الصغار و العاب القديمة جدا و العاب الخفيفة جدا",
      },
      {
        selector: `.sd-selectbase__label[aria-label="العاب تحتاج الى مواصفات متوسطة"] .sd-item__control-label`,
        text: "هذا الخيار مناسب لبعض العاب الاون لاين والعاب الرياضة و الاكشن وغيرهم التي لا تطلب مواصفات عالية",
      },
      {
        selector: `.sd-selectbase__label[aria-label="العاب تحتاج الى مواصفات عالية"] .sd-item__control-label`,
        text: ` هذا الخيار مناسب للالعاب اون لاين الضخمة وايضا احدث الالعاب التي تم اصدرها هذا السنة  العاب  AAA الرائعة التي تتطلب مواصفات عالية`,
      },
    ];
    const choicesForLaptop = [
      {
        selector: `.sd-selectbase__label[aria-label="الحاسوب المحمول التقليدي"] .sd-item__control-label`,
        text: "هو الحاسوب المحمول المكتبي الاعتيادي والمعروف عند معظم الناس",
      },
      {
        selector: `.sd-selectbase__label[aria-label="الحاسوب المحمول القابل للتعديل"] .sd-item__control-label`,
        text: "يشمل هذا الحاسوب على لوحة مفاتيح يمكن إزالتها بسهولة للسماح باستخدام 2 في 1 مثل الكمبيوتر اللوحي عبر شاشة اللمس",
      },
      {
        selector: `.sd-selectbase__label[aria-label="الحاسوب المحمول للألعاب"] .sd-item__control-label`,
        text: `يتمتع الحاسوب المحمول للألعاب بأشكل رائعة ولوحة مفاتيح مضيئة وغيرها من الصفات التي تختلف عن الحاسوب المكتبي`,
      },
    ];

    if (ques.textContent === "كيف تصف العمل الخاص بك على حاسوبك المحمول؟") {
      // eslint-disable-next-line array-callback-return
      choicesForWork.map((item) => {
        let choices = document.querySelector(item.selector);
        let des = document.createElement("p");
        des.className = "des d-none";
        des.textContent = item.text;
        choices.appendChild(des);
      });
    }
    if (ques.textContent === "كيف تصف العاب الخاصة بك على حاسوبك المحمول؟") {
      // eslint-disable-next-line array-callback-return
      choicesForGames.map((item) => {
        let choices = document.querySelector(item.selector);
        let des = document.createElement("p");
        des.className = "des d-none";
        des.textContent = item.text;
        choices.appendChild(des);
      });
    }
    if (ques.textContent === "ما هو الشكل التي تفضلها لحاسوبك المحمول؟") {
      // eslint-disable-next-line array-callback-return
      choicesForLaptop.map((item) => {
        let choices = document.querySelector(item.selector);
        let des = document.createElement("p");
        des.className = "des d-none";
        des.textContent = item.text;
        choices.appendChild(des);
        // eslint-disable-next-line array-callback-return
        ans.map((item) => {
          if (
            item.an1 ===
            "هل سوف تستخدم جهازك المحمول أيضا  للبرامج الاحترافية او الالعاب الضخمة؟"
          ) {
            if (item.an2 === true) {
              let choicesReadOnly = document.querySelector(
                `.sd-radio__control[value="الحاسوب المحمول التقليدي"]`
              );

              if (choicesReadOnly.disabled === false) {
                choicesReadOnly.disabled = true;
                let choicesNotFound = document.querySelector(
                  `.sd-selectbase__label[aria-label="الحاسوب المحمول التقليدي"] .sd-item__control-label`
                );
                let des1 = document.createElement("p");
                des1.className = "Nofound";
                des1.textContent = "غير متوفر لدينا حاليا";
                choicesNotFound.appendChild(des1);
              }
            } else {
              let choicesReadOnly = document.querySelector(
                `.sd-radio__control[value="الحاسوب المحمول للألعاب"]`
              );
              if (choicesReadOnly.disabled === false) {
                choicesReadOnly.disabled = true;
                let choicesNotFound = document.querySelector(
                  `.sd-selectbase__label[aria-label="الحاسوب المحمول للألعاب"] .sd-item__control-label`
                );
                let des1 = document.createElement("p");
                des1.className = "Nofound";
                des1.textContent = "غير متوفر لدينا حاليا";
                choicesNotFound.appendChild(des1);
              }
            }
          } else if (item.an1 === "ما هي الكلية او المعهد التي تدرس به ؟") {
            if (item.an2 === "هندسة العمارة او المدني") {
              let choicesReadOnly = document.querySelector(
                `.sd-radio__control[value="الحاسوب المحمول التقليدي"]`
              );

              if (choicesReadOnly.disabled === false) {
                choicesReadOnly.disabled = true;
                let choicesNotFound = document.querySelector(
                  `.sd-selectbase__label[aria-label="الحاسوب المحمول التقليدي"] .sd-item__control-label`
                );
                let des1 = document.createElement("p");
                des1.className = "Nofound";
                des1.textContent = "غير متوفر لدينا حاليا";
                choicesNotFound.appendChild(des1);
              }
            }
          } else if (
            item.an1 === "كيف تصف العمل الخاص بك على حاسوبك المحمول؟"
          ) {
            if (item.an2 === "عمل يحتاج الى مواصفات عالية") {
              let choicesReadOnly = document.querySelector(
                `.sd-radio__control[value="الحاسوب المحمول التقليدي"]`
              );

              if (choicesReadOnly.disabled === false) {
                choicesReadOnly.disabled = true;
                let choicesNotFound = document.querySelector(
                  `.sd-selectbase__label[aria-label="الحاسوب المحمول التقليدي"] .sd-item__control-label`
                );
                let des1 = document.createElement("p");
                des1.className = "Nofound";
                des1.textContent = "غير متوفر لدينا حاليا";
                choicesNotFound.appendChild(des1);
              }
            }
          } else if (
            item.an1 === "كيف تصف العاب الخاصة بك على حاسوبك المحمول؟"
          ) {
            if (item.an2 === "العاب تحتاج الى مواصفات عالية") {
              let choicesReadOnly = document.querySelector(
                `.sd-radio__control[value="الحاسوب المحمول التقليدي"]`
              );

              if (choicesReadOnly.disabled === false) {
                choicesReadOnly.disabled = true;
                let choicesNotFound = document.querySelector(
                  `.sd-selectbase__label[aria-label="الحاسوب المحمول التقليدي"] .sd-item__control-label`
                );
                let des1 = document.createElement("p");
                des1.className = "Nofound";
                des1.textContent = "غير متوفر لدينا حاليا";
                choicesNotFound.appendChild(des1);
              }
            }
          }
        });
      });

      let choicesNotFound = document.querySelector(
        `.sd-selectbase__label[aria-label="الحاسوب المحمول القابل للتعديل"] .sd-item__control-label`
      );
      let des1 = document.createElement("p");
      des1.className = "Nofound";
      des1.textContent = "غير متوفر لدينا حاليا";
      choicesNotFound.appendChild(des1);
      let choicesReadOnly = document.querySelector(
        `.sd-radio__control[value="الحاسوب المحمول القابل للتعديل"]`
      );

      choicesReadOnly.disabled = "true";
    }

    if (ques.textContent === "ما هي حجم الشاشة التي تفضلها لحاسوبك المحمول؟") {
      let choicesReadOnly = document.querySelector(
        `.sd-radio__control[value=" حجم الوسط (بين 13 - 15)"]`
      );
      choicesReadOnly.disabled = true;
      let choicesNotFound = document.querySelector(
        `.sd-selectbase__label[aria-label=" حجم الوسط (بين 13 - 15)"] .sd-item__control-label`
      );
      let des1 = document.createElement("p");
      des1.className = "Nofound";
      des1.textContent = "غير متوفر لدينا حاليا";
      choicesNotFound.appendChild(des1);
    }
    if (
      ques.textContent === "ما هو عدد ساعات البطارية المناسبة لحاسوبك المحمول ؟"
    ) {
      let choicesReadOnly = document.querySelector(
        `.sd-radio__control[value="4 - 6 ساعات"]`
      );
      choicesReadOnly.disabled = true;
      let choicesReadOnly1 = document.querySelector(
        `.sd-radio__control[value="4 - 8 ساعات"]`
      );
      choicesReadOnly1.disabled = true;
      let choicesNotFound = document.querySelector(
        `.sd-selectbase__label[aria-label="4 - 6 ساعات"] .sd-item__control-label`
      );
      let choicesNotFound1 = document.querySelector(
        `.sd-selectbase__label[aria-label="4 - 8 ساعات"] .sd-item__control-label`
      );
      let des1 = document.createElement("p");
      des1.className = "Nofound";
      des1.textContent = "غير متوفر لدينا حاليا";
      choicesNotFound.appendChild(des1);
      let des2 = document.createElement("p");
      des2.className = "Nofound";
      des2.textContent = "غير متوفر لدينا حاليا";
      choicesNotFound1.appendChild(des2);
    }
    if (ques.textContent === "ما هو الوزن التي تفضلها لحاسوبك المحمول؟") {
      let choicesReadOnly = document.querySelector(
        `.sd-radio__control[value="3 - 4 كيلو غرام"]`
      );
      choicesReadOnly.disabled = true;
      let choicesNotFound = document.querySelector(
        `.sd-selectbase__label[aria-label="3 - 4 كيلو غرام"] .sd-item__control-label`
      );
      let des1 = document.createElement("p");
      des1.className = "Nofound";
      des1.textContent = "غير متوفر لدينا حاليا";
      choicesNotFound.appendChild(des1);

      // eslint-disable-next-line array-callback-return
      ans.map((item) => {
        if (
          item.an1 ===
          "هل سوف تستخدم جهازك المحمول أيضا  للبرامج الاحترافية او الالعاب الضخمة؟"
        ) {
          if (item.an2 === true) {
            let choicesReadOnly = document.querySelector(
              `.sd-radio__control[value="1.5 - 3 كيلو غرام"]`
            );

            if (choicesReadOnly.disabled === false) {
              choicesReadOnly.disabled = true;
              let choicesNotFound = document.querySelector(
                `.sd-selectbase__label[aria-label="1.5 - 3 كيلو غرام"] .sd-item__control-label`
              );
              let des1 = document.createElement("p");
              des1.className = "Nofound";
              des1.textContent = "غير متوفر لدينا حاليا";
              choicesNotFound.appendChild(des1);
            }
          } else {
            let choicesReadOnly = document.querySelector(
              `.sd-radio__control[value="4 - 6 كيلو غرام"]`
            );
            if (choicesReadOnly.disabled === false) {
              choicesReadOnly.disabled = true;
              let choicesNotFound = document.querySelector(
                `.sd-selectbase__label[aria-label="4 - 6 كيلو غرام"] .sd-item__control-label`
              );
              let des1 = document.createElement("p");
              des1.className = "Nofound";
              des1.textContent = "غير متوفر لدينا حاليا";
              choicesNotFound.appendChild(des1);
            }
          }
        } else if (item.an1 === "ما هي الكلية او المعهد التي تدرس به ؟") {
          if (item.an2 === "هندسة العمارة او المدني") {
            let choicesReadOnly = document.querySelector(
              `.sd-radio__control[value="1.5 - 3 كيلو غرام"]`
            );

            if (choicesReadOnly.disabled === false) {
              choicesReadOnly.disabled = true;
              let choicesNotFound = document.querySelector(
                `.sd-selectbase__label[aria-label="1.5 - 3 كيلو غرام"] .sd-item__control-label`
              );
              let des1 = document.createElement("p");
              des1.className = "Nofound";
              des1.textContent = "غير متوفر لدينا حاليا";
              choicesNotFound.appendChild(des1);
            }
          }
        } else if (item.an1 === "كيف تصف العمل الخاص بك على حاسوبك المحمول؟") {
          if (item.an2 === "عمل يحتاج الى مواصفات عالية") {
            let choicesReadOnly = document.querySelector(
              `.sd-radio__control[value="1.5 - 3 كيلو غرام"]`
            );

            if (choicesReadOnly.disabled === false) {
              choicesReadOnly.disabled = true;
              let choicesNotFound = document.querySelector(
                `.sd-selectbase__label[aria-label="1.5 - 3 كيلو غرام"] .sd-item__control-label`
              );
              let des1 = document.createElement("p");
              des1.className = "Nofound";
              des1.textContent = "غير متوفر لدينا حاليا";
              choicesNotFound.appendChild(des1);
            }
          }
        } else if (item.an1 === "كيف تصف العاب الخاصة بك على حاسوبك المحمول؟") {
          if (item.an2 === "العاب تحتاج الى مواصفات عالية") {
            let choicesReadOnly = document.querySelector(
              `.sd-radio__control[value="1.5 - 3 كيلو غرام"]`
            );

            if (choicesReadOnly.disabled === false) {
              choicesReadOnly.disabled = true;
              let choicesNotFound = document.querySelector(
                `.sd-selectbase__label[aria-label="1.5 - 3 كيلو غرام"] .sd-item__control-label`
              );
              let des1 = document.createElement("p");
              des1.className = "Nofound";
              des1.textContent = "غير متوفر لدينا حاليا";
              choicesNotFound.appendChild(des1);
            }
          }
        }
      });
    }
  });

  const params = {
    initialSlide: result.length - 2,
    effect: "flip",
    grabCursor: true,
    pagination: true,
  };

  return (
    <>
      {!show && <Survey model={survey} />}
      {show && (
        <>
          <section className="quixReuslt">
            <Container>
              <div className="fs-3 mb-4 text-center">
                حسب الاستطلاع السابق وجدنا افضل الخيارات المناسبة لك كالتالي :
              </div>
              <Row className="bestLaptop">
                <>
                  <Swiper
                    {...params}
                    modules={[EffectFlip, Pagination, Navigation]}
                    navigation={{
                      nextEl: ".swiper-button-prev-custom",
                      prevEl: ".swiper-button-next-custom",
                    }}
                    className="mySwiper"
                  >
                    {result.map((item, index) => (
                      <SwiperSlide>
                        <ProductCart item={result[index]} />
                      </SwiperSlide>
                    ))}

                    <div className="swiper-button-prev-custom">
                      <span className="text-above-arrow">مواصفات ادنى</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-arrow-left"
                      >
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                      </svg>
                    </div>
                    <div className="swiper-button-next-custom">
                      <span className="text-above-arrow">مواصفات اعلى</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-arrow-right"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </Swiper>
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="shop_btnReuslt text-bg-dark"
                    onClick={ReloadButton}
                  >
                    رجوع
                  </motion.button>
                </>
              </Row>
            </Container>
          </section>
        </>
      )}
    </>
  );
}

export default SurveyComponent;

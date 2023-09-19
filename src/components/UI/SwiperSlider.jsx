import React from "react";
import Slider from "react-slick";
import ProductCart from "./ProductCart";
import "../../styles/swiperSlider.css";
const SwiperSlider = ({ data, view }) => {
  var settings = {
    dots: true,
    //infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {data?.map((item, index) => (
          <ProductCart item={item} key={index} view={view} />
        ))}
      </Slider>
    </div>
  );
};

export default SwiperSlider;

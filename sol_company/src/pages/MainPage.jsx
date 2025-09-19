import React from "react";
import Slider from "react-slick";
import "../css/MainPage.css";

// slick 기본 CSS (필수)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Design1 from "../assets/Design1.png";
import Design2 from "../assets/Design2.png";

const MainPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      {/* 가운데 정렬과 max-width를 담당하는 내부 래퍼 */}
      <div className="carousel-inner">
        <Slider {...settings}>
          <div className="slide">
            <img src={Design1} alt="배너1" className="carousel-img" />
          </div>
          <div className="slide">
            <img src={Design2} alt="배너2" className="carousel-img" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MainPage;

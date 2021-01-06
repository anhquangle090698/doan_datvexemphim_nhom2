import React from "react";
import banner_1 from "../assets/images/banner-2048x682_1.jpg";
import banner_2 from "../assets/images/banner-2048x682_2.jpg";
import banner_3 from "../assets/images/banner-2048x682_3.jpg";
import banner_4 from "../assets/images/banner-2048x682_4.jpg";
import banner_5 from "../assets/images/banner-2048x682_5.jpg";
import banner_6 from "../assets/images/banner-2048x682_6.jpg";
import banner_7 from "../assets/images/banner-2048x682_7.jpg";

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { useDispatch } from "react-redux";
import { handleLogicPopupAction } from "../redux/actions/ManageLogicReducerActions";

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);



export default function Carousel(props) {

  let dispatch = useDispatch();

  return (
    <>
      <div className="carousel">
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{delay : 2000, disableOnInteraction : false}}
          loop={true}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="carousel__item">
              <img src={banner_1} alt={banner_1}></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel__item">
              <img src={banner_2} alt={banner_2}></img>
              <div className="carousel__item--play" onClick={() => {
                // onOpenPopup("https://www.youtube.com/embed/bkY8ntjoQsg")
                dispatch(handleLogicPopupAction("https://www.youtube.com/embed/bkY8ntjoQsg", "active"));
              }}>
                <i className="fa fa-play"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel__item">
              <img src={banner_3} alt={banner_3}></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel__item">
              <img src={banner_4} alt={banner_4}></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="carousel__item">
              <img src={banner_7} alt={banner_7}></img>
              <div className="carousel__item--play" onClick={() => {
                // onOpenPopup("https://www.youtube.com/embed/aqnzMJKRhho");
                dispatch(handleLogicPopupAction("https://www.youtube.com/embed/aqnzMJKRhho", "active"))
              }}>
                <i className="fa fa-play"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel__item">
              <img src={banner_5} alt={banner_5}></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel__item">
              <img src={banner_6} alt={banner_6}></img>
              <div className="carousel__item--play" onClick={() => {
                // onOpenPopup("https://www.youtube.com/embed/rtqSUo-yTxU");
                dispatch(handleLogicPopupAction("https://www.youtube.com/embed/rtqSUo-yTxU", "active"))
              }}>
                <i className="fa fa-play"></i>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

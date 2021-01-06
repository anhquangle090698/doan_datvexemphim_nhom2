import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/scss/main.scss";

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectCoverflow,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import { useSelector } from "react-redux";

// install Swiper components
SwiperCore.use([Navigation, A11y, EffectCoverflow]);

export default function TopFilms(props) {
  let { listFilm } = useSelector((state) => state.StateManageFilm);

  return (
    <div className="topFilm__wrapper">
      <div className="topFilm">
      <div className="topFilm__top">
          <h1 className="topFilm__top--title">Phim Hay Trong Tháng</h1>
        </div>
        <Swiper
          slidesPerView={5}
          effect="coverflow"
          navigation
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 400,
            modifier: 1,
            slideShadows: false,
          }}
        >
          <SwiperSlide>
            {listFilm.slice(14, 15).map((film, index) => {
              return (
                <div className="topFilm__item" key={index}>
                  <img
                    className="topFilm__image"
                    src={film.hinhAnh}
                    alt={film.hinhAnh}
                  ></img>
                  <div className="topFilm__overlay">
                    <h3 className="topFilm__titleFilm">{film.tenPhim}</h3>
                    <NavLink className="" to={`/lich-chieu-${(film.tenPhim).toLowerCase().split(' ').join('-')}/${film.maPhim}`}>
                      <button className="topFilm__button">Mua Vé</button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </SwiperSlide>
          <SwiperSlide>
            {listFilm.slice(8, 9).map((film, index) => {
              return (
                <div className="topFilm__item" key={index}>
                  <img
                    className="topFilm__image"
                    src={film.hinhAnh}
                    alt={film.hinhAnh}
                  ></img>
                  <div className="topFilm__overlay">
                    <h3 className="topFilm__titleFilm">{film.tenPhim}</h3>
                    <NavLink className="" to={`/lich-chieu-${(film.tenPhim).toLowerCase().split(' ').join('-')}/${film.maPhim}`}>
                      <button className="topFilm__button">Mua Vé</button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </SwiperSlide>
          <SwiperSlide>
            {listFilm.slice(5, 6).map((film, index) => {
              return (
                <div className="topFilm__item" key={index}>
                  <img
                    className="topFilm__image"
                    src={film.hinhAnh}
                    alt={film.hinhAnh}
                  ></img>
                  <div className="topFilm__overlay">
                    <h3 className="topFilm__titleFilm">{film.tenPhim}</h3>
                    <NavLink className="" to={`/lich-chieu-${(film.tenPhim).toLowerCase().split(' ').join('-')}/${film.maPhim}`}>
                      <button className="topFilm__button">Mua Vé</button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </SwiperSlide>
          <SwiperSlide>
            {listFilm.slice(11, 12).map((film, index) => {
              return (
                <div className="topFilm__item" key={index}>
                  <img
                    className="topFilm__image"
                    src={film.hinhAnh}
                    alt={film.hinhAnh}
                  ></img>
                  <div className="topFilm__overlay">
                    <h3 className="topFilm__titleFilm">{film.tenPhim}</h3>
                    <NavLink className="" to={`/lich-chieu-${(film.tenPhim).toLowerCase().split(' ').join('-')}/${film.maPhim}`}>
                      <button className="topFilm__button">Mua Vé</button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </SwiperSlide>
          <SwiperSlide>
            {listFilm.slice(4, 5).map((film, index) => {
              return (
                <div className="topFilm__item" key={index}>
                  <img
                    className="topFilm__image"
                    src={film.hinhAnh}
                    alt={film.hinhAnh}
                  ></img>
                  <div className="topFilm__overlay">
                    <h3 className="topFilm__titleFilm">{film.tenPhim}</h3>
                    <NavLink className="" to={`/lich-chieu-${(film.tenPhim).toLowerCase().split(' ').join('-')}/${film.maPhim}`}>
                      <button className="topFilm__button">Mua Vé</button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </SwiperSlide>
          <SwiperSlide>
            {listFilm.slice(5, 6).map((film, index) => {
              return (
                <div className="topFilm__item" key={index}>
                  <img
                    className="topFilm__image"
                    src={film.hinhAnh}
                    alt={film.hinhAnh}
                  ></img>
                  <div className="topFilm__overlay">
                    <h3 className="topFilm__titleFilm">{film.tenPhim}</h3>
                    <NavLink className="" to={`/lich-chieu-${(film.tenPhim).toLowerCase().split(' ').join('-')}/${film.maPhim}`}>
                      <button className="topFilm__button">Mua Vé</button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </SwiperSlide>
          <SwiperSlide>
            {listFilm.slice(2, 3).map((film, index) => {
              return (
                <div className="topFilm__item" key={index}>
                  <img
                    className="topFilm__image"
                    src={film.hinhAnh}
                    alt={film.hinhAnh}
                  ></img>
                  <div className="topFilm__overlay">
                    <h3 className="topFilm__titleFilm">{film.tenPhim}</h3>
                    <NavLink className="" to={`/lich-chieu-${(film.tenPhim).toLowerCase().split(' ').join('-')}/${film.maPhim}`}>
                      <button className="topFilm__button">Mua Vé</button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

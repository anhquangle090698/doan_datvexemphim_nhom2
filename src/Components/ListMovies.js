import React from "react";
import "../assets/scss/main.scss";

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
import Movie from "./Movie";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);

export default function ListMovies(props) {

  let { listFilm } = useSelector(state => state.StateManageFilm);

  const renderListFilm1 = () => {
    return listFilm.slice(0,8).map((film, index) => {
      return <div className="col-sm-6 col-md-3" key={index}>
          <Movie phim = {film} ></Movie>
      </div>
    });
  }

  const renderListFilm2 = () => {
    return listFilm.slice(8, 16).map((film, index) => {
      return <div className="col-sm-6 col-md-3" key={index}>
          <Movie phim = {film} ></Movie>
      </div>
    });
  }

  const renderListFilm3 = () => {
    return listFilm.slice(16).map((film, index) => {
      return <div className="col-sm-6 col-md-3" key={index}>
          <Movie phim = {film} ></Movie>
      </div>
    });
  }

  return (
    <>
      <div className="listMovies" id="lich-chieu">
        <div className="listMovies__top">
          <h1 className="listMovies__top--title">Phim Đang Chiếu</h1>
        </div>
        <div className="listMovies__body">
          <Swiper
            slidesPerView={1}
            navigation
            loop={true}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
                <div className="row">
                    {renderListFilm1()}
                    <NavLink to="/phim-dang-chieu" className="listMovies__showMore">
                      Xem Thêm <i className="fa fa-angle-double-right"></i>
                    </NavLink>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="row">
                    {renderListFilm2()}
                    <NavLink to="/phim-dang-chieu" className="listMovies__showMore">
                      Xem Thêm <i className="fa fa-angle-double-right"></i>
                    </NavLink>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="row">
                    {renderListFilm3()}
                    <NavLink to="/phim-dang-chieu" className="listMovies__showMore">
                      Xem Thêm <i className="fa fa-angle-double-right"></i>
                    </NavLink>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

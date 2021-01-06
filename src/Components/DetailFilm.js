import React, { useEffect } from "react";
import "../assets/scss/main.scss";
import bg from "../assets/images/6fmig9liztj31.png";
import moment from "moment";
import { useDispatch } from "react-redux";
import { handleLogicPopupAction } from "../redux/actions/ManageLogicReducerActions";
import { NavLink } from "react-router-dom";

export default function DetailFilm(props) {
  const { detailMovie } = props;

  let dispatch = useDispatch();
  // console.log(detailMovie);

  //page back to top
  const onload = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  onload();

  return (
    <>
      <div className="detailFilm__main">
        <div className="detailFilm__information">
          <img src={bg} alt={bg} className="detailFilm__imageBG"></img>
          <div className="gradient"></div>
          <div className="detailFilm__content">
            <div className="row">
              <div className="col-md-3">
                <div className="detailFilm__contentLeft">
                  <img
                    src={detailMovie.hinhAnh}
                    alt={detailMovie.hinhAnh}
                    className="detailFilm__imageFilm"
                  ></img>
                  <div className="detailFilm__overlayImg">
                    <i
                      className="fa fa-play detailFilm__iconPlay"
                      onClick={() => {
                        dispatch(
                          handleLogicPopupAction(
                            `${detailMovie.trailer}`,
                            "active"
                          )
                        );
                      }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="detailFilm__contentRight">
                  <p className="detailFilm__date">
                    Ngày khởi chiếu :{" "}
                    <span>
                      {moment(detailMovie.ngayKhoiChieu).format("DD-MM-YYYY")}
                    </span>
                  </p>
                  <h3 className="detailFilm__titleFilm">
                    {detailMovie.tenPhim}
                  </h3>
                  <p className="detailFilm__otherInfor">
                    120 phút - 0 IMDb - 2D/Digital{" "}
                  </p>
                  <p className="detailFilm__rating">
                    Đánh giá : <span>{detailMovie.danhGia}/10</span>{" "}
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="detailFilm__description">
                    <span>Nội dung : </span> {detailMovie.moTa}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detailFilm__showTime">
          <div className="detailFilm__showTime--block">
            <h3 className="detailFilm__titleShowTime">
              Lịch Chiếu Phim {detailMovie.tenPhim}
            </h3>
          </div>
          <div className="detailFilm__showTimeContent">
            <div className="row">
              <div className="col-md-3">
                <div
                  className="nav flex-column nav-pills detailFilm__listSCinema"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {detailMovie.heThongRapChieu?.map((heThongRap, index) => {
                    let active = index === 0 ? "active" : "";

                    return (
                      <a
                        key={index}
                        className={" nav-link " + active}
                        id="v-pills-home-tab"
                        data-toggle="pill"
                        href={`#${heThongRap.maHeThongRap}`}
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                      >
                        <img
                          src={heThongRap.logo}
                          alt={heThongRap.logo}
                          style={{ width: 100 }}
                        ></img>
                        <span>{heThongRap.tenHeThongRap}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-9">
                <div
                  className="tab-content  detailFilm__listShowTimes"
                  id="v-pills-tabContent"
                >
                  {detailMovie.heThongRapChieu?.map((heThongRap, index) => {
                    let active = index === 0 ? "active" : "";
                    return (
                      <div
                        key={index}
                        className={" tab-pane fade show " + active}
                        id={heThongRap.maHeThongRap}
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                      >
                        {heThongRap.cumRapChieu.map((cumRap, index) => {
                          return (
                            <div className="detailFilm__showTime" key={index}>
                              <div className="detailFilm__showTime--block">
                                <span className="detailFilm__showTime--highlight">
                                  {cumRap.tenCumRap}
                                </span>
                              </div>
                              <p className="detailFilm__showTime--caption">
                                <i className="fa fa-asterisk"></i> Lịch Chiếu
                              </p>
                              <div className="detailFilm__showTime--content">
                                {cumRap.lichChieuPhim
                                  ?.slice(0, 10)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        className="detailFilm__showTime--item"
                                        to={`/chitietphongve/${lichChieu.maLichChieu}`}
                                        key={index}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

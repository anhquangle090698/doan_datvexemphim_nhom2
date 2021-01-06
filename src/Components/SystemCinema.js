import React, { useState } from "react";
import "../assets/scss/main.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getShowTimesByIdCinemaAction,
  getShowTimesByIdSystemCinemaApiAction,
} from "../redux/actions/ManageFilmReducerActions";
import { NavLink } from "react-router-dom";
import moment from "moment";
import { ACTIVE_CINEMA_ACTION, CLOSE_ACTIVE_CINEMA_ACTION } from "../redux/constants/ManageFilmConst";

export default function SystemCinema(props) {
  const {
    listSystemCinema,
    showTimesByIdSystemCinema,
    showTimesByIdCinema,
    activeAction,
  } = useSelector((state) => state.StateManageFilm);

  const dispatch = useDispatch();
  const [renderShowTime, setRenderShowTime] = useState(true);
  
  const renderListSCinema = () => {
    return listSystemCinema.map((scinema, index) => {
      let active = "";
      if (index === 0) active = "active";
      return (
        <a
          className={`nav-link ${active}`}
          id="v-pills-home-tab"
          data-toggle="pill"
          href={`#${scinema.maHeThongRap}`}
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
          key={index}
          onClick={() => {
            const fetchDataShowTimes = async () => {
              dispatch(
                await getShowTimesByIdSystemCinemaApiAction(
                  `${scinema.maHeThongRap}`
                )
              );
            };

            dispatch({
              type: CLOSE_ACTIVE_CINEMA_ACTION,
            });

            fetchDataShowTimes();
            setRenderShowTime(true);
          }}
        >
          <img src={scinema.logo} alt={scinema.logo}></img>
          <span>{scinema.tenHeThongRap}</span>
        </a>
      );
    });
  };

  const renderCinemaBySCinema = () => {
    return showTimesByIdSystemCinema[0]?.lstCumRap?.map((cumRap, index) => {
      let active = activeAction === cumRap.maCumRap ? "active" : "";

      return (
        <div
          className={`systemCinema__cinema ${active}`}
          key={index}
          onClick={() => {
            dispatch(getShowTimesByIdCinemaAction(`${cumRap.maCumRap}`));
            dispatch({
              type: ACTIVE_CINEMA_ACTION,
              payload: cumRap.maCumRap,
            });
            setRenderShowTime(false);
          }}
        >
          <p className="systemCinema__cinema--name">
            <span className="systemCinema__cinema--highlight">
              {cumRap.tenCumRap.split(" - ", 1)}
            </span>{" "}
            - {cumRap.tenCumRap.split(" - ", 2)}
          </p>
          <p className="systemCinema__cinema--address">{cumRap.diaChi}</p>
        </div>
      );
    });
  };

  const renderShowTimesBySCinema = () => {
    return showTimesByIdSystemCinema[0]?.lstCumRap[0].danhSachPhim.map(
      (showTime, index) => {
        return (
          <div className="systemCinema__showTime" key={index}>
            <div className="systemCinema__showTime--block">
              <img
                className="systemCinema__showTime--image"
                src={showTime.hinhAnh}
                alt={showTime.hinhAnh}
              ></img>
              <div className="systemCinema__showTime--blockI">
                <p className="systemCinema__showTime--title">
                  {showTime.tenPhim}
                </p>
                <p className="systemCinema__showTime--description">
                  120 phút - 0 IMDb - 2D/Digital
                </p>
              </div>
            </div>
            <p className="systemCinema__showTime--caption">
              <i className="fa fa-asterisk"></i> Lịch Chiếu
            </p>
            <div className="systemCinema__showTime--content">
              {showTime.lstLichChieuTheoPhim.slice(0, 8).map((st, index) => {
                return (
                  <NavLink
                    className="systemCinema__showTime--item"
                    to={`/chitietphongve/${st.maLichChieu}`}
                    key={index}
                  >
                    {moment(st.ngayChieuGioChieu).format("hh:mm A")}
                  </NavLink>
                );
              })}
            </div>
          </div>
        );
      }
    );
  };

  const renderShowTimesByCinema = () => {
    return showTimesByIdCinema.map((showTime, index) => {
      return (
        <div className="systemCinema__showTime" key={index}>
          <div className="systemCinema__showTime--block">
            <img
              className="systemCinema__showTime--image"
              src={showTime.hinhAnh}
              alt={showTime.hinhAnh}
            ></img>
            <div className="systemCinema__showTime--blockI">
                <p className="systemCinema__showTime--title">
                  {showTime.tenPhim}
                </p>
                <p className="systemCinema__showTime--description">
                  120 phút - 0 IMDb - 2D/Digital
                </p>
            </div>
          </div>
          <p className="systemCinema__showTime--caption">
            <i className="fa fa-asterisk"></i> Lịch Chiếu
          </p>
          <div className="systemCinema__showTime--content">
            {showTime.lstLichChieuTheoPhim.slice(0, 8).map((st, index) => {
              return (
                <NavLink
                  className="systemCinema__showTime--item"
                  to={`/chitietphongve/${st.maLichChieu}`}
                  key={index}
                >
                  {moment(st.ngayChieuGioChieu).format("hh:mm A")}
                </NavLink>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="systemCinema" id="cum-rap">
        <div className="systemCinema__top">
          <h1 className="systemCinema__top--title">Hệ Thống Cụm Rạp</h1>
        </div>
        <div className="systemCinema__body">
          <div className="row">
            <div className="col-md-2">
              <div
                className="nav flex-column nav-pills systemCinema__listSCinema"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {renderListSCinema()}
              </div>
            </div>
            <div className="col-md-10">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                    <div className="col-md-4">
                      <div className="systemCinema__listCinema">
                        {renderCinemaBySCinema()}
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="systemCinema__listShowTimes">
                        {!renderShowTime && renderShowTimesByCinema()}
                        {renderShowTime && renderShowTimesBySCinema()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

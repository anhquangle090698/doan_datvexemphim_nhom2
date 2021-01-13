import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo-600x600_g2.png";
import "../assets/scss/main.scss";
import { postSignInAction } from "../redux/actions/ManageUserReducerAction";
import { ACCESS_TOKEN, USER_LOGIN } from "../Util/config";

export default function Header(props) {
  const { informationAccount, informationUserSignIn } = useSelector(
    (state) => state.StateManageUser
  );

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <header className="header">
        <NavLink to="/">
          <img className="header__logo" src={logo} alt="logo-G2" />
        </NavLink>

        <i
          className="fa fa-align-right header__toggle"
          onClick={() => {
            setShow(true);
          }}
        ></i>

        <nav className={show ? "header__nav show" : "header__nav"}>
          <div className="nav__content bd-grid">
            <i
              className="fa fa-times nav__close"
              onClick={() => {
                setShow(false);
              }}
            ></i>

            <div className="nav__perfil">
              <div className="nav__image">
                <img className="nav__image--logo" src={logo} alt="logo-G2" />
              </div>

              <div>
                <NavLink className="nav__title" to="/">
                  G2 Cinema
                </NavLink>
              </div>
            </div>

            <div className="nav__menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a
                    className="nav__link"
                    href="#lich-chieu"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    Lịch Chiếu
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    className="nav__link"
                    href="#cum-rap"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    Cụm Rạp
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    className="nav__link"
                    href="#tin-tuc"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    Tin Tức
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    className="nav__link"
                    href="#khuyen-mai"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    Khuyến Mãi
                  </a>
                </li>
                <li className="nav__item">
                  {informationUserSignIn.taiKhoan ? (
                    <NavLink className="nav__link log-out" to="/dang-xuat">
                    Đăng Xuất
                  </NavLink>
                  ) : ''}
                </li>
              </ul>
            </div>

            <div className="nav__user">
              <div className="nav__user--block">
                {informationUserSignIn.taiKhoan ? (
                  <div className="nav__user--dropdown">
                    <span className="nav__user--name">
                      Chào, {informationAccount.hoTen}
                    </span>
                    <div className="dropdown-content">
                      <NavLink
                        className="nav__logout"
                        to="/"
                        onClick={() => {
                          localStorage.removeItem(USER_LOGIN);
                          localStorage.removeItem(ACCESS_TOKEN);

                          dispatch(postSignInAction({}));
                        }}
                      >
                        Đăng xuất
                      </NavLink>
                    </div>
                  </div>
                ) : (
                  <NavLink to="/dang-nhap">
                    <button className="nav__user--button">
                      <i className="fa fa-user"></i>
                      <span className="nav__user--login" to="/dang-nhap">
                        Đăng nhập
                      </span>
                    </button>
                  </NavLink>
                )}
              </div>
              <div className="nav__user--block">
                {informationUserSignIn.taiKhoan ? (
                  <>
                    <NavLink
                      className="nav__user--information"
                      to="/thong-tin-ca-nhan"
                    >
                      Thông tin cá nhân
                    </NavLink>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

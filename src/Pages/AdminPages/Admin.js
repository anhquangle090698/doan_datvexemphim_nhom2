import React from "react";
import logo from "../../assets/img/logo-600x600_g2.png";
import "../../assets/css/AdminTemplate.css";
import { useSelector } from "react-redux";

export default function Admin() {

    const taiKhoan = useSelector(user => user.DangNhapReducer.userLogin.hoTen);

  return (
    <>
      <div className="admin-page">
        <img
          src={logo}
          alt={logo}
          className="logo-admin"
        />

        <h1 className="title-manage title-admin">Chào mừng {taiKhoan} đã quay trở lại G2 Admin</h1>
      </div>
    </>
  );
}

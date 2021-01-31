import React from "react";
import { Redirect, Route } from "react-router";
import { AdminTemplate } from "../Templates/AdminTemplate";
import { USER_LOGIN } from "../Utils/config";
import swal from "sweetalert2";
import { useSelector } from "react-redux";
import { DangNhapReducer } from "../redux/reducers/DangNhapReducer";

export default function Authentication(props) {
  console.log(props);

  const thongTinDangNhapReducer = useSelector(
    (state) => state.DangNhapReducer.userLogin
  );

  const { Component, ...restParam } = props;

  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        // let thongTinDangNhap = JSON.parse(localStorage.getItem(USER_LOGIN));
        // console.log(thongTinDangNhap);

        if (
          thongTinDangNhapReducer &&
          thongTinDangNhapReducer.maLoaiNguoiDung === "QuanTri"
        ) {
          return <Component {...propsRoute} />;
        } else if (
          thongTinDangNhapReducer &&
          thongTinDangNhapReducer.maLoaiNguoiDung === "KhachHang"
        ) {
          swal.fire({
            title: "Bạn không đủ quyền truy cập ADMIN",
            timer: 2500,
            icon: "error",
            confirmButtonColor: "orange",
          });
          return <Redirect to="/dang-nhap" />;
        } else {
          swal.fire({
            title: "Bạn phải đăng nhập trước khi vào ADMIN",
            timer: 2500,
            icon: "error",
            width: 650,
            confirmButtonColor: "orange",
          });

          return <Redirect to="/dang-nhap" />;
        }
      }}
    />
  );
}

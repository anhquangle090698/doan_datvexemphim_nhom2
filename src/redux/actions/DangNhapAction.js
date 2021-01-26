import axios from "axios";
import { history } from "../../Utils/history";
import swal from "sweetalert2";
import { DANG_NHAP_ACTION } from "../const/AdminCinemaConst";
import { ACCESS_TOKEN, USER_LOGIN } from "../../Utils/config";

export const DangNhapAction = (userLogin) => {
  return (dispatch) => {
    var promise = axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: userLogin,
    });
    promise.then((res) => {
      // lưu thông tin user vào localStorage
      localStorage.setItem(USER_LOGIN, JSON.stringify(res.data));
      localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
      // sweetalert popup thông báo thành công
      let timerInterval;
      swal.fire({
        title: "Đăng Nhập Thành Công!",
        html: "Chuyển về trang ADMIN sau 3s",
        timer: 2500,
        timerProgressBar: true,
        icon: "success",
        confirmButtonColor: "orange",
        didOpen: () => {
          swal.showLoading();
          timerInterval = setInterval(() => {}, 100);
        },
        willClose: () => {
          history.goBack();
          clearInterval(timerInterval);
        },
      });
      dispatch(dangNhapApi(res.data));
    });
    promise.catch((err) => {
      console.log(err.response.data);
      swal.fire({
        title: "Đăng Nhập Thất Bại!",
        html: "Kiểm Tra Lại Thông Tin Đăng Nhập!!!",
        timer: 2000,
        icon: "error",
        confirmButtonColor: "orange",
        showConfirmButton: true,
      });
    });
  };
};

export const dangNhapApi = (userLogin) => {
  return {
    type: DANG_NHAP_ACTION,
    userLogin: userLogin,
  };
};

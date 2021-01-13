import Axios from "axios";
import Swal from "sweetalert2";
import { ACCESS_TOKEN, USER_LOGIN } from "../../Util/config";
import { history } from "../../Util/history";
import { POST_INFORMATION_ACCOUNT, POST_SIGN_IN } from "../constants/ManageUserConst";

//action gọi api đăng ký
export const postSignUpApiAction = async (informationSignUp) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        method: "POST",
        data: informationSignUp,
      });

      console.log(result.data);
    } catch (error) {
    //   console.log(error);
    }
  };
};

//action gọi api đăng nhập
export const postSignInApiAction = async (informationSignIn) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: informationSignIn,
      });

      //send data dispatch action reducer
      dispatch(await postSignInAction(result.data));

      //save data to local storage
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));

      //save token to local storage
      localStorage.setItem(ACCESS_TOKEN, result.data.accessToken);

      dispatch(await postInformationAccountApiAction({
                taiKhoan: result.data.taiKhoan,
      }));

      Swal.fire({
        icon: "success",
        title: "Đăng nhập thành công",
        text: "Chào mừng đến với G2 Cinema!",
      });

      setTimeout(() => {history.goBack()},1000);
      

    } catch (error) {
      // console.log(error.response.data);

      Swal.fire({
        icon: "error",
        title: "Tài khoản hoặc mật khẩu không đúng",
        text: "Vui lòng kiểm tra lại!",
      });
    }
  };
};

//action gọi api chỉnh sửa thông tin người dùng
export const putUpdateUserApiAction = async (editInformationUser) => {
  return async (dispatch) => {
      try {
        
        let result = await Axios({
          url : 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
          method : 'PUT',
          data : editInformationUser,
          headers : {
            'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
          }
        });

        dispatch(await postInformationAccountApiAction({
          taiKhoan: result.data.taiKhoan,
        }));

        Swal.fire({
          icon: "success",
          title: "Cập nhật thông tin thành công",
        });
        
        history.push("/");
        
        history.push("/thong-tin-ca-nhan");

      } catch (error) {
          console.log(error);
      }
  }
}

//action gọi api chỉnh sửa thông tin người dùng
export const postInformationAccountApiAction = async (accountName) => {
  return async (dispatch) => {

      try {
        
        let result = await Axios({
          url : 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
          method : 'POST',
          data : accountName,
        });

        dispatch(await postInformationAccountAction(result.data));

      } catch (error) {
        console.log(error.response);
      }
  }
}

//Action dispatch reducer
export const postSignInAction = (informationUserSignIn) => {
  return {
    type: POST_SIGN_IN,
    payload: informationUserSignIn,
  };
};


export const postInformationAccountAction = (informationAccount) => {
  return {
    type : POST_INFORMATION_ACCOUNT,
    payload : informationAccount
  }
}
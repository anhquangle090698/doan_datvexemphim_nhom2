import axios from "axios";
import { ACCESS_TOKEN } from "../../Utils/config";
import {
  LAY_DANH_SACH_PHIM_ACTION,
  LAY_HE_THONG_CUM_RAP_ACTION,
  LAY_HE_THONG_RAP_ACTION,
  MA_PHIM_CHINH_SUA_ACTION,
  THEM_PHIM_MOI_ACTION,
} from "../const/AdminCinemaConst";
import swal from "sweetalert2";
import { history } from "../../Utils/history";

export const layDanhSachPhimApiAction = () => {
  return (dispatch) => {
    let promise = axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
      method: "GET",
    });
    promise.then((res) => {
      dispatch(layDanhSachPhimApi(res.data));
    });
    promise.catch((err) => {
      console.log(err.response.data);
    });
  };
};

export const layDanhSachPhimApi = (dataPhim) => {
  return {
    type: LAY_DANH_SACH_PHIM_ACTION,
    dsPhim: dataPhim,
  };
};

export const themPhimMoiApiAction = (form_data) => {
  console.log(form_data);
  return (dispatch) => {
    let promise = axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/quanlyphim/ThemPhimUploadHinh",
      method: "POST",
      data: form_data,
    });
    promise.then((res) => {
      dispatch(themPhimMoiApi(res.data));
      swal.fire({
        title: "Thêm Phim Thành Công!",
        timer: 2500,
        icon: "success",
        confirmButtonColor: "orange",
      });
    });
    promise.catch((err) => {
      console.log(err.response.data);
      swal.fire({
        title: "Thêm Phim Thất Bại!",
        icon: "error",
        confirmButtonColor: "orange",
      });
    });
  };
};

export const themPhimMoiApi = (phim) => {
  return {
    type: THEM_PHIM_MOI_ACTION,
    phim: phim,
  };
};

export const xoaPhimApiAction = async (MaPhim) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${MaPhim}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer  " + localStorage.getItem(ACCESS_TOKEN),
        },
      });

      if ((await result).status !== 500) {
        dispatch(await layDanhSachPhimApiAction());
        swal.fire({
          title: "Xóa Thành Công!",
          timer: 2500,
          icon: "success",
          confirmButtonColor: "orange",
        });
      } else {
        swal.fire({
          title: "Xóa Thất Bại!",
          icon: "error",
          confirmButtonColor: "orange",
        });
      }
    } catch (err) {
      if ( err == 'Error: Network Error' ) {
        dispatch(await layDanhSachPhimApiAction());
        swal.fire({
          title: "Xóa Thành Công!",
          timer: 2500,
          icon: "success",
          confirmButtonColor: "orange",
        });
      } else {
        swal.fire({
          title: "Xóa Thất Bại!",
          icon: "error",
          confirmButtonColor: "orange",
        });
      }
    }
  };
};

export const MaPhimChinhSuaAction = (maPhim) => {
  return {
    type: MA_PHIM_CHINH_SUA_ACTION,
    maPhim: maPhim,
  };
};

export const ChinhSuaPhimActionApi = async (form_data) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
        method: "POST",
        data: form_data,
        headers: {
          Authorization: "Bearer  " + localStorage.getItem(ACCESS_TOKEN),
        },
      });
      if ((await result).status !== 500) {
        dispatch(layDanhSachPhimApiAction());
        swal.fire({
          title: "Chỉnh Sửa Thành Công!",
          timer: 2500,
          icon: "success",
          confirmButtonColor: "orange",
        });
      } else {
        swal.fire({
          title: "Chỉnh Sửa Thất Bại!",
          icon: "error",
          confirmButtonColor: "orange",
        });
      }
    } catch (err) {
      swal.fire({
        title: "Chỉnh Sửa Thất Bại!",
        icon: "error",
        confirmButtonColor: "orange",
      });
    }
  };
};

export const layThongTinHeThongRapActionApi = () => {
  return dispatch => {
    try {
      let result = axios({
        url:'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
        method:'GET'
      });
      result.then((res)=>{
        dispatch(layThongTinHeThongRapAction(res.data))
      });
      result.catch((err)=>{
        console.log(err.response.data);
      });
    } catch (error) {
      console.log(error.response.data);
    }
  }
}

export const layThongTinHeThongRapAction = (data) =>{
  return{
    type:'LAY_HE_THONG_RAP_ACTION',
    data
  }
}

export const layThongTinHeThongCumRapActionApi = (name) => {
  return (dispatch) => {
    try {
      let result = axios({
        url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${name}`,
        method:'GET'
      });
      result.then((res)=>{
        dispatch(layThongTinHeThongCumRapAction(res.data));
      });
      result.catch((err)=>{
        console.log(err.response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export const layThongTinHeThongCumRapAction = (data) => {
  return {
    type: LAY_HE_THONG_CUM_RAP_ACTION,
    data
  }
}
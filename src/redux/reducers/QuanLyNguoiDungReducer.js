import { LAY_DANH_SACH_NGUOI_DUNG_ACTION,TAI_KHOAN_NGUOI_DUNG_ACTION,THEM_NGUOI_DUNG_MOI_ACTION } from "../const/AdminCinemaConst";

const stateDefault = {
  danhSachNguoiDung: [],
  user: {},
  taiKhoan:{},
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    
    case LAY_DANH_SACH_NGUOI_DUNG_ACTION: {
      state.danhSachNguoiDung = action.dsNguoiDung;
      return { ...state };
    }

    case THEM_NGUOI_DUNG_MOI_ACTION: {
      state.user = action.user;

      //push user vào dsND

      return { ...state };
    }

    case TAI_KHOAN_NGUOI_DUNG_ACTION: {
      state.taiKhoan = action.taiKhoan;
      return { ...state }
    }

    default: 
    return {...state};
  }
};

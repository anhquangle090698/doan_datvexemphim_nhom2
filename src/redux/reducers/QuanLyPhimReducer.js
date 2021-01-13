import {
  LAY_DANH_SACH_PHIM_ACTION,
  LAY_DANH_SACH_NGUOI_DUNG_ACTION,
  THEM_PHIM_MOI_ACTION,
  XOA_PHIM_ACTION
} from "../const/CinemaConst";

const stateDefault = {
  danhSachPhim: [],
  // chiTietPhim: [],
  danhSachNguoiDung: [],
  phimMoi: {},
  MaPhim:{}
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_PHIM_ACTION: {
      state.danhSachPhim = action.dsPhim;
      return { ...state };
    }

    case LAY_DANH_SACH_NGUOI_DUNG_ACTION: {
      state.danhSachNguoiDung = action.dsNguoiDung;
      return { ...state };
    }

    case THEM_PHIM_MOI_ACTION: {
      state.phimMoi = action.phim;
      return {...state};
    }

    

    default:
      return { ...state };
  }
};

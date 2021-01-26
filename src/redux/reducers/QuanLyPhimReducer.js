import {
  LAY_DANH_SACH_PHIM_ACTION,
  MA_PHIM_CHINH_SUA_ACTION,
  THEM_PHIM_MOI_ACTION,
} from "../const/AdminCinemaConst";

const stateDefault = {
  danhSachPhim: [],
  MaPhimChinhSua: {},
};





export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_PHIM_ACTION: {
      state.danhSachPhim = action.dsPhim;
      return { ...state };
    }

    case THEM_PHIM_MOI_ACTION: {
      let danhSachPhimUpdate = [...state.danhSachPhim];
      danhSachPhimUpdate.push(action.phim);
      state.danhSachPhim = danhSachPhimUpdate;
      return { ...state };
    }

    case MA_PHIM_CHINH_SUA_ACTION: {

      state.MaPhimChinhSua = action.maPhim;

      return { ...state };
    }

    default:
      return { ...state };
  }
};

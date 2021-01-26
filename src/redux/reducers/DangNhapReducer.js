import { DANG_NHAP_ACTION } from "../const/AdminCinemaConst";

const stateDefault = {
  userLogin: {},
};

localStorage.getItem("USER_LOGIN")
  ? (stateDefault.userLogin = JSON.parse(localStorage.getItem("USER_LOGIN")))
  : (stateDefault.userLogin = {});

export const DangNhapReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      state.userLogin = action.userLogin;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

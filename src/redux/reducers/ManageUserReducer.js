import { USER_LOGIN } from "../../Util/config";
import { POST_INFORMATION_ACCOUNT, POST_SIGN_IN } from "../constants/ManageUserConst";

let userSignInStorage = {};

localStorage.getItem(USER_LOGIN)
  ? (userSignInStorage = JSON.parse(localStorage.getItem(USER_LOGIN)))
  : (userSignInStorage = {});

const stateInit = {
  informationUserSignIn: userSignInStorage,
  informationAccount : {},
};

const ManageUserReducer = (state = stateInit, action) => {
  switch (action.type) {
    case POST_SIGN_IN: {
      state.informationUserSignIn = action.payload;

      return { ...state };
    }

    case POST_INFORMATION_ACCOUNT : {
      state.informationAccount = action.payload;

      return { ...state }
    }

    default:
      return { ...state };
  }
};

export default ManageUserReducer;

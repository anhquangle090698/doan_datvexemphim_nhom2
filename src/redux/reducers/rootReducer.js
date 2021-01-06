import { combineReducers } from "redux";
import ManageFilmReducer from "./ManageFilmReducer";
import  ManageLogicReducer  from "./ManageLogicReducer";
import ManageUserReducer from "./ManageUserReducer";

export const rootReducer = combineReducers({
    StateManageLogic : ManageLogicReducer,
    StateManageFilm : ManageFilmReducer,
    StateManageUser : ManageUserReducer,
});

import { HANDLE_LOGIC_POPUP_CLOSE, HANDLE_LOGIC_POPUP_OPEN } from "../constants/ManageLogicConst";

const stateInit = {
    popup : {
        srcVideo : '',
        active : '',
    }
}

const ManageLogicReducer = ( state = stateInit, action ) => {

    switch (action.type) {
        case HANDLE_LOGIC_POPUP_OPEN : {
            let popupUpdate = { ...state.popup };

            popupUpdate.srcVideo = action.srcVideo;
            popupUpdate.active = action.active;

            state.popup = popupUpdate;

            return { ...state };
        }

        case HANDLE_LOGIC_POPUP_CLOSE : {
            let popupUpdate = { ...state.popup };

            popupUpdate.srcVideo = '';
            popupUpdate.active = '';

            state.popup = popupUpdate;

            return { ...state };
        }
            
        default: 
            return { ...state };
    }
}

export default ManageLogicReducer;
import { HANDLE_LOGIC_POPUP_CLOSE, HANDLE_LOGIC_POPUP_OPEN } from "../constants/ManageLogicConst"

export const handleLogicPopupAction = (srcVideo, active) => {
    return {
        type: HANDLE_LOGIC_POPUP_OPEN,
        srcVideo,
        active,
    }
}

export const handleLogicPopupCloseAction = () => {
    return {
        type : HANDLE_LOGIC_POPUP_CLOSE,
    }
}

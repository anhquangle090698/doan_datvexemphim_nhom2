import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleLogicPopupCloseAction } from '../redux/actions/ManageLogicReducerActions';

export default function Popup(props) {

    let { popup } = useSelector(state => state.StateManageLogic);
    let dispatch = useDispatch();

    return (
        <>
            <div className={`popup ${popup.active}`}  onClick={() => {
                dispatch(handleLogicPopupCloseAction());
            }}>
                <div className="popup__content">
                    <div className="popup__content--close" onClick={() => {
                        dispatch(handleLogicPopupCloseAction());
                    }}>
                        <i className="fa fa-times"></i>
                    </div>
                    <iframe width="900" height="600" src={popup.srcVideo} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                </div>
            </div>   
        </>
    )
}

import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "../assets/scss/main.scss";
import { handleLogicPopupAction } from '../redux/actions/ManageLogicReducerActions';

export default function Movie(props) {
    
    //get information a film from list film
    const { phim } = props;

    let dispatch = useDispatch();

    return (
        <>
            <div className="movie__content">
                <div className="movie__image">
                    <img src={phim.hinhAnh} alt={phim.hinhAnh}></img>
                    <div className="movie__overlayImg">
                        <i className="fa fa-play movie__iconPlay" onClick={() => {
                            dispatch(handleLogicPopupAction(`${phim.trailer}`,"active"));
                        }}></i>
                    </div>  
                    <span className="movie__rating">
                        <p className="movie__rating--text">Đánh Giá</p>
                        <p className="movie__rating--number">{phim.danhGia}</p>
                    </span>
                </div>
                <div className="movie__info">
                    <p className="movie__info--title">{phim.tenPhim}</p>
                    <div className="movie__overlayTitle">
                        <div className="movie__overlayTitle--block">
                            <NavLink className="" to={`/lich-chieu-${(phim.tenPhim).toLowerCase().split(' ').join('-')}/${phim.maPhim}`}>
                                <button className="movie__button--orange">Mua Vé</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}

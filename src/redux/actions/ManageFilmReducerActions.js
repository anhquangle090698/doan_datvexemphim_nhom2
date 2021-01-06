import Axios from "axios"
import { GET_DETAIL_MOVIE_BY_ID_FILM, GET_ALL_FILM_ACTION, GET_ALL_SYSTEM_CINEMA_ACTION, GET_SHOW_TIMES_BY_ID_CINEMA_ACTION, GET_SHOW_TIMES_BY_ID_SYSTEM_CINEMA_ACTION, GET_DETAIL_TICKET_ROOM_BY_ID_SHOW_TIMES } from "../constants/ManageFilmConst";

//action gọi api lấy danh sách phim (không dispatch trực tiếp lên reducer)
export const getAllFilmApiAction = async () => {
    return async (dispatch) => {
        //action trả về hàm có tham số dispatch

        try {
            //Gọi api get all film

            let result = await Axios({
                url : "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
                method : "GET",
            });

            //After get data all film will dispatch reducer update data to list film
            
            dispatch(getAllFilmAction(result.data));

        } catch (error) {
            console.log(error);
        }
    }
}


//action gọi api lấy thông tin hệ thống rạp
export const getAllSystemCinemaApiAction = async () => {
    return async (dispatch) => {
        try {
            //gọi api get thông tin hệ thống rạp

            let result = await Axios({
                url : 'http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
                method : "GET",
            });

            dispatch(getAllSystemCinemaAction(result.data));

        } catch (error) {
            console.log(error);
        }
    }
}

//action gọi api lấy thông tin lịch chiếu theo mã hệ thống rạp
export const getShowTimesByIdSystemCinemaApiAction = async (maHeThongRap) => {
    return async (dispatch) => {
        try {
            
            let result = await Axios({
                url : `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP02`,
                method : 'GET',
            });

            dispatch(getShowTimesByIdSystemCinemaAction(result.data));
            
        } catch (error) {
            console.log(error);
        }
    }
}

//action gọi api lấy thông tin chi tiết phim theo mã phim
export const getDetailMovieByIdFilmApiAction = async (maPhim) => {
    return async (dispatch) => {
        try {
            
            let result = await Axios({
                url : `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method : 'GET',
            });

            dispatch(getDetailMovieByIdFilmAction(result.data));
        } catch (error) {
            console.log(error);
        }
    }
}

//action gọi api láy thông tin chi tiết phòng vé theo mã lịch chiếu
export const getDetailTicketRoomByIdShowTimeApiAction = async (maLichChieu) => {
    return async (dispatch) => {
        try {
            
            let result = await Axios({
                url : `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method : 'GET',
            });

            dispatch(getDetailTicketRoomByIdShowTimeAction(result.data));
            
        } catch (error) {
            console.log(error.response.data);
        }
    }
}

//Action dispatch reducer
export const getAllFilmAction = (dataFilm) => {
    return {
        type : GET_ALL_FILM_ACTION,
        payload : dataFilm,
    }
}

export const getAllSystemCinemaAction = (dataSCinema) => {
    return {
        type : GET_ALL_SYSTEM_CINEMA_ACTION,
        payload : dataSCinema,
    }
}

export const getShowTimesByIdSystemCinemaAction = (dataMovieTimes) => {
    return {
        type : GET_SHOW_TIMES_BY_ID_SYSTEM_CINEMA_ACTION,
        payload : dataMovieTimes,
    }
}

export const getShowTimesByIdCinemaAction = (maCumRap) => {
    return {
        type : GET_SHOW_TIMES_BY_ID_CINEMA_ACTION,
        payload : maCumRap,
    }
} 

export const getDetailMovieByIdFilmAction = (detailMovie) => {
    return {
        type: GET_DETAIL_MOVIE_BY_ID_FILM,
        payload : detailMovie,
    }
}

export const getDetailTicketRoomByIdShowTimeAction = (detailTicketRoom) => {
    return {
        type : GET_DETAIL_TICKET_ROOM_BY_ID_SHOW_TIMES,
        payload : detailTicketRoom,
    }
}
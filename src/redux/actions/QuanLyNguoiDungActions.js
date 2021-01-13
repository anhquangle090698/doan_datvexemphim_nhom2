import axios from 'axios';
import { LAY_DANH_SACH_NGUOI_DUNG_ACTION } from '../const/CinemaConst';

export const layDanhSachNguoiDungApiAction =() =>{
    return dispatch => {
        var promise = axios({
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02',
            method:'GET',
        });
        promise.then((res)=>{
            dispatch(layDanhSachNguoiDungApi(res.data))
        })
        promise.catch((err)=>{
            console.log(err.response.data);
        })
    }
}

export const layDanhSachNguoiDungApi = (data) => {
    return {
        type: LAY_DANH_SACH_NGUOI_DUNG_ACTION,
        dsNguoiDung: data,
    }
}
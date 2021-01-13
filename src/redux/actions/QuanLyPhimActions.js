import axios from 'axios';
import {LAY_DANH_SACH_PHIM_ACTION, THEM_PHIM_MOI_ACTION, XOA_PHIM_ACTION} from '../const/CinemaConst';

export const layDanhSachPhimApiAction = () => {
    return dispatch => {
        var promise  = axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02',
            method: 'GET',
        });
        promise.then((res) => {
            dispatch(layDanhSachPhimApi(res.data))
        })
        promise.catch((err) => {
            console.log(err.response.data);
        })
    }
}

export const layDanhSachPhimApi = (dataPhim) => {
    return {
        type: LAY_DANH_SACH_PHIM_ACTION,
        dsPhim: dataPhim,
    }
}

export const themPhimMoiApiAction = (form_data) => {
    return dispatch => {
        var promise = axios({
                url: 'http://movie0706.cybersoft.edu.vn/api/quanlyphim/ThemPhimUploadHinh',
                method: 'POST',
                data: form_data,
            })
            promise.then(res => {
                dispatch(themPhimMoiApi(res.data));
                console.log("them thanh cong");
            })
            promise.catch(err => {
                console.log(err.response.data);
        })
    }
}

export const themPhimMoiApi = (phim) => {
    return {
        type: THEM_PHIM_MOI_ACTION,
        phim: phim,
    }
}

export const xoaPhimApiAction = (MaPhim) => {
    return dispatch => {
        var promise = axios({
                url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${MaPhim}`,
                method: 'DELETE',
                headers:{"Authorization": "Bearer  " +  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYW5ocXVhbmdtb3ZpZWUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJLaGFjaEhhbmciLCJuYmYiOjE2MDk5MTUzODgsImV4cCI6MTYwOTkxODk4OH0.5ofiM_mz5f3CKGQfWQUXbWDx_y06fRDJKVeNSYA-CkQ'}
            })
            promise.then(res => {
                dispatch(themPhimMoiApi(res.data));
                console.log("xoa thanh cong");
            })
            promise.catch(err => {
                console.log(err.response.data);
        })
    }
}



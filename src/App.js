import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
// import QuanLyTemplate from './Templates/QuanLyTemplate';
import { AdminTemplate } from './Templates/AdminTemplate'
import QuanLyPhim from './Pages/AdminPages/QuanLyPhim';
import QuanLyNguoiDung from './Pages/AdminPages/QuanLyNguoiDung';
import ThemPhimMoi from './Pages/ThemPhimMoi';
import ThemNguoiDungMoi from './Pages/ThemNguoiDungMoi';
import DangNhap from './Pages/Login/DangNhap';
import Admin from './Pages/AdminPages/Admin';
import Authentication from './Pages/Authentication';
import QuanLyLichChieu from './Pages/AdminPages/QuanLyLichChieu';


function App() {
  return (
    <Switch>
      <AdminTemplate exact path='/admin' Component={Admin}/>
      <AdminTemplate exact path='/admin/quan-ly-phim' Component={QuanLyPhim}/>
      <AdminTemplate exact path='/admin/quan-ly-nguoi-dung' Component={QuanLyNguoiDung}/>
      <AdminTemplate exact path='/admin/them-phim' Component={ThemPhimMoi}/>
      <AdminTemplate exact path='/admin/them-nguoi-dung' Component={ThemNguoiDungMoi}/>
      <AdminTemplate exact path='/admin/quan-ly-lich-chieu' Component={QuanLyLichChieu}/>
      <Route exact path='/dang-nhap' component={DangNhap}/>
      <Redirect to="/admin"/>
    </Switch>
  );
}

export default App;

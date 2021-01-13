import { Redirect, Switch } from 'react-router-dom';
import './App.css';
// import QuanLyTemplate from './Templates/QuanLyTemplate';
import { AdminTemplate } from './Templates/AdminTemplate'
import QuanLyPhim from './Pages/AdminPages/QuanLyPhim';
import QuanLyNguoiDung from './Pages/AdminPages/QuanLyNguoiDung';
import ThemPhimMoi from './Components/ThemPhimMoi';
import ThemNguoiDungMoi from './Components/ThemNguoiDungMoi';


function App() {
  return (
    
    <Switch>
      <AdminTemplate exact path='/admin' Component={QuanLyPhim}/>
      <AdminTemplate exact path='/admin/quan-ly-phim' Component={QuanLyPhim}/>
      <AdminTemplate exact path='/admin/quan-ly-nguoi-dung' Component={QuanLyNguoiDung}/>
      <AdminTemplate exact path='/admin/them-phim' Component={ThemPhimMoi}/>
      <AdminTemplate exact path='/admin/them-nguoi-dung' Component={ThemNguoiDungMoi}/>
      <Redirect to="/admin"/>
    </Switch>
  
    
  );
}

export default App;

import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Authentication from "./Components/Authentication";


const Home  = lazy(() => import('./Pages/ClientPages/Home'));
const ShowingFilm = lazy(() => import('./Pages/ClientPages/ShowingFilm'));
const DetailMovie = lazy(() => import('./Pages/ClientPages/DetailMovie'));
const SignInUp = lazy(() => import('./Pages/ClientPages/SignInUp'));
const TicketRoom = lazy(() => import('./Pages/ClientPages/TicketRoom'));
const InformationUser = lazy(() => import('./Pages/ClientPages/CustomerInformation'));


function App() {
  return (
    <>
      <Suspense fallback={
        <div>Loading 111</div>
        // setTimeout(() => {
          
        // },1500)
      }>
      
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/phim-dang-chieu" exact component={ShowingFilm}></Route>
          <Route path="/lich-chieu-:tenPhim/:maPhim" exact component={DetailMovie}></Route>
          <Route path="/dang-nhap" exact component={SignInUp}></Route>
          <Route path='/thong-tin-ca-nhan' exact component={InformationUser}></Route>

          <Authentication path="/chitietphongve/:maLichChieu" exact Component={TicketRoom}></Authentication>
          <Authentication path="/chitietphongve/:maLichChieu" exact Component={SignInUp}></Authentication>

          <Redirect to="/"></Redirect>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;

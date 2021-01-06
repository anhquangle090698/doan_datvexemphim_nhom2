import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailFilm from "../../Components/DetailFilm";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Popup from "../../Components/Popup";
import LoadingPage from '../../Components/LoadingPage'
import ScrollToTop from "../../Components/ScrollToTop";
import { getDetailMovieByIdFilmApiAction } from "../../redux/actions/ManageFilmReducerActions";

export default function DetailMovie(props) {
  const { detailMovie } = useSelector((state) => state.StateManageFilm);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(detailMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    const maPhim = props.match.params.maPhim;

    const fetchDataDetailFilm = async () => {
      dispatch(await getDetailMovieByIdFilmApiAction(maPhim));
    };

    fetchDataDetailFilm();
  },[]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="homePage">
          <LoadingPage></LoadingPage>
        </div>
      ) : (
        <div className="detailMoviePage">
          <Header></Header>

          <DetailFilm detailMovie={detailMovie}></DetailFilm>
          <Footer></Footer>

          <ScrollToTop></ScrollToTop>
          <Popup></Popup>
        </div>
      )}
    </>
  );
}

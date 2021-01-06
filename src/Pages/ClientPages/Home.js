import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Carousel from "../../Components/Carousel";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import ListMovies from "../../Components/ListMovies";
import LoadingPage from "../../Components/LoadingPage";
import News from "../../Components/News";
import Popup from "../../Components/Popup";
import Promotion from "../../Components/Promotion";
import ScrollToTop from "../../Components/ScrollToTop";
import SystemCinema from "../../Components/SystemCinema";
import TopFilms from "../../Components/TopFilms";
import {
  getAllFilmApiAction,
  getAllSystemCinemaApiAction,
  getShowTimesByIdSystemCinemaApiAction,
} from "../../redux/actions/ManageFilmReducerActions";

export default function Home(props) {
  let dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  //Api get list film
  useEffect(() => {
    const fetchDataFilm = async () => {
      dispatch(await getAllFilmApiAction());
    };

    fetchDataFilm();
  }, []);

  //Api get list system cinema
  useEffect(() => {
    const fetchDataSCinema = async () => {
      dispatch(await getAllSystemCinemaApiAction());
    };

    fetchDataSCinema();
  }, []);

  useEffect(() => {
    const fetchDataShowTimes = async () => {
      dispatch(await getShowTimesByIdSystemCinemaApiAction("BHDStar"));
    };

    fetchDataShowTimes();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="homePage">
          <LoadingPage></LoadingPage>
        </div>
      ) : (
        <div className="homePage">
          <Header></Header>
          <Carousel></Carousel>
          <ListMovies></ListMovies>
          <SystemCinema></SystemCinema>
          <TopFilms></TopFilms>
          <News></News>
          <Promotion></Promotion>
          <Footer></Footer>

          <Popup></Popup>
          <ScrollToTop></ScrollToTop>
        </div>
      )}
    </>
  );
}

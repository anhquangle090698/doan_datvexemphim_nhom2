import React from 'react'
import { useSelector } from 'react-redux';
import "../assets/scss/main.scss";
import Movie from './Movie';

export default function ListMoviesShowing(props) {

    let { listFilm } = useSelector(state => state.StateManageFilm);

    const renderListFilmShowing = () => {
        return listFilm.map((film, index) => {
          return <div className="col-sm-6 col-md-3" key={index}>
              <Movie phim = {film} ></Movie>
          </div>
        });
      }

    return (
        <>
          <div className="listMovies">
            <div className="listMovies__top">
              <h1 className="listMovies__top--title">Phim Đang Chiếu</h1>
            </div>
            <div className="listMovies__body">
                <div className="row">
                    {renderListFilmShowing()}
                </div>
            </div>
          </div>
        </>
      );
}

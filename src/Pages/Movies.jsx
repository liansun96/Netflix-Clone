import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import {
  useGetMovieImageQuery,
  useGetMovieQuery,
  useGetTvQuery,
} from "../redux/api/movieApi";
import { BsPlayFill } from "react-icons/bs";
import { BiInfoCircle } from 'react-icons/bi'
import MovieNav from "../components/Movie/MovieNav";
import Movie from "../components/Movie/Movie";
import NowPlayingMovie from "../components/Movie/NowPlayingMovie";
import PopularMovie from "../components/Movie/PopularMovie";
import TopRatedMovie from "../components/Movie/TopRatedMovie";
import { ToggleContext } from "../Context/ToggleProvider";
import MovieDetail from "../components/Movie/MovieDetail";
import PlayMovie from "../components/Movie/PlayMovie";

const Movies = () => {
  const {
    handleGetId,
    modal,
    toggleModal,
    playMovieModal,
    togglePlayMovieModal,
    genreId,
  } = useContext(ToggleContext);
  const [movie, setMovie] = useState([]);
  const { data } = useGetMovieQuery({ genreId });
  console.log(data?.results);

  const movieId = movie?.id;
  const { data: detailImage } = useGetMovieImageQuery({ movieId });
  console.log(detailImage?.logos[0]?.file_path);

  useEffect(() => {
    setMovie(
      data?.results[Math.floor(Math.random() * data?.results?.length - 1)]
    );
  }, [data]);

  const handelDetail = () => {
    toggleModal();
    handleGetId(movie?.id);
  };

  const handelPlay = () => {
    togglePlayMovieModal();
    handleGetId(movie?.id);
  };

  if (modal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  return (
    <div>
      <MovieNav />
      <div className="bg-[#141414]">
        <div className="overflow-hidden">
          <header
            className="h-screen w-full shadow-inner hidden lg:block"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("https:/image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              backgroundPosition: "center center",
            }}
          >
            <div className="flex flex-col gap-5 items-start justify-end w-full h-full pb-40 pl-12">
              <img
                className="w-[350px]"
                src={`https://www.themoviedb.org/t/p/original/${detailImage?.logos[0]?.file_path}`}
                alt=""
              />
              <h1 className="w-[600px] text-white drop-shadow-2xl font-semibold">
                {movie?.overview?.length > 200
                  ? movie?.overview?.slice(
                      0,
                      movie?.overview?.indexOf(".", 200) + 1
                    )
                  : movie?.overview}
              </h1>
              <div className="flex items-center gap-3">
                <button
                  onClick={handelPlay}
                  className="flex items-center px-6 h-12 bg-slate-50 hover:bg-slate-200 duration-300 rounded text-lg text-black font-semibold custom-btn-bg"
                >
                  <span className="">
                    <BsPlayFill className="text-4xl" />
                  </span>
                  Play
                </button>
                <button
                  onClick={handelDetail}
                  className="flex items-center gap-2 px-6 h-12 bg-opacity-60 bg-gray-500 hover:bg-opacity-60 hover:bg-gray-700 duration-300 rounded text-lg text-gray-100 font-semibold custom-btn-bg"
                >
                  <span className="">
                    <BiInfoCircle className="text-4xl" />
                  </span>
                  More Info
                </button>
              </div>
            </div>
          </header>
          <div className="category-bg pt-20 lg:pt-0 lg:-translate-y-10">
            <div className="w-[95%] mx-auto lg:pb-10 lg:-translate-y-14">
              <Movie />
              <PopularMovie />
              <NowPlayingMovie />
              <TopRatedMovie />
            </div>
          </div>
          <Footer />
        </div>
      </div>
      {modal && <MovieDetail />}
      {playMovieModal && <PlayMovie />}
    </div>
  );
};

export default Movies;

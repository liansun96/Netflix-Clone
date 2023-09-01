import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import {
  useGetMovieImageQuery,
  useGetNowPlayingQuery,
} from "../redux/api/movieApi";
import { BsPlayFill, BsInfoCircle } from "react-icons/bs";
import NowPlaying from "../components/NowPlaying";
import TopRated from "../components/TopRated";
import { ToggleContext } from "../Context/ToggleProvider";
import MovieDetail from "../components/MovieDetail";
import PlayMovie from "../components/PlayMovie";
import LatestNav from "../components/LatesNav";

const Latest = () => {
  const {
    handleGetId,
    modal,
    toggleModal,
    playMovieModal,
    togglePlayMovieModal,
  } = useContext(ToggleContext);

  const [movie, setMovie] = useState([]);
  const { data } = useGetNowPlayingQuery();
  console.log(data?.results);

  const id = movie?.id;

  const { data: detailImage } = useGetMovieImageQuery({ id });
  console.log(detailImage?.logos[0]?.file_path);

  useEffect(() => {
    setMovie(data?.results[Math.floor(Math.random() * data?.results?.length)]);
  }, [data]);

  const handelDetail = () => {
    toggleModal();
    handleGetId(movie?.id);
  };

  const handelPlay = () => {
    togglePlayMovieModal();
    handleGetId(movie?.id);
  };

  return (
    <div className="">
      <LatestNav />
      <div className="">
        <div className="overflow-hidden">
          <header
            className="h-screen w-full shadow-inner"
            style={{
              paddingTop: "200px",
              backgroundSize: "cover",
              backgroundImage: `url("https:/image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              backgroundPosition: "center center",
            }}
          >
            <div className="flex flex-col gap-5 items-start justify-end w-full h-full pb-20 pl-12">
              <img
                className="w-[350px]"
                src={`https://www.themoviedb.org/t/p/original/${detailImage?.logos[0]?.file_path}`}
                alt=""
              />
              <h1 className="w-[600px] text-lg text-white drop-shadow-2xl font-semibold">
                {movie?.overview}
              </h1>
              <div className="flex items-center gap-3">
                <button
                  onClick={handelPlay}
                  className="flex items-center px-5 py-1 bg-gray-50 hover:bg-gray-400 duration-300 rounded text-lg text-black font-semibold"
                >
                  <span className="">
                    <BsPlayFill className="text-4xl" />
                  </span>
                  Play
                </button>
                <button
                  onClick={handelDetail}
                  className="flex items-center gap-2 px-5 py-2 bg-gray-500 hover:bg-gray-700 duration-300 rounded text-lg text-gray-100 font-semibold"
                >
                  <span className="">
                    <BsInfoCircle className="text-2xl" />
                  </span>
                  More Info
                </button>
              </div>
            </div>
            {modal && <MovieDetail />}
            {playMovieModal && <PlayMovie />}
          </header>
          <div className="bg-[#141414] py-10">
            <div className="w-[95%] mx-auto">
              <NowPlaying />
              <TopRated />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Latest;

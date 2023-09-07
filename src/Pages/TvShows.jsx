import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import { useGetTvImageQuery, useGetTvQuery } from "../redux/api/movieApi";
import { BsPlayFill, BsInfoCircle } from "react-icons/bs";
import Tv from "../components/Tv/Tv";
import UpComing from "../components/Home/UpComing";
import { ToggleContext } from "../Context/ToggleProvider";
import TvDetail from "../components/Tv/TvDetail";
import PlayTv from "../components/Tv/PlayTv";
import PlayMovie from "../components/Movie/PlayMovie";
import TvNav from "../components/Tv/TvNav";
import PopularTv from "../components/Tv/PopularTv";
import NowPlayingTv from "../components/Tv/NowPlayingTv";
import TopRatedTv from "../components/Tv/TopRatedTv";

const TvShows = () => {
  const {
    genreId,
    handleGetId,
    playMovieModal,
    tvModal,
    toggleTvModal,
    playTvModal,
    togglePlayTvModal,
  } = useContext(ToggleContext);

  const [movie, setMovie] = useState([]);
  const { data } = useGetTvQuery({ genreId });
  console.log(data?.results);

    const movieId = movie?.id;

  const { data: detailImage } = useGetTvImageQuery({ movieId });
  console.log(detailImage?.logos[0]?.file_path);

  useEffect(() => {
    setMovie(data?.results[Math.floor(Math.random() * data?.results?.length -1)]);
  }, [genreId]);
  
  const handelPlay = () => {
    togglePlayTvModal();
    handleGetId(movie?.id);
  };

  const handelDetail = () => {
    toggleTvModal();
    handleGetId(movie?.id);
  };

  if (tvModal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  return (
    <div className="">
      <TvNav />
      <div className="">
        <div className="overflow-hidden">
          <header
            className="h-screen w-full hidden lg:block"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("https:/image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              backgroundPosition: "center center",
            }}
          >
            <div className="flex flex-col gap-5 items-start justify-end w-full h-full pb-28 pl-12">
              <img
                className="w-[350px]"
                src={`https://www.themoviedb.org/t/p/original/${detailImage?.logos[0]?.file_path}`}
                alt=""
              />
              <h1 className="w-[600px] text-gray-200 font-semibold">
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
          </header>
          <div className="bg-[#141414] pt-20 lg:pt-0">
            <div className="w-[95%] mx-auto lg:-translate-y-24">
              <Tv />
              <PopularTv />
              <NowPlayingTv />
              <TopRatedTv />
            </div>
          </div>
          <Footer />
        </div>
        {tvModal && <TvDetail />}
        {playTvModal && <PlayTv />}
        {playMovieModal && <PlayMovie />}
      </div>
    </div>
  );
};

export default TvShows;

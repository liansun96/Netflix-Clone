import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import { useGetTvImageQuery, useGetTvQuery } from "../redux/api/movieApi";
import { BsPlayFill } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
import Tv from "../components/Tv/Tv";
import { ToggleContext } from "../Context/ToggleProvider";
import TvDetail from "../components/Tv/TvDetail";
import PlayTv from "../components/Tv/PlayTv";
import TvNav from "../components/Tv/TvNav";
import PopularTv from "../components/Tv/PopularTv";
import NowPlayingTv from "../components/Tv/NowPlayingTv";
import TopRatedTv from "../components/Tv/TopRatedTv";
import Loader from "../components/Loader/Loader";

const TvShows = () => {
  const {
    genreId,
    handleGetId,
    tvModal,
    toggleTvModal,
    playTvModal,
    togglePlayTvModal,
  } = useContext(ToggleContext);

  const [movie, setMovie] = useState([]);
  const { data } = useGetTvQuery({ genreId });
  console.log(data?.results);

  const movieId = movie?.id;

  const { data: detailImage, isLoading } = useGetTvImageQuery({ movieId });
  console.log(detailImage?.logos[0]?.file_path);

  useEffect(() => {
    setMovie(data?.results[Math.floor(Math.random() * data?.results?.length)]);
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
      <div className="bg-[#141414]">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="overflow-hidden">
            <header
              className="h-screen w-full hidden lg:block"
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
                <Tv />
                <PopularTv />
                <NowPlayingTv />
                <TopRatedTv />
              </div>
            </div>
            <Footer />
          </div>
        )}
        {tvModal && <TvDetail />}
        {playTvModal && <PlayTv />}
      </div>
    </div>
  );
};

export default TvShows;

import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import { useGetTvByIdQuery, useGetTvImageQuery, useGetTvQuery } from "../redux/api/movieApi";
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
import MobileTvHeader from "../components/Tv/MobileTvHeader";
import MobileBottomMenuBar from "../components/SideBar/MobileBottomMenuBar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const TvShows = () => {
  const {
    tvGenreId,
    handleGetId,
    tvModal,
    toggleTvModal,
    playTvModal,
    togglePlayTvModal,
  } = useContext(ToggleContext);

  const [movie, setMovie] = useState([]);
  const { data } = useGetTvByIdQuery({ tvGenreId });
  console.log(data?.results);

  const movieId = movie?.id;

  const { data: detailImage, isLoading } = useGetTvImageQuery({ movieId });
  // console.log(detailImage?.logos[0]?.file_path);

  useEffect(() => {
    setMovie(
      data?.results[Math.floor(Math.random() * data?.results?.length - 1)]
    );
  }, [data]);
  // console.log(Math.floor(Math.random() * data?.results?.length));

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
      <div className="bg-gradient-to-b from-[#183439] via-[#110808] to-[#171818]">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="overflow-hidden">
            <header
              className="h-screen w-full hidden lg:block relative"
              // style={{
              //   backgroundSize: "cover",
              //   backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              //   backgroundPosition: "center center",
              // }}
            >
              <LazyLoadImage
                className="h-screen w-full shadow-inner hidden lg:block"
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                effect="black-and-white"
                wrapperProps={{
                  style: { transitionDelay: ".5s" },
                }}
              />
              <div className="absolute bottom-10">
                <div className="flex flex-col gap-5 items-start justify-end w-full h-full pb-40 pl-12">
                <LazyLoadImage
                    className="w-[300px]"
                    src={`https://www.themoviedb.org/t/p/original/${detailImage?.logos[1]?.file_path}`}
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: ".5s" },
                    }}
                  />
                  <h1 className="w-[600px] text-gray-200 font-semibold">
                    {movie?.overview?.length > 150
                      ? movie?.overview?.slice(
                          0,
                          movie?.overview?.indexOf(".", 150) + 1
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
              </div>
            </header>
            <MobileTvHeader movie={movie} />
            <div className="category-bg  lg:pt-0 translate-y-[-50px] lg:-translate-y-16">
              <div className="w-[95%] mx-auto lg:-translate-y-14">
                <Tv />
                <NowPlayingTv />
                <TopRatedTv />
                <PopularTv />
              </div>
            </div>
            <Footer />
            <MobileBottomMenuBar />
          </div>
        )}
        {tvModal && <TvDetail />}
        {playTvModal && <PlayTv />}
      </div>
    </div>
  );
};

export default TvShows;

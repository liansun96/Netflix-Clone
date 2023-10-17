import React, { useContext } from "react";
import { MdNotifications } from "react-icons/md";
import { HiMiniChevronRight, HiMiniChevronDown } from "react-icons/hi2";
import { HiDownload } from "react-icons/hi";
import MobileBottomMenuBar from "../components/SideBar/MobileBottomMenuBar";
import MyNetflixNav from "../components/MyNetflix/MyNetflixNav";
import { ToggleContext } from "../Context/ToggleProvider";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import MovieDetail from "../components/Movie/MovieDetail";
import PlayMovie from "../components/Movie/PlayMovie";
import TvDetail from "../components/Tv/TvDetail";
import PlayTv from "../components/Tv/PlayTv";

const MyNetflix = () => {
  const {
    sBar,
    toggleSideBar,
    toggleModal,
    togglePlayMovieModal,
    handleGetId,
    tvModal,
    playTvModal,
    modal,
    playMovieModal,
  } = useContext(ToggleContext);

  const favMovies = useSelector((state) => state.favoriteMovieSlice.favMovies);
  // console.log(favMovies);
  const dispatch = useDispatch();

  return (
    <div className="block lg:hidden overflow-hidden">
      <div
        className={`bg-[#141414] min-h-screen duration-500 ${
          sBar ? "scale-90 opacity-80" : "scale-100"
        }`}
      >
        <MyNetflixNav />
        <div className="w-full flex flex-col items-center justify-center gap-3 pt-20">
          <div className="flex flex-col items-center justify-center">
            <img
              className="rounded w-20"
              src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"
              alt=""
            />
            <div className="flex items-center">
              <p className="text-neutral-200 text-xl font-bold">Marcus</p>
              <HiMiniChevronDown className="text-white text-2xl" />
            </div>
          </div>
          <Link
            to={"/notification"}
            className="w-full px-4 flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                <MdNotifications className="text-white text-2xl" />
              </div>
              <p className="text-neutral-200 text-xl font-bold">
                Notifications
              </p>
            </div>
            <HiMiniChevronRight className="text-white text-2xl" />
          </Link>

          <div className="w-full px-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                <HiDownload className="text-white text-2xl" />
              </div>
              <p className="text-neutral-200 text-xl font-bold">Downloads</p>
            </div>
            <HiMiniChevronRight className="text-white text-2xl" />
          </div>
        </div>
        <div className="w-full px-4 flex justify-between items-center mt-6 mb-1">
          <div className="flex items-center gap-2">
            <p className="text-neutral-200 text-xl font-bold">My List</p>
          </div>
          <HiMiniChevronRight className="text-white text-2xl" />
        </div>
        <div className="block lg:hidden">
          <Swiper
            spaceBetween={5}
            slidesPerView={3.3}
            pagination={{ clickable: true }}
            className="mySwiper overflow-x-visible w-[92%] mx-auto"
          >
            {favMovies?.map((result) => {
              const handelPlay = () => {
                togglePlayMovieModal();
                handleGetId(result?.id);
              };

              const handelDetail = () => {
                toggleModal();
                handleGetId(result?.id);
              };
              return (
                <SwiperSlide key={result?.id} className="w-[120px]">
                  <div>
                    <div className="group/item flex flex-col slide-inner hover:custom-shadow-lg hover:scale-95 lg:hover:w-auto duration-300 hover:delay-500 rounded-lg">
                      <img
                        onClick={handelDetail}
                        src={
                          "https://image.tmdb.org/t/p/w300" +
                          result?.poster_path
                        }
                        className="rounded w-full object-cover object-top cursor-pointer group/edit group-hover/item:rounded-b-none group-hover/item:delay-300 group-hover/item:duration-300"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <MobileBottomMenuBar />
      </div>
      {modal && <MovieDetail />}
      {playMovieModal && <PlayMovie />}
      {tvModal && <TvDetail />}
      {playTvModal && <PlayTv />}
    </div>
  );
};

export default MyNetflix;

import React, { useContext } from "react";
import { useGetUpcomingTwoQuery } from "../redux/api/movieApi";
import { ToggleContext } from "../Context/ToggleProvider";
import { HiMiniChevronLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";
import MovieDetail from "./Movie/MovieDetail";
import PlayMovie from "./Movie/PlayMovie";
import TvDetail from "./Tv/TvDetail";
import PlayTv from "./Tv/PlayTv";

const MobileNoti = () => {
  const { data } = useGetUpcomingTwoQuery();

  const {
    handleGetId,
    toggleModal,
    modal,
    tvModal,
    playMovieModal,
    playTvModal,
  } = useContext(ToggleContext);

  const navigate = useNavigate();

  return (
    <div className="group flex flex-col bg-black bg-opacity-60 min-h-screen w-[380px] overflow-y-scroll">
      <div className="h-10 w-full p-1 flex items-center bg-black bg-opacity-80 fixed top-0">
        <HiMiniChevronLeft
          className="text-white text-3xl"
          onClick={() => navigate("/my-netflix")}
        />
        <p className="text-white text-xl font-semibold translate-x-[100px]">
          Notification
        </p>
      </div>
      {data?.results?.map((result) => {
        const handelDetail = () => {
          toggleModal();
          handleGetId(result?.id);
        };
        return (
          <div
            key={result?.id}
            onClick={handelDetail}
            className="flex gap-2 items-start py-3 px-2 bg-transparent hover:bg-black hover:bg-opacity-80 border-b border-gray-400 mt-10"
          >
            <img
              src={"https://image.tmdb.org/t/p/w300" + result?.backdrop_path}
              alt=""
              className="w-[120px] h-[60px] rounded"
            />
            <p className="text-gray-400 text-sm hover:text-gray-50">
              {result?.overview.substring(0, 100)}...
            </p>
          </div>
        );
      })}
      {modal && <MovieDetail />}
      {playMovieModal && <PlayMovie />}
      {tvModal && <TvDetail />}
      {playTvModal && <PlayTv />}
    </div>
  );
};

export default MobileNoti;

import React, { useContext, useEffect, useState } from "react";
import { useGetSearchQuery } from "../redux/api/movieApi";
import { BsPlayFill, BsHandThumbsUp, BsChevronDown } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import { VscTriangleDown } from "react-icons/vsc";
import HomeNav from "../components/Home/HomeNav";
import { ToggleContext } from "../Context/ToggleProvider";
import { useNavigate } from "react-router";
import MovieDetail from "../components/Movie/MovieDetail";
import PlayMovie from "../components/Movie/PlayMovie";

const Search = () => {
  const {
    search,
    setShowInput,
    inputRef,
    handleGetId,
    modal,
    toggleModal,
    playMovieModal,
    togglePlayMovieModal,
  } = useContext(ToggleContext);

  const { data } = useGetSearchQuery({ search });
  console.log(data);

  useEffect(() => {
    setShowInput(true);

    // When the component mounts, focus the input element
    inputRef.current.focus();
  }, []);

  const navigate = useNavigate();
  if (search == "") {
    navigate(-1);
  }

  return (
    <>
      <HomeNav />
      <div className="px-3 lg:px-10 bg-[#141414] min-h-screen pb-20">
        <div className="flex flex-wrap justify-center gap-5 relative pt-28">
          {data?.results?.map((result, index) => {
            const handelPlay = () => {
              togglePlayMovieModal();
              handleGetId(result?.id);
            };
            const handelDetail = () => {
              toggleModal();
              handleGetId(result?.id);
            };
            return (
              <div key={result?.id} className="w-[220px]">
                <div className="hover:absolute hover:duration-300 hover:scale-150 hover:delay-500 rounded-lg">
                  <div className="group/item flex flex-col">
                    {result?.backdrop_path == null ? (
                      <img
                        onClick={handelDetail}
                        src={
                          "https://image.tmdb.org/t/p/w300" +
                          result?.poster_path
                        }
                        className="rounded object-cover object-top h-[124px] w-[220px] cursor-pointer group/edit group-hover/item:rounded-none group-hover/item:delay-300 group-hover/item:duration-300"
                        alt=""
                      />
                    ) : (
                      <img
                        onClick={handelDetail}
                        src={
                          "https://image.tmdb.org/t/p/w300" +
                          result?.backdrop_path
                        }
                        className="w-[220px] rounded cursor-pointer group/edit group-hover/item:rounded-none group-hover/item:delay-300 group-hover/item:duration-500"
                        alt=""
                      />
                    )}
                    <div className="relative group/edit invisible group-hover/item:visible group-hover/item:delay-500 group-hover/item:duration-500 group-hover/item:h-full group-hover/item:p-3 bg-gray-800 h-[0px]">
                      <div className="flex flex-col gap-3 items-start">
                        <div className="flex justify-between items-center w-full">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={handelPlay}
                              className="flex items-center justify-center h-[25px] w-[25px] rounded-full bg-white hover:bg-gray-200 hover:duration-300"
                            >
                              <BsPlayFill className="text-xl text-gray-700 ms-0.5" />
                            </button>
                            <button className="group/my-list flex items-center justify-center h-[25px] w-[25px] rounded-full bg-transparent ring-1 ring-gray-400 relative hover:ring-white hover:duration-300 group/edit cursor-pointer">
                              <HiOutlinePlus className="text-sm text-gray-200" />
                              <div className="invisible group-hover/my-list:visible absolute -top-[37px] z-[1008] w-max px-2 py-1 bg-white rounded text-cneter">
                                <p className="text-xs font-semibold">
                                  Add to My List
                                </p>
                                <VscTriangleDown className="text-white text-2xl translate-x-[28px] -translate-y-2 absolute" />
                              </div>
                            </button>
                            <button className="flex items-center justify-center h-[24px] w-[24px] rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white hover:duration-300">
                              <BsHandThumbsUp className="text-sm text-gray-200" />
                            </button>
                          </div>
                          <button
                            onClick={handelDetail}
                            className="group/my-list flex items-center justify-center h-[25px] w-[25px] rounded-full bg-transparent ring-1 ring-gray-400 relative hover:ring-white hover:duration-300 group/edit cursor-pointer"
                          >
                            <BsChevronDown className="text-sm text-gray-200" />
                            <div className="invisible group-hover/my-list:visible absolute -top-[37px] z-[1008] w-max px-2 py-1 bg-white rounded text-cneter">
                              <p className="text-xs font-semibold">More info</p>
                              <VscTriangleDown className="text-white text-2xl translate-x-[15px] -translate-y-2 absolute" />
                            </div>
                          </button>
                        </div>
                        <h1 className="text-xs text-white">
                          {result?.title == null
                            ? result?.original_name
                            : result?.title}
                        </h1>
                        <h1 className="text-[10px] text-green-500 font-semibold">
                          {(result?.vote_average * 10).toFixed(1)}% Match
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {modal && <MovieDetail />}
      {playMovieModal && <PlayMovie />}
    </>
  );
};

export default Search;

import React, { useContext, useEffect, useState } from "react";
import HomeNav from "../components/Home/HomeNav";
import Footer from "../components/Footer/Footer";
import { ToggleContext } from "../Context/ToggleProvider";
import MovieDetail from "../components/Movie/MovieDetail";
import PlayMovie from "../components/Movie/PlayMovie";
import TvDetail from "../components/Tv/TvDetail";
import PlayTv from "../components/Tv/PlayTv";
import { MdArrowDropDown } from "react-icons/md";
import {
  useGetMovieByCountryQuery,
  useGetMovieByCountryTwoQuery,
} from "../redux/api/movieApi";
import { BsPlayFill, BsHandThumbsUp, BsChevronDown } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import { VscTriangleDown } from "react-icons/vsc";
import { countryCodes } from "../redux/api/countryCode";

const BrowseByLanguages = () => {
  const {
    page,
    setPage,
    handleGetId,
    toggleModal,
    togglePlayMovieModal,
    tvModal,
    playTvModal,
    modal,
    playMovieModal,
    iosName,
    handleGetIosName,
    languageName,
    handleGetlanguageName,
  } = useContext(ToggleContext);

  const { data, isLoading, isError } = useGetMovieByCountryQuery({ iosName });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const [scrollHeight, setScrollHeight] = useState(0);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const scrollFunc = () => {
      setScrollHeight(parseInt(window.scrollY));
    };

    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  if (tvModal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  return (
    <div className="bg-[#141414] min-h-screen">
      <HomeNav />
      <div className="hidden lg:block w-[95%] mx-auto py-24">
        <div
          className={`${
            scrollHeight > 100
              ? "lg:bg-[#141414] lg:bg-opacity-90"
              : "bg-transparent"
          } fixed top-[61px] z-[1000] text-white text-3xl w-full py-4 flex items-center justify-between duration-300`}
        >
          <div className="flex items-center gap-10 relative">
            <h1 className="text-3xl text-gray-50 font-semibold">
              Browse By Languages
            </h1>
            <div className="relative">
              <div className="flex items-center gap-2">
                <p className="text-sm ">Select Your Preferences</p>
                <button
                  onClick={handleShow}
                  className="flex items-center justify-between w-[250px] bg-black p-1 text-base border hover:bg-transparent hover:bg-opacity-50 "
                >
                  {languageName}
                  <span>
                    <MdArrowDropDown className="text-lg" />
                  </span>
                </button>
              </div>
              <div
                className={`${
                  show ? "block" : "hidden"
                } w-[250px] h-[500px] absolute left-[150px] bg-black bg-opacity-80 z-[1006]`}
              >
                <div className="py-1 px-2 flex gap-5 items-start">
                  <div className="flex flex-col gap-3 h-[490px] overflow-y-scroll language-dropdown">
                    {countryCodes?.map((countryCode) => (
                      <div key={countryCode.id}>
                        <p
                          onClick={() => (
                            handleShow(),
                            handleGetIosName(countryCode?.original_language),
                            handleGetlanguageName(countryCode?.language_name)
                          )}
                          className="text-sm w-[215px] cursor-pointer hover:underline"
                        >
                          {countryCode.language_name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="w-[95%] mx-auto pb-36">
          <div className="flex flex-wrap justify-center gap-5 relative pt-11">
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
                      <div className="relativ w-[220px] group/edit invisible group-hover/item:visible group-hover/item:delay-500 group-hover/item:duration-500 group-hover/item:h-full group-hover/item:p-3 bg-gray-800 h-[0px]">
                        <div className="flex flex-col gap-3 items-start">
                          <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-2">
                              <button
                                // onClick={handelPlay}
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
                              // onClick={handelDetail}
                              className="group/my-list flex items-center justify-center h-[25px] w-[25px] rounded-full bg-transparent ring-1 ring-gray-400 relative hover:ring-white hover:duration-300 group/edit cursor-pointer"
                            >
                              <BsChevronDown className="text-sm text-gray-200" />
                              <div className="invisible group-hover/my-list:visible absolute -top-[37px] z-[1008] w-max px-2 py-1 bg-white rounded text-cneter">
                                <p className="text-xs font-semibold">
                                  More info
                                </p>
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
      </div>
      <div className="">
        <Footer />
      </div>
      {modal && <MovieDetail />}
      {playMovieModal && <PlayMovie />}
      {tvModal && <TvDetail />}
      {playTvModal && <PlayTv />}
    </div>
  );
};

export default BrowseByLanguages;

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
  useGetMovieByCountryThreeQuery,
  useGetMovieByCountryTwoQuery,
} from "../redux/api/movieApi";
import { BsPlayFill, BsHandThumbsUp, BsChevronDown } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import { VscTriangleDown } from "react-icons/vsc";
import { countryCodes } from "../redux/api/countryCode";
import { sortDatas } from "../redux/api/sortDatas";
import Loader from "../components/Loader/Loader";
import LatestNav from "../components/Latest/LatestNav";

const BrowseByLanguages = () => {
  const {
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
    sortName,
    handleGetSortName,
    page,
    handlePageNumber,
  } = useContext(ToggleContext);

  const { data, isLoading } = useGetMovieByCountryQuery({ iosName });
  const { data: data2 } = useGetMovieByCountryTwoQuery({ iosName });
  const { data: data3 } = useGetMovieByCountryThreeQuery({ iosName });

  const [scrollHeight, setScrollHeight] = useState(0);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [sortedData, setSortedData] = useState();
  const [sortOrder, setSortOrder] = useState("asc");

  console.log(sortedData);

  useEffect(() => {
    const scrollFunc = () => {
      setScrollHeight(parseInt(window.scrollY));
    };

    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  if (modal) {
    document.body.classList.add("overflow-y-hidden");
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("overflow-y-hidden");
    document.body.classList.remove("modal-open");
  }

  const handleShow = () => {
    setShow(!show);
  };
  const handleShow1 = () => {
    setShow1(!show1);
  };

  const sortByProperty = (property) => {
    const sortedData = [...data?.results].sort((a, b) => {
      let result;
      if (property === "title") {
        result = a.title.localeCompare(b.title);
      } else if (property === "vote_average" || property === "release_date") {
        result = a[property] - b[property];
      } else if (property === "release_date") {
        const timeA = parseInt(a[property].split(" ")[0]);
        const timeB = parseInt(b[property].split(" ")[0]);
        result = timeA - timeB;
      }

      // Reverse the result if sorting order is descending
      if (sortOrder === "desc") {
        result *= -1;
      }

      return result;
    });

    setSortedData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="bg-gradient-to-b from-[#183439] via-[#110808] to-[#171818] min-h-screen">
      <LatestNav />
      <div className="w-[95%] mx-auto pt-24 lg:pt-0 pb-10">
        <div
          className={`${
            scrollHeight > 100
              ? "lg:bg-[#141414] lg:bg-opacity-90"
              : "bg-transparent"
          } fixed top-[50px] lg:top-[62px] z-10 text-white text-3xl w-full py-2 lg:py-4 flex items-center justify-between duration-300`}
        >
          <div className="w-[95%] flex flex-col lg:flex-row items-start lg:items-center justify-between relative">
            <h1 className="text-2xl lg:text-3xl text-gray-50 font-semibold mb-4 lg:mb-0">
              Browse By Languages
            </h1>
            <div className="flex gap-5">
              <div className="relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2">
                  <p className="text-xs lg:text-sm">Select Your Preferences</p>
                  <button
                    onClick={handleShow}
                    className="flex items-center justify-between w-[170px] lg:w-[250px] text-sm px-2 lg:px-0 lg:text-base rounded-full lg:rounded-none bg-[#556263] lg:bg-black  p-1 border hover:bg-transparent hover:bg-opacity-50 "
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
                  } w-[150px] lg:w-[250px] h-[500px] absolute left-2 lg:left-[150px] bg-black bg-opacity-80 z-[1006]`}
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
              <div className="relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2">
                  <p className="text-xs lg:text-sm">Sort by</p>
                  <button
                    onClick={handleShow1}
                    className="flex items-center justify-between w-[170px] lg:w-[250px] text-sm px-2 lg:px-0 lg:text-base rounded-full lg:rounded-none bg-[#556263] lg:bg-black  p-1 border hover:bg-transparent hover:bg-opacity-50 "
                  >
                    {sortName}
                    <span>
                      <MdArrowDropDown className="text-lg" />
                    </span>
                  </button>
                </div>
                <div
                  className={`${
                    show1 ? "block" : "hidden"
                  } w-[150px] lg:w-[250px] h-[130px] absolute left-2 lg:left-[50px] bg-black bg-opacity-80 z-[1006]`}
                >
                  <div className="py-1 px-2 flex gap-5 items-start">
                    <div className="flex flex-col gap-3 h-[130px]">
                      {sortDatas?.map((sortData) => (
                        <div key={sortData.id}>
                          <p
                            onClick={() => (
                              handleShow1(),
                              sortByProperty(`${sortData.sort}`),
                              handleGetSortName(sortData?.name)
                            )}
                            className="text-sm w-[215px] cursor-pointer hover:underline"
                          >
                            {sortData.name}
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
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-hidden">
          <div className="w-[95%] mx-auto pt-24 pb-28">
            <div className="flex flex-wrap justify-between px-2 relative lg:pt-11 last:lg:mr-auto">
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
                  <div
                    key={result?.id}
                    className="w-[45%] xl:w-[210px] 2xl:w-[230px] 3xl:w-[300px] 4xl:w-[390px] last:mr-auto last:ms-3"
                  >
                    <div className="hover:absolute hover:duration-300 hover:scale-150 hover:delay-500 rounded-lg">
                      <div className="group/item flex flex-col mb-20 3xl:mb-24 4xl:mb-28">
                        <div className="hidden lg:block">
                          {result?.backdrop_path == null ? (
                            <img
                              onClick={handelDetail}
                              src={
                                "https://image.tmdb.org/t/p/w300" +
                                result?.poster_path
                              }
                              className="rounded object-cover object-top h-[124px] xl:w-[210px] 2xl:w-[230px] 3xl:w-[290px] 4xl:w-[390px] cursor-pointer group/edit group-hover/item:rounded-none group-hover/item:delay-300 group-hover/item:duration-300"
                              alt=""
                            />
                          ) : (
                            <img
                              onClick={handelDetail}
                              src={
                                "https://image.tmdb.org/t/p/w300" +
                                result?.backdrop_path
                              }
                              className="xl:w-[210px] 2xl:w-[230px] 3xl:w-[290px] 4xl:w-[390px] rounded cursor-pointer group/edit group-hover/item:rounded-none group-hover/item:delay-300 group-hover/item:duration-500"
                              alt=""
                            />
                          )}
                        </div>
                        <img
                          onClick={handelDetail}
                          src={
                            "https://image.tmdb.org/t/p/w300" +
                            result?.poster_path
                          }
                          className="block lg:hidden rounded object-cover object-top xl:w-[210px] 2xl:w-[230px] 3xl:w-[290px] 4xl:w-[390px] cursor-pointer group/edit group-hover/item:rounded-none group-hover/item:delay-300 group-hover/item:duration-300"
                          alt=""
                        />
                        <div className="relativ xl:w-[210px] 2xl:w-[230px] 3xl:w-[290px] 4xl:w-[390px] group/edit invisible group-hover/item:visible group-hover/item:delay-500 group-hover/item:duration-500 group-hover/item:h-full group-hover/item:p-3 bg-gray-800 h-[0px]">
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
      )}
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

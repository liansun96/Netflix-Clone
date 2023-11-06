import React, { useContext, useEffect, useRef, useState } from "react";
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
import MobileBottomMenuBar from "../components/SideBar/MobileBottomMenuBar";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineCheck } from "react-icons/hi2";
import { addMovie, removeMovie } from "../redux/services/favoritMovieSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
    languageRef,
    showLanguage,
    setShowLanguage,
    handleShowLanguage,
    sortRef,
    showSort,
    setShowSort,
    handleShowSort,
    page,
    handlePageNumber,
  } = useContext(ToggleContext);

  const { data, isLoading } = useGetMovieByCountryQuery({ iosName });
  const { data: data2 } = useGetMovieByCountryTwoQuery({ iosName });
  const { data: data3 } = useGetMovieByCountryThreeQuery({ iosName });
  // console.log(data);
  const favMovies = useSelector((state) => state.favoriteMovieSlice.favMovies);
  // console.log(favMovies);
  const dispatch = useDispatch();

  const [scrollHeight, setScrollHeight] = useState(0);
  const [sortedData, setSortedData] = useState();
  const [sortOrder, setSortOrder] = useState("asc");

  // console.log(sortedData);

  useEffect(() => {
    const scrollFunc = () => {
      setScrollHeight(parseInt(window.scrollY));
    };

    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!languageRef.current.contains(e.target)) {
        setShowLanguage(false);
      }

      if (!sortRef.current.contains(e.target)) {
        setShowSort(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (modal) {
    document.body.classList.add("overflow-y-hidden");
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("overflow-y-hidden");
    document.body.classList.remove("modal-open");
  }

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

  // const sortByProperty = (property) => {
  //   const sortedData = [...data?.results].sort((a, b) => {
  //     if (key === 'title') {
  //       return a.title.localeCompare(b.title);
  //     } else if (key === 'release_date') {

  //       return new Date(a.release_date) - new Date(b.release_date);
  //     } else if (key === 'popularity') {
  //       return b.popularity - a.popularity;
  //     } else {
  //       // Default to no sorting
  //       return 0;
  //     }
  //   });

  //   setSortedData(sortedData);
  // };

  return (
    <div className="bg-[#171818] min-h-screen">
      <LatestNav />
      <div className="w-[95%] mx-auto pt-24 lg:pt-0 pb-10">
        <div
          className={`${
            scrollHeight > 60
              ? "opacity-0 duration-300 -translate-y-5"
              : "opacity-100"
          } fixed top-[50px] lg:top-[62px] z-10 text-white text-3xl w-full py-4 flex items-center justify-between duration-300`}
        >
          <div className="w-[95%] flex flex-col lg:flex-row items-start lg:items-center justify-between relative">
            <h1 className="text-2xl lg:text-3xl text-gray-50 font-semibold mb-4 lg:mb-0">
              Browse By Languages
            </h1>
            <div className="w-full lg:w-auto flex justify-start lg:justify-end gap-5">
              <div ref={languageRef} className="relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2">
                  <p className="text-xs lg:text-sm">Select Your Preferences</p>
                  <button
                    onClick={handleShowLanguage}
                    className="flex items-center justify-between w-[160px] lg:w-[250px] text-xs px-2 lg:text-base rounded-full lg:rounded-none bg-[#556263] lg:bg-black  p-1 border hover:bg-transparent hover:bg-opacity-50 "
                  >
                    {languageName}
                    <span>
                      <MdArrowDropDown className="text-lg" />
                    </span>
                  </button>
                </div>
                <div
                  className={`${
                    showLanguage ? "block" : "hidden"
                  } w-[150px] lg:w-[250px] h-[360px] lg:h-[500px] absolute left-2 lg:left-[150px] bg-black bg-opacity-80 z-[1006]`}
                >
                  <div
                    ref={languageRef}
                    className="py-1 px-2 flex gap-5 items-start"
                  >
                    <div className="flex flex-col gap-3 h-[350px] lg:h-[490px] overflow-y-scroll language-dropdown">
                      {countryCodes?.map((countryCode) => (
                        <div key={countryCode.id}>
                          <p
                            onClick={() => (
                              handleShowLanguage(),
                              handleGetIosName(countryCode?.original_language),
                              handleGetlanguageName(countryCode?.language_name)
                            )}
                            className="text-sm w-[125px] lg:w-[215px] cursor-pointer hover:underline"
                          >
                            {countryCode.language_name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div ref={sortRef} className="relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2">
                  <p className="text-xs lg:text-sm">Sort by</p>
                  <button
                    onClick={handleShowSort}
                    className="flex items-center justify-between w-[160px] lg:w-[250px] text-xs px-2 lg:text-base rounded-full lg:rounded-none bg-[#556263] lg:bg-black  p-1 border hover:bg-transparent hover:bg-opacity-50 "
                  >
                    {sortName}
                    <span>
                      <MdArrowDropDown className="text-lg" />
                    </span>
                  </button>
                </div>
                <div
                  className={`${
                    showSort ? "block" : "hidden"
                  } w-[150px] lg:w-[250px] h-[130px] absolute left-2 lg:left-[50px] bg-black bg-opacity-80 z-[1006]`}
                >
                  <div className="py-1 px-2 flex gap-5 items-start">
                    <div className="flex flex-col gap-3 h-[130px]">
                      {sortDatas?.map((sortData) => (
                        <div key={sortData.id}>
                          <p
                            onClick={() => (
                              handleShowSort(),
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
            <div className="flex flex-wrap justify-between px-2 relative">
              {sortedData?.map((result, index) => {
                const handelPlay = () => {
                  togglePlayMovieModal();
                  handleGetId(result?.id);
                };
                const handelDetail = () => {
                  toggleModal();
                  handleGetId(result?.id);
                };

                const isMovieInList = favMovies?.find(
                  (m) => m.id === result?.id
                );
                // console.log(isMovieInList);

                const handleAddFav = () => {
                  if (isMovieInList) {
                    dispatch(removeMovie(result));
                  } else {
                    // Movie is not in the list, dispatch addMovie action
                    dispatch(addMovie(result));
                  }
                };
                return (
                  <div
                    key={result?.id}
                    className="w-[30%] xl:w-[210px] 2xl:w-[230px] 3xl:w-[300px] 4xl:w-[390px] last:mr-auto xl:last:ms-8 2xl:last:ms-3"
                  >
                    <div className="lg:hover:absolute lg:hover:z-[1010] hover:duration-300 lg:hover:scale-150 hover:delay-500 rounded-lg ">
                      <div className="group/item flex flex-col mb-5 lg:mb-20 3xl:mb-24 4xl:mb-28 lg:hover:custom-shodow-lg">
                        <div className="hidden lg:block">
                          {result?.backdrop_path == null ? (
                            <LazyLoadImage
                              onClick={handelDetail}
                              src={
                                "https://image.tmdb.org/t/p/w300" +
                                result?.poster_path
                              }
                              className="object-cover object-top h-[124px] xl:w-[210px] 2xl:w-[230px] 3xl:w-[290px] 4xl:w-[390px] rounded cursor-pointer group/edit group-hover/item:rounded-b-none group-hover/item:delay-300 group-hover/item:duration-300"
                              alt=""
                              effect="blur"
                              wrapperProps={{
                                style: { transitionDelay: ".5s" },
                              }}
                            />
                          ) : (
                            <LazyLoadImage
                              onClick={handelDetail}
                              src={
                                "https://image.tmdb.org/t/p/w300" +
                                result?.backdrop_path
                              }
                              className="xl:w-[210px] 2xl:w-[230px] 3xl:w-[290px] 4xl:w-[390px] rounded cursor-pointer group/edit group-hover/item:rounded-b-none group-hover/item:delay-300 group-hover/item:duration-500"
                              alt=""
                              effect="blur"
                              wrapperProps={{
                                style: { transitionDelay: ".5s" },
                              }}
                            />
                          )}
                        </div>
                        <LazyLoadImage
                          onClick={handelDetail}
                          src={
                            "https://image.tmdb.org/t/p/w300" +
                            result?.poster_path
                          }
                          className="block lg:hidden rounded object-cover object-top cursor-pointer"
                          alt=""
                          effect="blur"
                          wrapperProps={{
                            style: { transitionDelay: ".5s" },
                          }}
                        />
                        <div className="relative xl:w-[210px] 2xl:w-[230px] 3xl:w-[290px] 4xl:w-[390px] group/edit invisible lg:group-hover/item:visible lg:group-hover/item:delay-500 lg:group-hover/item:duration-500 lg:group-hover/item:h-full p-3 rounded group-hover/item:rounded-t-none bg-[#242424] h-[0px]">
                          <div className="flex flex-col gap-3 items-start">
                            <div className="flex justify-between items-center w-full">
                              <div className="flex items-center justify-start gap-1 lg:gap-2">
                                <button
                                  onClick={handelPlay}
                                  className="flex items-center justify-center h-[25px] w-[25px] rounded-full bg-white hover:bg-gray-200 hover:duration-300"
                                >
                                  <BsPlayFill className="text-xl text-gray-700 ms-0.5" />
                                </button>
                                <button
                                  onClick={() => handleAddFav(result)}
                                  className="group/my-list flex items-center justify-center h-[25px] w-[25px] rounded-full bg-transparent ring-1 ring-gray-400 relative hover:ring-white hover:duration-300 group/edit cursor-pointer"
                                >
                                  {isMovieInList ? (
                                    <HiOutlineCheck className="text-sm text-gray-200" />
                                  ) : (
                                    <HiOutlinePlus className="text-sm text-gray-200" />
                                  )}
                                  {isMovieInList ? (
                                    <div className="invisible group-hover/my-list:visible absolute -top-[37px] z-[1008] w-max px-2 py-1 bg-white rounded text-cneter">
                                      <p className="text-xs font-semibold">
                                        Remove from List
                                      </p>
                                      <VscTriangleDown className="text-white text-2xl translate-x-[36px] -translate-y-2 absolute" />
                                    </div>
                                  ) : (
                                    <div className="invisible group-hover/my-list:visible absolute -top-[37px] z-[1008] w-max px-2 py-1 bg-white rounded text-cneter">
                                      <p className="text-xs font-semibold">
                                        Add to My List
                                      </p>
                                      <VscTriangleDown className="text-white text-2xl translate-x-[28px] -translate-y-2 absolute" />
                                    </div>
                                  )}
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
              {/* <div className="flex gap-4 mt-10">
                <button
                  onClick={handlePrevPage}
                  className="h-10 px-6 py-1 rounded-lg bg-[#E50914] text-white"
                >
                  Prev
                </button>
                <button
                  onClick={handleNextPage}
                  className="h-10 px-6 py-1 rounded-lg bg-[#E50914] text-white"
                >
                  Next
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
      <div>
        <Footer />
        <MobileBottomMenuBar />
      </div>

      {modal && <MovieDetail />}
      {playMovieModal && <PlayMovie />}
      {tvModal && <TvDetail />}
      {playTvModal && <PlayTv />}
    </div>
  );
};

export default BrowseByLanguages;

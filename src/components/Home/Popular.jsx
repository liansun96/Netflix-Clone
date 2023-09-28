import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { VscTriangleDown } from "react-icons/vsc";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { BsPlayFill, BsHandThumbsUp, BsChevronDown } from "react-icons/bs";
import { useGetPopularQuery } from "../../redux/api/movieApi";
import { RiArrowDropRightLine } from "react-icons/ri";
import { ToggleContext } from "../../Context/ToggleProvider";
import MovieDetail from "../Movie/MovieDetail";

const Popular = () => {
  const { handleGetId, modal, toggleModal, togglePlayMovieModal, genreId } =
    useContext(ToggleContext);

  const { data } = useGetPopularQuery({ genreId });
  console.log(data?.results);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data?.results?.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + data?.results?.length) % data?.results?.length
    );
  };

  if (modal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  return (
    <div className="group h-[230px] lg:h-[200px] my-5">
      <div className="flex flex-col gap-2 px-3">
        <div className="flex items-center lg:items-end justify-between w-full">
          <div className="flex items-center gap-1  group/exp cursor-pointer">
            <h1 className="text-lg lg:text-xl font-semibold text-gray-50">
              Popular Movies
            </h1>
            <div className="flex items-center lg:mt-1.5">
              <div className="opacity-0 group-hover/exp:opacity-100 duration-300 group-hover/exp:delay-200">
                <p className="text-[11px] font-semibold text-blue-300">
                  Explore All
                </p>
              </div>
              <RiArrowDropRightLine className="text-2xl -translate-x-[60px] text-blue-300 group-hover/exp:translate-x-0 group-hover/exp:delay-0 duration-500 delay-200" />
            </div>
          </div>
          <div className="dots opacity-0 group-hover:opacity-100 hidden lg:block">
            {[...Array(6)].map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide % 6 ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="carousel-container hover:z-30 hidden lg:block">
          <div className="carousel">
            <div
              className="slides duration-500 flex items-start gap-2 lg:gap-1 "
              style={{
                transform: `translateX(-${currentSlide * 166}px)`,
              }}
            >
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
                  <div key={result?.id} className="w-[120px] lg:w-[220px]">
                    <div>
                      <div className="group/item flex flex-col slide-inner hover:custom-shadow-lg hover:scale-150 hover:w-[130px] lg:hover:w-auto duration-300 hover:delay-500 rounded-lg">
                        <img
                          onClick={handelDetail}
                          className="hidden lg:block cursor-pointer rounded group/edit group-hover/item:rounded-b-none group-hover/item:delay-300 group-hover/item:duration-500"
                          src={
                            "https://image.tmdb.org/t/p/w300" +
                            result?.backdrop_path
                          }
                          alt=""
                        />
                        <img
                          onClick={handelDetail}
                          src={
                            "https://image.tmdb.org/t/p/w300" +
                            result?.poster_path
                          }
                          className="block lg:hidden rounded w-full object-cover object-top cursor-pointer group/edit group-hover/item:rounded-b-none group-hover/item:delay-300 group-hover/item:duration-300"
                          alt=""
                        />
                        <div className="relative group/edit invisible group-hover/item:visible group-hover/item:rounded-b group-hover/item:delay-500 group-hover/item:duration-500 group-hover/item:h-full lg:group-hover/item:p-3 bg-[#181818] h-[0px]">
                          <div className="flex flex-col gap-1 lg:gap-3 items-start">
                            <div className="flex justify-between items-center w-full scale-90 mt-2 lg:scale-100">
                              <div className="flex items-center justify-start gap-1 lg:gap-2">
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
                                className="lg:self-end group/my-list flex items-center justify-center h-[25px] w-[25px] rounded-full bg-transparent ring-1 ring-gray-400 relative hover:ring-white hover:duration-300 group/edit cursor-pointer"
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
                            <div className="p-2 lg:p-0">
                              <h1 className="text-xs text-white mb-2">
                                {result?.title}
                              </h1>
                              <h1 className="text-[10px] text-green-500 font-semibold">
                                {result?.vote_average * 10}% Match
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <MdOutlineArrowBackIos
              className="absolute -left-5  top-[80px] lg:top-[50px] text-2xl text-gray-100 opacity-0 group-hover:opacity-100 duration-300"
              onClick={handlePrevSlide}
            />
            <MdOutlineArrowForwardIos
              className="absolute -right-5  top-[80px] lg:top-[50px] text-2xl text-gray-100 opacity-0 group-hover:opacity-100 duration-300"
              onClick={handleNextSlide}
            />
          </div>
        </div>
        <div className="block lg:hidden">
          <Swiper
            spaceBetween={5}
            slidesPerView={2.6}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {data?.results?.map((result) => {
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
      </div>
    </div>
  );
};

export default Popular;

import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { BsPlayFill, BsHandThumbsUp, BsChevronDown } from "react-icons/bs";
import {
  useGetTopRatedQuery,
} from "../redux/api/movieApi";
import {RiArrowDropRightLine} from 'react-icons/ri'


const TopRated = () => {
  const { data } = useGetTopRatedQuery();
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

  return (
    <div className="group h-[200px]">
      <div className="flex flex-col gap-2 px-3">
        <div className="flex items-end justify-between w-full">
        <div className="flex items-center gap-1  group/exp cursor-pointer">
            <h1 className="text-xl font-semibold text-gray-50">
              Top Rated
            </h1>
            <div className="flex items-center mt-1.5">
              <div className="opacity-0 group-hover/exp:opacity-100 duration-300 group-hover/exp:delay-200">
                <p className="text-[11px] font-semibold text-blue-300">
                  Explore All
                </p>
              </div>
              <RiArrowDropRightLine className="text-2xl -translate-x-[60px] text-blue-300 group-hover/exp:translate-x-0 group-hover/exp:delay-0 duration-500 delay-200" />
            </div>
          </div>
          <div className="dots opacity-0 group-hover:opacity-100">
            {[...Array(6)].map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide % 6 ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="carousel-container hover:z-30">
          <div className="carousel">
            <div
              className="slides duration-500 flex items-start gap-1 "
              style={{
                transform: `translateX(-${currentSlide * 166}px)`,
              }}
            >
              {data?.results?.map((result, index) => (
                <div key={result?.id} className="w-[220px]">
                  <div>
                    <div className="group/item flex flex-col slide-inner hover:scale-150 duration-300 hover:delay-500 rounded-lg">
                      <img
                        className="rounded-lg group/edit group-hover/item:rounded-none group-hover/item:delay-300 group-hover/item:duration-500"
                        src={
                          "https://image.tmdb.org/t/p/w300" +
                          result?.backdrop_path
                        }
                        alt=""
                      />
                      <div className="relative group/edit invisible group-hover/item:visible group-hover/item:delay-500 group-hover/item:duration-500 group-hover/item:h-full group-hover/item:p-3 bg-gray-800 h-[0px]">
                        <div className="flex flex-col gap-3 items-start">
                          <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center justify-center h-[25px] w-[25px] rounded-full bg-white hover:bg-gray-200 duration-300">
                                <BsPlayFill className="text-xl text-gray-700 ms-0.5" />
                              </div>
                              <div className="flex items-center justify-center h-[24px] w-[24px] rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white duration-300 group/detail">
                                <HiOutlinePlus className="text-sm text-gray-200" />
                                <div className="hidden group-hover/detail:block absolute -top-[23%] left-[5%] px-3 py-1 bg-white rounded">
                                  <p className="text-xs font-semibold">
                                    Add to My List
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center justify-center h-[24px] w-[24px] rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white duration-500">
                                <BsHandThumbsUp className="text-sm text-gray-200" />
                              </div>
                            </div>
                            <div className="">
                              <div className="flex items-center justify-center h-[24px] w-[24px] rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white duration-300">
                                <BsChevronDown className="text-sm text-gray-200" />
                              </div>
                            </div>
                          </div>
                          <h1 className="text-xs text-white">
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
              ))}
            </div>
            <MdOutlineArrowBackIos
              className="absolute -left-7 top-[50px] text-2xl text-gray-100 opacity-0 group-hover:opacity-100 duration-300"
              onClick={handlePrevSlide}
            />
            <MdOutlineArrowForwardIos
              className="absolute -right-7 top-[50px] text-2xl text-gray-100 opacity-0 group-hover:opacity-100 duration-300"
              onClick={handleNextSlide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;

import React, { useState } from "react";
import { useGetPopularQuery } from "../redux/api/movieApi";
import "./Carousel.css";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { BsPlayFill, BsHandThumbsUp, BsChevronDown } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";

const Carousel = () => {
  const { data } = useGetPopularQuery();
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(data?.results);

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
    <div className="group">
      <div className="flex flex-col gap-2">
        <div className="dots mt-10 opacity-0 group-hover:opacity-100">
          {[...Array(6)].map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide % 6 ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
        <div className="carousel-container">
          <div className="carousel ">
            <div
              className="slides duration-500 flex items-start gap-5"
              style={{
                transform: `translateX(-${currentSlide * 172}px)`,
              }}
            >
              {data?.results?.map((result, index) => (
                <div key={result?.id} className="slide">
                  <div>
                    <div className="group/item flex flex-col slide-inner hover:scale-150  hover:z-10 duration-300 hover:delay-500 rounded-lg">
                      <img
                        className="rounded-lg group/edit group-hover/item:rounded-none group-hover/item:delay-300 group-hover/item:duration-500"
                        src={
                          "https://image.tmdb.org/t/p/w300" +
                          result?.backdrop_path
                        }
                        alt=""
                      />
                      <div className="relative group/edit invisible group-hover/item:visible group-hover/item:delay-500 group-hover/item:duration-500 group-hover/item:h-full p-3 bg-gray-800 h-[0px]">
                        <div className="flex flex-col gap-3 items-start">
                          <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center justify-center h-[25px] w-[25px] rounded-full bg-white hover:bg-gray-200 duration-300">
                                <BsPlayFill className="text-xl text-gray-700 ms-0.5" />
                              </div>
                              <div className="flex items-center justify-center h-[24px] w-[24px] rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white duration-300 group/detail">
                                <HiOutlinePlus className="text-sm text-gray-200" />
                                <div className="hidden group-hover/detail:block absolute -top-[23%] left-[5%] px-3 py-1 bg-white rounded">
                                  <p className="text-xs font-semibold">Add to My List</p>
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
          </div>
        </div>
        <MdOutlineArrowBackIos
          className="absolute left-0 top-[15%] text-3xl text-red-600 opacity-0 group-hover:opacity-100 duration-300"
          onClick={handlePrevSlide}
        />
        <MdOutlineArrowForwardIos
          className="absolute right-0 top-[15%] text-3xl text-red-600 opacity-0 group-hover:opacity-100 duration-300"
          onClick={handleNextSlide}
        />
      </div>
    </div>
  );
};

export default Carousel;

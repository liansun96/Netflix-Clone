import React, { useEffect, useState } from "react";
import { useGetPopularQuery } from "../redux/api/movieApi";
import "./Carousel.css";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import {
  BsPlayFill,
  BsHandThumbsUp,
  BsChevronDown,
  BsInfoCircle,
} from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import { useNavigate } from "react-router";

const Carousel = () => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const { data } = useGetPopularQuery();
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(data?.results);

  useEffect(() => {
    setMovie(
      data?.results[Math.floor(Math.random() * data?.results?.length - 1)]
    );
  }, [data]);

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
    <div className="">
      <header
        className="h-screen w-full p-5"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https:/image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="flex flex-col gap-5 items-start justify-end w-full h-full pb-5 pl-5">
          {/* <h1 className="text-white text-3xl font-semibold">
            {movie?.title || movie?.name || movie?.original_name}
          </h1> */}
          <h1 className="w-[600px] text-lg text-gray-200 font-semibold">
            {movie?.overview}
          </h1>
          <div className="flex items-center gap-3">
            <button className="flex items-center px-5 py-1 bg-gray-50 hover:bg-gray-400 duration-300 rounded text-lg text-black font-semibold">
              <span className="">
                <BsPlayFill className="text-4xl" />
              </span>
              Play
            </button>
            <button className="flex items-center gap-2 px-5 py-2 bg-gray-500 hover:bg-gray-700 duration-300 rounded text-lg text-gray-100 font-semibold">
              <span className="">
                <BsInfoCircle className="text-2xl" />
              </span>
              More Info
            </button>
          </div>
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
                <div onClick={()=>navigate(`/movie/${result?.id}`)} key={result?.id} className="slide">
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
    </div>
  );
};

export default Carousel;
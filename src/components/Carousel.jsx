import React, { useState } from "react";
import { useGetPopularQuery, useGetTopRatedQuery } from "../redux/api/movieApi";
import "./Carousel.css";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import Test from "./Test"
import { useNavigate } from "react-router";

const Carousel = () => {
  // const { data } = useGetPopularQuery();
  const { data } = useGetTopRatedQuery();
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate()

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
    <>
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
                  transform: `translateX(-${currentSlide * 160}px)`,
                }}
              >
                {data?.results?.map((result, index) => (
                  <div key={result?.id} className="slide">
                    <div onClick={()=>navigate(`/movie/${result?.id}`)}>
                      <div className="group/item flex flex-col slide-inner w-[200px] hover:scale-150 hover:z-10 duration-300 hover:delay-500 rounded-lg">
                        <img
                          src={
                            "https://image.tmdb.org/t/p/w300" +
                            result?.backdrop_path
                          }
                          alt=""
                        />
                        <div className="group/edit invisible group-hover/item:visible group-hover/item:delay-500 group-hover/item:duration-500 group-hover/item:h-full p-5 bg-gray-800 h-[2px]">
                          <h1 className="text-[10px] text-white">
                            {result?.title}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <MdOutlineArrowBackIos
              className="prev-btn text-red-600 opacity-0 group-hover:opacity-100 duration-300"
              onClick={handlePrevSlide}
            />
            <MdOutlineArrowForwardIos
              className="next-btn text-red-600 opacity-0 group-hover:opacity-100 duration-300"
              onClick={handleNextSlide}
            />
          </div>
        </div>
      </div>
      <Test/>
    </>
  );
};

export default Carousel;

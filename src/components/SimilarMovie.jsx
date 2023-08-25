import React from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { FaPlay } from "react-icons/fa"

const SimilarMovie = ({ result }) => {
  return (
    <div className="w-[250px] h-[300px] bg-[#2F2F2F] rounded">
      <div className="group/edit relative">
        <img
          src={"https://image.tmdb.org/t/p/w300" + result?.backdrop_path}
          className="rounded"
          alt=""
        />
        <div className="scale-0 group-hover/edit:scale-100 duration-75 w-[50px] h-[50px] absolute top-[40%] left-[40%] rounded-full border-2 bg-black bg-opacity-50 border-white flex justify-center items-center cursor-pointer">
          <FaPlay className="text-white text-lg translate-x-[2px]"/>
        </div>
      </div>
      <p className="text-sm text-white font-bold px-3">
        {result?.title?.length > 28
          ? `${result?.title?.substring(0, 28)} . . .`
          : result?.title}
      </p>
      <div className="flex justify-between items-center p-3">
        <div className="">
          <p className="font-bold text-green-500">
            <span>{result?.vote_average?.toFixed(1) * 10}%</span> Match
          </p>
          <p className="text-sm font-semibold text-[#747474]">
            Release :{" "}
            <span className="text-base text-white">{result?.release_date}</span>
          </p>
        </div>
        <div className="flex items-center justify-center h-[35px] w-[35px] rounded-full bg-transparent ring-1 ring-gray-400 relative hover:ring-white hover:duration-300 group/edit cursor-pointer">
          <HiOutlinePlus className="text-2xl text-gray-200" />
          <div className="invisible group-hover/edit:visible absolute -top-[60px] z-[1008] w-max px-2 py-1 bg-white rounded text-cneter">
            <p className="text-lg font-semibold">Add to My List</p>
            <FaPlay className="text-white text-lg translate-x-[50px] -translate-y-1 absolute rotate-90"/>
          </div>
        </div>
      </div>
      <p className="px-3 text-[#C8C8C8] text-sm tracking-tight">
        {result?.overview?.length > 90
          ? `${result?.overview?.substring(0, 90)} . . .`
          : result?.overview}
      </p>
    </div>
  );
};

export default SimilarMovie;

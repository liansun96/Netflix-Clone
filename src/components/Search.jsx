import React, { useState } from "react";
import { useGetSearchQuery } from "../redux/api/movieApi";
import { BsPlayFill, BsHandThumbsUp, BsChevronDown } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";

const Search = () => {
  const [search, setSearch] = useState("");

  const { data } = useGetSearchQuery({ search });
  console.log(data);

  return (
    <div className="px-3 lg:px-10 bg-[#141414] min-h-screen pb-20">
      <div className="p-20">
        <h1>Search by name</h1>
        <input
          type="text"
          className="border border-black p-2"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-between gap-5 relative">
        {data?.results?.map((result, index) => {
          //   const handelPlay = () => {
          //     togglePlayMovieModal();
          //     handleGetId(result?.id);
          //   };
          //   const handelDetail = () => {
          //     toggleModal();
          //     handleGetId(result?.id);
          //   };
          return (
            <div key={result?.id} className="w-[220px]">
              <div className="hover:absolute hover:duration-300 hover:scale-150 hover:delay-500 rounded-lg">
                <div className="group/item flex flex-col">
                  {/* <img
                    // onClick={handelDetail}
                    className="rounded-lg cursor-pointer group/edit group-hover/item:rounded-none group-hover/item:delay-300 group-hover/item:duration-500"
                    src={
                      "https://image.tmdb.org/t/p/w300" + result?.backdrop_path
                    }
                    alt=""
                  /> */}
                  {result?.backdrop_path == null ? (
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w300" + result?.poster_path
                      }
                      className="rounded object-cover object-top h-[124px] w-[220px] cursor-pointer group/edit group-hover/item:rounded-none group-hover/item:delay-300 group-hover/item:duration-300"
                      alt=""
                    />
                  ) : (
                    <img
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
                            // onClick={handelPlay}
                            className="flex items-center justify-center h-[25px] w-[25px] rounded-full bg-white hover:bg-gray-200 hover:duration-300"
                          >
                            <BsPlayFill className="text-xl text-gray-700 ms-0.5" />
                          </button>
                          <button className="flex items-center justify-center h-[24px] w-[24px] rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white hover:duration-300 group/detail">
                            <HiOutlinePlus className="text-sm text-gray-200" />
                            <div className="hidden group-hover/detail:block absolute -top-[23%] left-[5%] px-3 py-1 bg-white rounded">
                              <p className="text-xs font-semibold">
                                Add to My List
                              </p>
                            </div>
                          </button>
                          <button className="flex items-center justify-center h-[24px] w-[24px] rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white hover:duration-300">
                            <BsHandThumbsUp className="text-sm text-gray-200" />
                          </button>
                        </div>
                        <button
                          //   onClick={handelDetail}
                          className="flex items-center justify-center h-[24px] w-[24px] rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white hover:duration-300"
                        >
                          <BsChevronDown className="text-sm text-gray-200" />
                        </button>
                      </div>
                      <h1 className="text-xs text-white">{result?.title}</h1>
                      <h1 className="text-[10px] text-green-500 font-semibold">
                        {result?.vote_average * 10}% Match
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
  );
};

export default Search;

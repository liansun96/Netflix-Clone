import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { useGetMovieQuery, useGetNowPlayingQuery } from "../redux/api/movieApi";
import { BsPlayFill, BsInfoCircle } from "react-icons/bs";
import NowPlaying from "../components/NowPlaying";
import TopRated from "../components/TopRated";

const Latest = () => {
  const [movie, setMovie] = useState([]);
  const { data } = useGetNowPlayingQuery();
  console.log(data?.results);

  useEffect(() => {
    setMovie(
      data?.results[Math.floor(Math.random() * data?.results?.length - 1)]
    );
  }, [data]);

  return (
    <div className="">
        
      <div className="overflow-hidden">
        <header
          className="h-screen w-full shadow-inner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https:/image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="flex flex-col gap-5 items-start justify-end w-full h-full pb-20 pl-12">
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
        </header>
        <div className="bg-[#141414] py-10">
          <div className="w-[95%] mx-auto">
            <NowPlaying />
            <TopRated />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Latest;
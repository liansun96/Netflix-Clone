import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import { useGetMovieQuery, useGetTvQuery } from "../redux/api/movieApi";
import { BsPlayFill, BsInfoCircle } from "react-icons/bs";
import Movie from "../components/Movie/Movie";
import Popular from "../components/Home/Popular";
import NowPlaying from "../components/Home/NowPlaying";
import Header from "../components/Header";
import MovieNav from "../components/Movie/MovieNav";

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const { data } = useGetMovieQuery();
  console.log(data?.results);

  useEffect(() => {
    setMovie(
      data?.results[Math.floor(Math.random() * data?.results?.length - 1)]
    );
  }, [data]);

  return (
    <div>
      <MovieNav />
      <div className="">
        <div className="overflow-hidden">
          <Header />
          <div className="bg-[#141414] pt-20 lg:pt-0">
            <div className="w-[95%] mx-auto lg:-translate-y-24">
              <Movie />
              <NowPlaying />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Movies;

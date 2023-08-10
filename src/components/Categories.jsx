import React from "react";
import Tv from "./image/Tv";
import Popular from "./Popular";
import './Carousel.css'
import Movie from "./Movie";
import UpComing from "./UpComing";
import NowPlaying from "./NowPlaying";
import TopRated from "./TopRated";

const Categories = () => {
  return (
    <div className="bg-[#141414] py-10">
      <div className="w-[95%] mx-auto">
        <Movie/>
        <NowPlaying/>
        <TopRated/>
        <Popular />
        <Tv/>
        <UpComing/>
      </div>
    </div>
  );
};

export default Categories;

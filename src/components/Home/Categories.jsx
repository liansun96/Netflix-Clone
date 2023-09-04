import Tv from "../Tv/Tv";
import Popular from "./Popular";
import "../Carousel.css";
import Movie from "../Movie/Movie";
import UpComing from "./UpComing";
import NowPlaying from "./NowPlaying";
import TopRated from "./TopRated";
import NowPlayingTv from "../Tv/NowPlayingTv";
import PopularTv from "../Tv/PopularTv";
import TopRatedTv from "../Tv/TopRatedTv";
import Test from "../Test/Test";

const Categories = () => {
  return (
    <div className="category-bg pt-48 lg:pt-10 translate-y-[-140px] h-full">
      <div className="w-[95%] mx-auto">
        <Test/>
        <Movie />
        <NowPlaying />
        <TopRated />
        <Popular />
        <Tv />
        <UpComing />
        <NowPlayingTv />
        <PopularTv />
        <TopRatedTv />
      </div>
    </div>
  );
};

export default Categories;

import Tv from "../Tv/Tv";
import Popular from "./Popular";
import "../Carousel.css";
import Movie from "../Movie/Movie";
import UpComing from "./UpComing";
import NowPlaying from "./NowPlaying";
import TopRated from "./TopRated";

const Categories = () => {
  return (
    <div className="category-bg pt-48 lg:pt-10 translate-y-[-140px] h-full">
      <div className="w-[95%] mx-auto">
        <Movie />
        <NowPlaying />
        <TopRated />
        <Popular />
        <Tv />
        <UpComing />
      </div>
    </div>
  );
};

export default Categories;

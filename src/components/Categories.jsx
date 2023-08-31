import Tv from "./Tv";
import Popular from "./Popular";
import './Carousel.css'
import Movie from "./Movie";
import UpComing from "./UpComing";
import NowPlaying from "./NowPlaying";
import TopRated from "./TopRated";

const Categories = () => {
  return (
    <div className="category-bg pt-20 pb-10 h-[1100px] lg:pt-10 lg:pb-10 translate-y-[-140px]">
      <div className="w-[95%] mx-auto">
        <Movie />
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

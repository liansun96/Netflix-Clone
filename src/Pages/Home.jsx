import Footer from "../components/Footer/Footer";
import Categories from "../components/Home/Categories";
import Header from "../components/Header";
import HomeNav from "../components/Home/HomeNav";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ToggleContext } from "../Context/ToggleProvider";
import MovieDetail from "../components/Movie/MovieDetail";
import PlayMovie from "../components/Movie/PlayMovie";
import TvDetail from "../components/Tv/TvDetail";
import PlayTv from "../components/Tv/PlayTv";
import Test from "../components/Test/Test";
import Movie from "../components/Movie/Movie";
import NowPlaying from "../components/Home/NowPlaying";
import TopRated from "../components/Home/TopRated";
import Popular from "../components/Home/Popular";
import UpComing from "../components/Home/UpComing";
import NowPlayingTv from "../components/Tv/NowPlayingTv";
import PopularTv from "../components/Tv/PopularTv";
import TopRatedTv from "../components/Tv/TopRatedTv";
import Tv from "../components/Tv/Tv";


const Home = () => {
  const nav = useNavigate();

  const { token, tvModal, playTvModal, modal, playMovieModal } =
    useContext(ToggleContext);

  if (tvModal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  useEffect(() => {
    !token && nav("signin");
  }, []);
  return (
    <div className="bg-[#141414]">
      <HomeNav />
      <div className="">
        <div className="overflow-hidden">
          <Header />
          <div className="category-bg pt-48 lg:pt-10 translate-y-[-140px] h-full">
            <div className="w-[95%] mx-auto">
              <Test />
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
          <Footer />
        </div>
      </div>
        {modal && <MovieDetail />}
        {playMovieModal && <PlayMovie />}
        {tvModal && <TvDetail />}
        {playTvModal && <PlayTv />}
    </div>
  );
};

export default Home;
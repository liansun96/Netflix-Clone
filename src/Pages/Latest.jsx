import { useContext } from "react";
import Footer from "../components/Footer/Footer";
import NowPlaying from "../components/Home/NowPlaying";
import UpComing from "../components/Home/UpComing";
import UpComingTwo from "../components/Home/UpComingTwo";
import PopularMovie from "../components/Movie/PopularMovie";
import HomeNav from "../components/Home/HomeNav";
import { ToggleContext } from "../Context/ToggleProvider";
import MovieDetail from "../components/Movie/MovieDetail";
import PlayMovie from "../components/Movie/PlayMovie";
import TvDetail from "../components/Tv/TvDetail";
import PlayTv from "../components/Tv/PlayTv";

const Latest = () => {

  const { tvModal, playTvModal, modal, playMovieModal } =
    useContext(ToggleContext);

  if (tvModal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  return (
    <div className="bg-[#141414]">
      <HomeNav />
      <div className="overflow-hidden">
        <div className="w-[95%] mx-auto py-28">
          <NowPlaying />
          <UpComingTwo />
          <UpComing />
          <PopularMovie />
        </div>
      </div>
      <Footer />
      {modal && <MovieDetail />}
      {playMovieModal && <PlayMovie />}
      {tvModal && <TvDetail />}
      {playTvModal && <PlayTv />}
    </div>
  );
};

export default Latest;

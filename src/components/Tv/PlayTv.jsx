import { useContext, useEffect, useRef, useState } from "react";
import { ToggleContext } from "../../Context/ToggleProvider";
import {
  useGetTvDetailQuery,
  useGetTvDetailVideoQuery,
} from "../../redux/api/movieApi";
import { RxCross1 } from "react-icons/rx";
import YouTube from "react-youtube";

const PlayTv = () => {
  const [trailer, setTrailer] = useState([]);

  const { togglePlayTvModal, id } = useContext(ToggleContext);
  const { data } = useGetTvDetailQuery({ id });
  const { data: video } = useGetTvDetailVideoQuery({ id });
  console.log(id);
  console.log(data);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  const updateScreenHeight = () => {
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    window.addEventListener("resize", updateScreenHeight);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
      window.removeEventListener("resize", updateScreenHeight);
    };
  }, []);
  console.log(screenWidth);

  const lastRoom = video?.results[video?.results?.length - 1]?.key;

  useEffect(() => {
    setTrailer(lastRoom);
  });
  console.log(trailer);

  const opts = {
    height: `${screenHeight}`,
    width: `${screenWidth}`,
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div
      onClick={togglePlayTvModal}
      className="fixed inset-0 bg-black bg-opacity-5 transition-all backdrop-blur-sm flex justify-center items-center z-[1005]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="group w-screen h-min relative"
      >
        <div className="overflow-hidden">
          <YouTube videoId={trailer} opts={opts} />
        </div>

        <button
          onClick={togglePlayTvModal}
          className="w-10 h-10 rounded-full flex justify-center items-center absolute left-[48%] -top-10 group-hover:top-8  text-center bg-white bg-opacity-70 hover:bg-opacity-80 duration-150"
        >
          <RxCross1 className="text-black font-bold scale-150" />
        </button>
      </div>
    </div>
  );
};

export default PlayTv;

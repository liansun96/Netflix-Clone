import React, { useContext } from "react";
import { BsPlayFill } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
import { ToggleContext } from "../../Context/ToggleProvider";

const MobileMovieHeader = ({ movie, detailImage }) => {
  const {
    handleGetId,
    modal,
    toggleModal,
    playMovieModal,
    togglePlayMovieModal,
    genreId,
  } = useContext(ToggleContext);

  const handelDetail = () => {
    toggleModal();
    handleGetId(movie?.id);
  };

  const handelPlay = () => {
    togglePlayMovieModal();
    handleGetId(movie?.id);
  };

  return (
    <header
      className="block lg:hidden mt-20 w-full shadow-inner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https:/image.tmdb.org/t/p/original/${movie?.poster_path}")`,
        backgroundPosition: "center",
        borderRadius: "10px",
        scale:"80%",
        height:"600px"
      }}
    >
      <div className="flex flex-col gap-5 items-center justify-end w-full h-full pb-3 custom-shadow-lg">        
        <div className="flex items-center gap-3 w-full px-3">
          <button
            onClick={handelPlay}
            className="flex items-center justify-center w-full h-12 bg-slate-50 hover:bg-slate-200 duration-300 rounded text-lg text-black font-semibold custom-btn-shadow"
          >
            <span className="">
              <BsPlayFill className="text-4xl" />
            </span>
            Play
          </button>
          <button
            onClick={handelDetail}
            className="flex items-center justify-center gap-2 w-full h-12 bg-opacity-60 bg-gray-500 hover:bg-opacity-60 hover:bg-gray-700 duration-300 rounded text-lg text-gray-100 font-semibold custom-btn-shadow"
          >
            <span className="">
              <BiInfoCircle className="text-4xl" />
            </span>
            More Info
          </button>
        </div>
      </div>
    </header>
  );
};

export default MobileMovieHeader;

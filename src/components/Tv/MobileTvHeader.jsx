import React, { useContext } from "react";
import { BsPlayFill } from "react-icons/bs";
import { ToggleContext } from "../../Context/ToggleProvider";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineCheck, HiOutlinePlus } from "react-icons/hi2";
import { addMovie, removeMovie } from "../../redux/services/favoritMovieSlice";

const MobileTvHeader = ({movie}) => {
  const {
    genreId,
    handleGetId,
    tvModal,
    toggleTvModal,
    playTvModal,
    togglePlayTvModal,
  } = useContext(ToggleContext);

  const favMovies = useSelector((state) => state.favoriteMovieSlice.favMovies);
  // console.log(favMovies);
  const dispatch = useDispatch();

  const isMovieInList = favMovies?.find((m) => m.id === movie?.id);
  
  const handleAddFav = () => {
    if (isMovieInList) {
      dispatch(removeMovie(movie));
    } else {
      // Movie is not in the list, dispatch addMovie action
      dispatch(addMovie(movie));
    }
  };

  const handelPlay = () => {
    togglePlayTvModal();
    handleGetId(movie?.id);
  };

  const handelDetail = () => {
    toggleTvModal();
    handleGetId(movie?.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -20 }}
      transition={{ duration: .7, delay: 0.1 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="block lg:hidden mt-14 w-full shadow-inner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.poster_path}")`,
        backgroundPosition: "center",
        borderRadius: "10px",
        scale: "80%",
        height: "600px",
      }}
      onClick={handelDetail}
    >
      <div onClick={(e) => e.stopPropagation()} className="flex flex-col gap-4 items-center justify-end w-full h-full pb-4 custom-shadow-lg">        
        <div className="flex items-center gap-3 w-full px-4">
          <button
            onClick={handelPlay}
            className="flex items-center justify-center w-full h-12 bg-slate-50 hover:bg-slate-200 duration-300 rounded text-lg text-black font-semibold custom-btn-shadow"
          >
            <span className="">
              <BsPlayFill className="text-4xl" />
            </span>
            Play
          </button>
          <button onClick={()=>handleAddFav(movie)} className="flex items-center justify-center gap-2 w-full h-10 bg-opacity-60 bg-gray-500 hover:bg-opacity-60 hover:bg-gray-700 duration-300 rounded text-lg text-gray-100 font-semibold custom-btn-shadow">
            <span className="">
              {isMovieInList ? (
                <HiOutlineCheck className="text-3xl text-gray-200" />
              ) : (
                <HiOutlinePlus className="text-3xl text-gray-200" />
              )}
            </span>
            My List
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileTvHeader;

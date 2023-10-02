import React, { useContext } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { IoPlaySharp } from "react-icons/io5";
import { VscTriangleDown } from "react-icons/vsc";
import { ToggleContext } from "../../Context/ToggleProvider";
import { addMovie, removeMovie } from "../../redux/services/favoritMovieSlice";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineCheck } from "react-icons/hi2";

const SimilarMovie = ({ result }) => {
  const { toggleModal, togglePlayMovieModal, handleGetId } =
    useContext(ToggleContext);

  const favMovies = useSelector((state) => state.favoriteMovieSlice.favMovies);
  // console.log(favMovies);
  const dispatch = useDispatch();

  const handelPlay = () => {
    togglePlayMovieModal();
    toggleModal();
    handleGetId(result?.id);
  };

  const isMovieInList = favMovies?.find((m) => m.id === result?.id);
  console.log(isMovieInList);

  const handleAddFav = () => {
    if (isMovieInList) {
      dispatch(removeMovie(result));
    } else {
      // Movie is not in the list, dispatch addMovie action
      dispatch(addMovie(result));
    }
  };

  return (
    <div
      onClick={handelPlay}
      className="group/edit w-[48%] md:w-[30%] lg:w-[250px] h-[350px] lg:h-[350px] bg-[#2F2F2F] rounded cursor-pointer"
    >
      <div className="relative">
        <div className="hidden lg:block">
          {result?.backdrop_path == null ? (
            <img
              src={"https://image.tmdb.org/t/p/w300" + result?.poster_path}
              className="rounded object-cover object-top h-[215px] lg:h-[142px] w-full"
              alt=""
            />
          ) : (
            <img
              src={"https://image.tmdb.org/t/p/w300" + result?.backdrop_path}
              className="rounded w-full"
              alt=""
            />
          )}
        </div>
        <div className="block lg:hidden">
          {result?.poster_path == null ? (
            <img
              src={"https://image.tmdb.org/t/p/w300" + result?.backdrop_path}
              className="rounded-t h-[250px] w-full"
              alt=""
            />
          ) : (
            <img
              src={"https://image.tmdb.org/t/p/w300" + result?.poster_path}
              className="block lg:hidden rounded-t h-[250px] w-full"
              alt=""
            />
          )}
        </div>

        <div className="scale-0 group-hover/edit:scale-100 duration-75 w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] absolute top-[40%] left-[40%] rounded-full border-2 bg-black bg-opacity-50 border-white flex justify-center items-center cursor-pointer">
          <IoPlaySharp className="text-white text-lg translate-x-[2px]" />
        </div>
      </div>
      <div className="p-1 lg:p-3 flex flex-col gap-1 lg:gap-3">
        <div className="flex justify-between items-center gap-1">
          <p className="block lg:hidden text-sm text-white font-bold">
            {result?.title?.length > 11
              ? `${result?.title?.substring(0, 11)} . . .`
              : result?.title}
          </p>
          <p className="hidden lg:block text-sm text-white font-bold">
            {result?.title?.length > 27
              ? `${result?.title?.substring(0, 27)} . . .`
              : result?.title}
          </p>
          <div
            onClick={(e) => e.stopPropagation()}
            className="visible lg:invisible group/my-list flex items-center justify-center h-[35px] w-[35px] rounded-full bg-transparent ring-1 ring-gray-400 relative hover:ring-white hover:duration-300 group/edit cursor-pointer"
          >
            <div onClick={()=>handleAddFav(result)}>
              {isMovieInList ? (
                <HiOutlineCheck className="text-2xl text-gray-200" />
              ) : (
                <HiOutlinePlus className="text-2xl text-gray-200" />
              )}

              {isMovieInList ? (
                <div className="invisible group-hover/my-list:visible absolute -top-[55px] right-[-15px] z-[1008] w-max px-2 py-1 bg-white rounded text-cneter">
                  <p className="text-lg font-semibold">Remove From List</p>
                  <VscTriangleDown className="text-white text-3xl translate-x-[105px] lg:translate-x-[45px] -translate-y-2 absolute" />
                </div>
              ) : (
                <div className="invisible group-hover/my-list:visible absolute -top-[55px] right-[-15px] z-[1008] w-max px-2 py-1 bg-white rounded text-cneter">
                  <p className="text-lg font-semibold">Add to My List</p>
                  <VscTriangleDown className="text-white text-3xl translate-x-[80px] lg:translate-x-[45px] -translate-y-2 absolute" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <p className="font-bold text-green-500">
              <span>{result?.vote_average?.toFixed(1) * 10}%</span> Match
            </p>
            <p className="text-sm font-semibold text-[#747474]">
              Release :{" "}
              <span className="text-base text-white">
                {result?.release_date}
              </span>
            </p>
          </div>
          <div onClick={(e) => e.stopPropagation()} className="hidden lg:block">
            <div
              onClick={() => handleAddFav(result)}
              className="group/my-list relative h-[35px] w-[35px] rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white hover:duration-300 group/edit cursor-pointer"
            >
              {isMovieInList ? (
                <HiOutlineCheck className="text-xl text-gray-200 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              ) : (
                <HiOutlinePlus className="text-2xl text-gray-200 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              )}
              {isMovieInList ? (
                <div className="invisible group-hover/my-list:visible absolute lg:-right-[50px] -top-[55px] z-[1008] w-max px-2 py-1 bg-white rounded text-cneter">
                  <p className="text-lg font-semibold">Remove From List</p>
                  <VscTriangleDown className="text-white text-3xl translate-x-[71px] -translate-y-2 absolute" />
                </div>
              ) : (
                <div className="invisible group-hover/my-list:visible absolute lg:-right-[50px] -top-[55px] z-[1008] w-max px-2 py-1 bg-white rounded text-cneter">
                  <p className="text-lg font-semibold">Add to My List</p>
                  <VscTriangleDown className="text-white text-3xl translate-x-[45px] -translate-y-2 absolute" />
                </div>
              )}
            </div>
          </div>
        </div>
        <p className="text-[#C8C8C8] text-sm tracking-tight hidden lg:block">
          {result?.overview?.length > 125
            ? `${result?.overview?.substring(0, 125)} . . .`
            : result?.overview}
        </p>
      </div>
    </div>
  );
};

export default SimilarMovie;

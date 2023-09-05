import { useContext, useState } from "react";
import { ToggleContext } from "../../Context/ToggleProvider";
import { NavLink } from "react-router-dom";
import {
  useGetMovieGenresQuery,
  useGetTvGenresQuery,
} from "../../redux/api/movieApi";
import { IoIosArrowDown } from "react-icons/io";

const SideBar = () => {
  const { data: movieGenres } = useGetMovieGenresQuery();
  const { data: TvGenres } = useGetTvGenresQuery();
  const { handleGetGenreId } = useContext(ToggleContext);
  const {
    sBar,
    toggleSideBar,
    movieShow,
    toggleMovieShow,
    tvShow,
    toggleTvShow,
  } = useContext(ToggleContext);

  return (
    <div
      onClick={toggleSideBar}
      className={`${
        sBar ? "translate-x-0" : "-translate-x-96"
      } w-full h-screen bg-transparent fixed left-0 top-0 block lg:hidden duration-300`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[250px] h-full absolute bg-black overflow-scroll"
      >
        <div className="h-[80px]"></div>
        <div className="flex flex-col gap-1 p-3">
          <div className="flex items-center gap-1">
            <div className="h-[30px] w-[30px] bg-gray-50 rounded"></div>
            <p className="text-gray-50 font-semibold">Marcus</p>
          </div>
          <p className="font-semibold text-gray-400">Account</p>
          <p className="font-semibold text-gray-400">Help Center</p>
          <p className="font-semibold text-gray-400">Sign Out of Netflix</p>
        </div>
        <div className="border-t-[0.5px] border-gray-700"></div>
        <div className="flex flex-col gap-1 p-3">
          <NavLink to={"/"}>
            <p className="font-semibold text-gray-400">Home</p>
          </NavLink>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <NavLink to={"/tvshows"}>
                <p className="font-semibold text-gray-400">Tv Shows</p>
              </NavLink>
              <IoIosArrowDown
                onClick={toggleTvShow}
                className={`${
                  tvShow ? "rotate-180 duration-300" : "rotate-0 duration-300"
                } text-gray-300`}
              />
            </div>
            <div
              className={`${tvShow ? "block h-full w-full" : "hidden h-0 w-0"}`}
            >
              <div className="flex flex-col gap-2 ps-5">
                {TvGenres?.genres?.map((genre) => (
                  <div key={genre.id}>
                    <p
                      onClick={() => handleGetGenreId(genre?.id)}
                      className="text-sm text-gray-300 cursor-pointer hover:underline"
                    >
                      {genre?.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <NavLink to={"/movies"}>
                <p className="font-semibold text-gray-400">Movies</p>
              </NavLink>
              <IoIosArrowDown
                onClick={toggleMovieShow}
                className={`${
                  movieShow
                    ? "rotate-180 duration-300"
                    : "rotate-0 duration-300"
                } text-gray-300`}
              />
            </div>
            <div
              className={`${
                movieShow ? "block h-full w-full" : "hidden h-0 w-0"
              }`}
            >
              <div className="flex flex-col gap-2 ps-5">
                {movieGenres?.genres?.map((genre) => (
                  <div key={genre.id}>
                    <p
                      onClick={() => handleGetGenreId(genre?.id)}
                      className="text-sm text-gray-300 cursor-pointer hover:underline"
                    >
                      {genre?.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <NavLink to={"/latest"}>
            <p className="font-semibold text-gray-400">Latest</p>
          </NavLink>
          <NavLink to={"/mylist"}>
            <p className="font-semibold text-gray-400">My List</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

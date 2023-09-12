import { useContext, useEffect, useState } from "react";
import Logo from "../image/Logo.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RiLayoutGridFill } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToggleContext } from "../../Context/ToggleProvider";
import { BiSearch } from "react-icons/bi";
import Profile from "../Profile";
import { useGetMovieGenresQuery } from "../../redux/api/movieApi";

const MovieNav = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSuggest, setShowSuggest] = useState(false);
  const {
    toggleSideBar,
    search,
    setSearch,
    showInput,
    handleInput,
    inputRef,
    grnreId,
    handleGetGenreId,
    genreName,
    handleGetGenreName,
  } = useContext(ToggleContext);

  const { data: movieGenres } = useGetMovieGenresQuery();
  console.log(movieGenres?.genres);
  console.log(grnreId);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    navigate("/search");
  };

  const handleShowSuggest = () => {
    setShowSuggest(!showSuggest);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const handleShowMenuOpen = () => {
    setShowMenu(true);
  };

  const handleSHowMenuClose = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const scrollFunc = () => {
      setScrollHeight(parseInt(window.scrollY));
    };

    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return (
    <div className="pb-0 lg:pb-5">
      <div className="fixed top-0 w-full z-50">
        <div className="">
          <div className="flex items-start lg:items-center justify-between px-3 lg:px-10 py-2 home-bg lg:bg-[#141414]">
            <div className="flex items-center gap-1 lg:gap-5">
              <div className="block lg:hidden">
                <IoMenu
                  onClick={toggleSideBar}
                  className="text-gray-50 text-4xl"
                />
              </div>
              <Link to={"/"}>
                <img src={Logo} className="h-[45px] cursor-pointer" alt="" />
              </Link>
              <div className="hidden lg:block">
                <div className="flex items-center gap-5">
                  <NavLink to="/">
                    <p className="text-[13px] font-semibold text-gray-300 hover:text-gray-400 duration-300">
                      Home
                    </p>
                  </NavLink>
                  <NavLink to="/tvshows">
                    <p className="text-[13px] font-semibold text-gray-300 hover:text-gray-400 duration-300">
                      Tv Shows
                    </p>
                  </NavLink>
                  <NavLink to="/movies">
                    <p className="text-[13px] font-semibold text-gray-300 hover:text-gray-400 duration-300">
                      Movies
                    </p>
                  </NavLink>
                  <NavLink to="/latest">
                    <p className="text-[13px] font-semibold text-gray-300 hover:text-gray-400 duration-300">
                      Latest
                    </p>
                  </NavLink>
                  <NavLink to={"/mylist"}>
                    <p className="text-[13px] font-semibold text-gray-300 hover:text-gray-400 duration-300">
                      My List
                    </p>
                  </NavLink>
                  <NavLink to={"/bbl"}>
                    <p className="text-[13px] font-semibold text-gray-300 hover:text-gray-400 duration-300">
                      Browse by Languages
                    </p>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="block lg:hidden">
              <input
                ref={inputRef}
                value={search}
                onChange={handleInputChange}
                type="text"
                className="px-2 py-1 bg-transparent border border-gray-400 text-xs text-gray-50 font-semibold w-[100px] outline-none placeholder:text-gray-500 focus:rounded focus:border-gray-50"
                placeholder="Search"
              />
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center gap-5">
                <div
                  onClick={handleInput}
                  className={showInput ? "inset-0 fixed mt-[50px]" : null}
                ></div>
                <div
                  className={`flex gap-3 items-center ${
                    showInput && "border px-3"
                  } border-white cursor-pointer`}
                >
                  <BiSearch
                    onClick={handleInput}
                    className="text-white text-2xl"
                  />
                  <input
                    onClick={(e) => e.stopPropagation()}
                    ref={inputRef}
                    value={search}
                    onChange={handleInputChange}
                    type="text"
                    className={`${
                      showInput ? "w-[220px]" : "w-0"
                    } duration-150 py-1 focus:outline-none bg-transparent text-white placeholder:text-xs`}
                    placeholder="Search by name"
                  />
                </div>
                <IoMdNotificationsOutline className="text-white text-2xl" />
                <Profile />
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div
              className={`${
                scrollHeight > 100 ? "bg-[#141414]" : "bg-transparent"
              } absolute text-white text-3xl w-full pl-12 pr-10 py-2 flex items-center justify-between duration-300`}
            >
              <div className="flex items-center gap-10 relative">
                <h1 className="text-3xl text-gray-50 font-semibold">Movies</h1>
                <div className="relative">
                  <button
                    onClick={handleShow}
                    className="flex items-center gap-5 bg-black px-2 text-sm border hover:bg-transparent hover:bg-opacity-50 mt-1"
                  >
                    {genreName}
                    <span>
                      <MdArrowDropDown className="text-lg" />
                    </span>
                  </button>
                  <div
                    className={`${
                      show ? "block" : "hidden"
                    } w-[400px] h-[220px] absolute bg-black bg-opacity-80 `}
                  >
                    <div className="py-1 px-2 flex gap-5 items-start">
                      <div className="flex flex-wrap gap-3">
                        {movieGenres?.genres?.map((genre) => (
                          <div key={genre.id}>
                            <p
                              onClick={() => (
                                handleGetGenreId(genre?.id),
                                handleGetGenreName(genre?.name),
                                handleShow()
                              )}
                              className="text-sm w-[120px] cursor-pointer"
                            >
                              {genre?.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div
                  onClick={handleSHowMenuClose}
                  className="px-3 py-1.5 border border-gray-400 hover:border-gray-50 cursor-pointer"
                >
                  <HiOutlineMenuAlt1 className="text-gray-300 text-lg" />
                </div>
                <div
                  onClick={handleShowMenuOpen}
                  className="flex items-center gap-4 px-3 py-1.5 border  border-gray-400 hover:border-gray-50 cursor-pointer"
                >
                  <RiLayoutGridFill className="text-gray-300 text-lg" />
                  <div className={`${showMenu ? "block" : "hidden"}`}>
                    <div className="flex items-center gap-20">
                      <h1 className="text-xs font-semibold text-gray-50">
                        Suggest for you
                      </h1>
                      <div className="flex relative">
                        <MdArrowDropDown
                          onClick={handleShowSuggest}
                          className="text-lg text-gray-50"
                        />
                        <div
                          className={`${
                            showSuggest ? "block" : "hidden"
                          } w-[210px] absolute border border-gray-50 bg-black bg-opacity-80 -left-44 top-5`}
                        >
                          <div className="py-1 px-2">
                            <div className="flex flex-col gap-1">
                              <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                                Suggestions for you
                              </p>
                              <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                                Year Released
                              </p>
                              <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                                A-Z
                              </p>
                              <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                                Z-A
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieNav;

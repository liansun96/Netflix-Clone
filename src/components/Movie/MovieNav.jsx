import { useContext, useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RiLayoutGridFill } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToggleContext } from "../../Context/ToggleProvider";
import { BiSearch } from "react-icons/bi";
import Profile from "../Profile";
import { useGetMovieGenresQuery } from "../../redux/api/movieApi";
import { AnimatePresence, motion } from "framer-motion";
import Noti from "../Noti";

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
    noti,
    setNoti,
  } = useContext(ToggleContext);

  const { data: movieGenres } = useGetMovieGenresQuery();
  console.log(movieGenres?.genres);
  // console.log(grnreId);

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
          <div className="flex items-center lg:items-center justify-between px-3 lg:px-10 py-2 home-nav-bg lg:bg-[#141414] rounded-none">
            <div className="flex items-center gap-1 lg:gap-5">
              <Link to={"/"}>
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                  }
                  className="h-[30px] my-2 cursor-pointer"
                  alt=""
                />
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
                  <NavLink to={"/browse-by-language"}>
                    <p className="text-[13px] font-semibold text-gray-300 hover:text-gray-400 duration-300">
                      Browse by Languages
                    </p>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="block lg:hidden">
              <div
                className={`flex gap-3 items-center rounded ${
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
                    showInput ? "w-[120px]" : "w-0"
                  } duration-150 py-1 focus:outline-none bg-transparent text-white placeholder:text-xs`}
                  placeholder="Search by name"
                />
              </div>
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
                <Noti />
                <Profile />
              </div>
            </div>
          </div>
          <div className="">
            <div
              className={`${
                scrollHeight > 100 ? "bg-[#141414]" : "bg-transparent"
              } absolute text-white text-3xl w-full px-10 py-2 flex items-center justify-between duration-300 invisible lg:visible`}
            >
              <div className="flex items-center gap-10 relative">
                <h1 className="text-3xl text-gray-50 font-semibold">Movies</h1>
                <div className="relative">
                  <button
                    onClick={handleShow}
                    className="flex items-center gap-4 bg-black px-3 lg:px-2 lg:rounded-none text-sm border border-l rounded-full p-1 lg:p-0 hover:bg-transparent hover:bg-opacity-50 mt-1"
                  >
                    {genreName}
                    <span>
                      <MdArrowDropDown className="text-2xl" />
                    </span>
                  </button>
                  <div
                    className={`${
                      show ? "block" : "hidden"
                    } w-[260px] h-[320px] lg:w-[400px] lg:h-[220px] absolute -right-16 lg:left-0  bg-black bg-opacity-80 `}
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
                              className="text-sm w-[110px] cursor-pointer"
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
              <div className="flex items-center invisible lg:visible">
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
            <div
              className={`${
                scrollHeight > 10
                  ? "opacity-0 duration-300 -translate-y-5"
                  : "opacity-100"
              } absolute text-white text-3xl w-full lg:px-10 py-2 ps-10 lg:flex lg:items-center lg:justify-between duration-300 block lg:hidden -z-10`}
            >
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, translateX: -20 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  className="flex items-start gap-3 relative"
                >
                  <button
                    onClick={() => navigate(-1)}
                    className="flex items-center justify-center gap-2 lg:gap-4 w-6 h-6 lg:rounded-none text-xs border border-l rounded-full lg:p-0 hover:bg-transparent hover:bg-opacity-50 mt-1"
                  >
                    <RxCross1 />
                  </button>
                  <div className="flex items-center gap-2 lg:gap-4 px-3 h-6 lg:rounded-none text-xs border border-l rounded-full lg:p-0 hover:bg-transparent hover:bg-opacity-50 mt-1">
                    Movies
                  </div>
                  <div className="relative">
                    <button
                      onClick={handleShow}
                      className="flex items-center gap-2 lg:gap-4 bg-[#556263] px-2 h-6 lg:rounded-none text-xs border border-l rounded-full lg:p-0 hover:bg-transparent hover:bg-opacity-50 mt-1"
                    >
                      {genreName}
                      <span>
                        <GoChevronDown className="text-xl mt-[4px]" />
                      </span>
                    </button>
                    <div
                      className={`${
                        show ? "block" : "hidden"
                      } w-[260px] h-[320px] lg:w-[400px] lg:h-[220px] absolute -right-16 lg:left-0  bg-black bg-opacity-80 `}
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
                                className="text-sm w-[110px] cursor-pointer"
                              >
                                {genre?.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="flex items-center invisible lg:visible">
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

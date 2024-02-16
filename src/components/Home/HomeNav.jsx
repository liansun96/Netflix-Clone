import { useContext, useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GoChevronDown } from "react-icons/go";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToggleContext } from "../../Context/ToggleProvider";
import Profile from "../Profile";
import { useGetMovieGenresQuery } from "../../redux/api/movieApi";
import { AnimatePresence, motion } from "framer-motion";
import Noti from "../Noti";

const HomeNav = () => {
  const {
    search,
    inputRefSm,
    showInputSm,
    setShowInputSm,
    handleInputSm,
    inputRef,
    setSearch,
    showInput,
    setShowInput,
    handleInput,
    genreName,
    handleGetGenreId,
    handleGetGenreName,
  } = useContext(ToggleContext);

  const [scrollHeight, setScrollHeight] = useState(0);
  const [show, setShow] = useState(false);

  const { data: movieGenres } = useGetMovieGenresQuery();

  const navigate = useNavigate();

   const handleInputChange = (e) => {
    setSearch(e.target.value);
    inputRef.current.focus();
    navigate("/search");
  };

  // const myDebounce = (cb, d) => {
  //   let timer;

  //   return function (...args) {
  //     if (timer) clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       cb(...args);
  //     }, d);
  //   };
  // };

  // const debounceSearch = myDebounce((searchValue) => {
  //   setSearch(searchValue);
  // },700);
  
  // const handleInputChange = (e) => {
  //   let searchValue = e.target.value;
  //   debounceSearch(searchValue);
  //   inputRef.current.focus();
  //   navigate("/search");
  // };

  useEffect(() => {
    // When the component mounts, focus the input element
    inputRef.current.focus();
  }, []);

  const handleShow = () => {
    setShow(!show);
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

  useEffect(() => {
    let handler = (e) => {
      if (!inputRef.current.contains(e.target)) {
        setShowInput(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    let handler = (e) => {
      if (!inputRefSm.current.contains(e.target)) {
        setShowInputSm(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="">
      <div className="fixed top-0 w-full z-50">
        <div
          className={`${
            scrollHeight > 100
              ? "lg:bg-[#141414] lg:bg-opacity-90"
              : "bg-transparent"
          } absolute w-full px-3 lg:px-10 py-2 home-nav-bg`}
        >
          <div className="flex items-center lg:items-center justify-between">
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
                className={`flex gap-1 items-center rounded ${
                  showInputSm && "border px-2"
                } border-white cursor-pointer`}
              >
                <BiSearch
                  onClick={handleInputSm}
                  className="text-white text-xl mt-1"
                />
                <input
                  ref={inputRefSm}
                  value={search}
                  onChange={handleInputChange}
                  type="text"
                  className={`${
                    showInputSm ? "w-[120px]" : "w-0"
                  } duration-150 py-1 focus:outline-none bg-transparent text-white placeholder:text-xs`}
                  placeholder="Search by name"
                />
              </div>
            </div>
            <div className="hidden lg:block ">
              <div className="flex items-center gap-5">
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
          <div
            className={`${
              scrollHeight > 10
                ? "opacity-0 duration-300 -translate-y-5"
                : "opacity-100"
            } absolute text-white text-3xl w-full lg:px-10 py-4 ps-7 lg:flex lg:items-center lg:justify-between duration-300 block lg:hidden -z-10`}
          >
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, translateX: -20 }}
                transition={{ duration: 1, delay: 0.1 }}
                animate={{ opacity: 1, translateX: 0 }}
                className="flex items-start gap-3 relative"
              >
                <button
                  onClick={() => navigate("/tvshows")}
                  className="flex items-center gap-2 lg:gap-4 px-3 h-6 lg:rounded-none text-xs border border-l rounded-full lg:p-0 hover:bg-transparent hover:bg-opacity-50 mt-1"
                >
                  TV Shows
                </button>
                <button
                  onClick={() => navigate("/movies")}
                  className="flex items-center gap-2 lg:gap-4 px-3 h-6 lg:rounded-none text-xs border border-l rounded-full lg:p-0 hover:bg-transparent hover:bg-opacity-50 mt-1"
                >
                  Movies
                </button>
                <div className="relative hidden">
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
                          <div key={genre?.id}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;

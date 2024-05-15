import { useContext, useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToggleContext } from "../../Context/ToggleProvider";
import { BiSearch } from "react-icons/bi";
import Profile from "../Profile";
import Noti from "../Noti";

const LatestNav = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const {
    toggleSideBar,
    search,
    setSearch,
    showInputSm,
    setShowInputSm,
    handleInputSm,
    inputRefSm,
    showInput,
    setShowInput,
    handleInput,
    inputRef,
  } = useContext(ToggleContext);

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
  //   navigate("/search");
  // }, 700);

  // const handleInputChange = (e) => {
  //   const searchValue = e.target.value;
  //   debounceSearch(searchValue);
  // };

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

  useEffect(() => {
    if (search !== "") {
      setShowInput(true);
      inputRef.current.focus();
    }
  }, [search]);

  return (
    <div className="pb-0 lg:pb-5">
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
        </div>
      </div>
    </div>
  );
};

export default LatestNav;

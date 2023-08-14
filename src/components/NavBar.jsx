import { useEffect, useState } from "react";
import Logo from "./image/Logo.svg";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RiLayoutGridFill } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
    <div className="fixed top-0 w-full z-50">
      <div className="">
        <div className="flex items-center justify-between px-10 py-2 bg-[#141414]">
          <div className="flex items-center gap-5">
            <div>
              <img src={Logo} className="h-[45px]" alt="" />
            </div>
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
              <p className="text-[13px] font-semibold text-gray-300 hover:text-gray-400 duration-300">
                My List
              </p>
              <p className="text-[13px] font-semibold text-gray-300 hover:text-gray-400 duration-300">
                Browse by Languages
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <BsSearch className="text-white text-lg" />
            <IoMdNotificationsOutline className="text-white text-2xl" />
          </div>
        </div>
        <div
          className={`${
            scrollHeight > 100 ? "bg-[#141414]" : "bg-transparent"
          } absolute text-white text-3xl w-full pl-12 pr-10 py-2 flex items-center justify-between duration-300`}
        >
          <div className="flex items-center gap-10 relative">
            <h1 className="text-3xl text-gray-50 font-bold">Movies</h1>
            <div className="relative">
              <button className="flex items-center gap-5 bg-black px-2 text-sm border hover:bg-transparent hover:bg-opacity-50 mt-1">
                Genres
                <span>
                  <MdArrowDropDown onClick={handleShow} className="text-lg" />
                </span>
              </button>
              <div
                className={`${
                  show ? "block" : "hidden"
                } w-[400px] absolute bg-black bg-opacity-80`}
              >
                <div className="py-1 px-2 flex gap-5 items-start">
                  <div className="flex flex-col gap-3">
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      Action
                    </p>
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      Anime
                    </p>
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      Asian
                    </p>
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      British
                    </p>
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      Comedies
                    </p>
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      Crime
                    </p>
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      Docuseries
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      Dramas
                    </p>
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      European
                    </p>
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      Horror
                    </p>
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      Kids
                    </p>
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      Reality & Talk
                    </p>
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      Romance
                    </p>
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      Sci-Fi & Fantasy
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      Science & Nature
                    </p>
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      Teen
                    </p>
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      The World of The Nature
                    </p>
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      Triller
                    </p>
                    <p className="hover:underline text-xs text-gray-50 transition cursor-pointer">
                      Us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="px-3 py-1.5 border border-gray-400 hover:border-gray-50 cursor-pointer">
              <HiOutlineMenuAlt1
                onClick={handleSHowMenuClose}
                className="text-gray-300 text-sm"
              />
            </div>
            <div
              onClick={handleShowMenuOpen}
              className="flex items-center gap-4 px-3 py-1.5 border  border-gray-400 hover:border-gray-50 cursor-pointer"
            >
              <RiLayoutGridFill className="text-gray-300 text-sm" />
              <div className={`${showMenu ? "block" : "hidden"}`}>
                <div className="flex items-center gap-20">
                  <h1 className="text-xs font-semibold text-gray-50">
                    suggest for you
                  </h1>
                  <MdArrowDropDown className="text-xs text-gray-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import { useContext, useEffect, useState } from "react";
import Logo from "./image/Logo.svg";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { ToggleContext } from "../Context/ToggleProvider";

const HomeNav = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const { toggleSideBar } = useContext(ToggleContext);

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
    <div className="">
      <div className="fixed top-0 w-full z-50">
        <div
          className={`${
            scrollHeight > 100 ? "lg:bg-[#141414] lg:bg-opacity-90" : "bg-transparent"
          } absolute w-full px-3 lg:px-10 py-2`}
        >
          <div className="flex items-start lg:items-center justify-between">
            <div className="flex items-center gap-1 lg:gap-5">
              <div className="block lg:hidden">
                <IoMenu
                  onClick={toggleSideBar}
                  className="text-gray-50 text-4xl"
                />
              </div>
              <div>
                <img src={Logo} className="h-[45px]" alt="" />
              </div>
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
                  <p className="text-[13px] font-semibold text-gray-300 hover:text-gray-400 duration-300">
                    My List
                  </p>
                  <p className="text-[13px] font-semibold text-gray-300 hover:text-gray-400 duration-300">
                    Browse by Languages
                  </p>
                </div>
              </div>
            </div>
            <div className="block lg:hidden">
              <input
                type="text"
                className="px-2 py-1 bg-transparent border border-gray-400 text-xs text-gray-50 font-semibold w-[100px] outline-none placeholder:text-gray-500 focus:rounded focus:border-gray-50"
                placeholder="Search"
              />
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center gap-5">
                <BsSearch className="text-white text-lg" />
                <IoMdNotificationsOutline className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;

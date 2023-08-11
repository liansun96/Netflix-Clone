import { useEffect, useState } from "react";
import Logo from "./image/Logo.svg";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RiLayoutGridFill } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";

const NavBar = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

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
    <div className="fixed top-0 w-full z-30">
      <div className="">
        <div className="flex items-center justify-between px-12 py-2 bg-[#0e0e0e]">
          <div className="flex items-center gap-5">
            <div>
              <img src={Logo} className="h-[45px]" alt="" />
            </div>
            <div className="flex items-center gap-5">
              <p className="text-sm text-gray-300">Home</p>
              <p className="text-sm text-gray-300">Tv Shows</p>
              <p className="text-sm text-gray-300">Movies</p>
              <p className="text-sm text-gray-300">Latest</p>
              <p className="text-sm text-gray-300">My List</p>
              <p className="text-sm text-gray-300">Browse by Languages</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <BsSearch className="text-white text-lg" />
            <IoMdNotificationsOutline className="text-white text-2xl" />
          </div>
        </div>
        <div
          className={`${
            scrollHeight > 100 ? "bg-[#0e0e0e]" : "bg-transparent"
          } absolute text-white text-3xl w-full px-14 py-1 flex items-center justify-between duration-300`}
        >
          <div className="flex items-center gap-10">
            <h1 className="text-4xl text-gray-50 font-bold">Movies</h1>
            <button className="flex items-center gap-5 bg-black px-2 text-sm border hover:bg-transparent hover:bg-opacity-50 mt-1">
              Genres
              <span>
                <MdArrowDropDown className="text-lg" />
              </span>
            </button>
          </div>
          <div className="flex items-center">
            <div className="px-3 py-1 border">
              <HiOutlineMenuAlt1 className="text-gray-300 text-sm" />
            </div>
            <div className="px-3 py-1 border">
              <RiLayoutGridFill className="text-gray-300 text-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

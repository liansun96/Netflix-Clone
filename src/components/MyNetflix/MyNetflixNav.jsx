import React, { useContext, useEffect, useState } from "react";
import { ToggleContext } from "../../Context/ToggleProvider";
import { useNavigate } from "react-router";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const MyNetflixNav = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const {sBar, toggleSideBar, search, setSearch, showInput, handleInput, inputRef } =
    useContext(ToggleContext);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    inputRef.current.focus();
    navigate("/search");
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
        <div
          className={`${
            scrollHeight > 100
              ? "lg:bg-[#141414] lg:bg-opacity-90"
              : "bg-transparent"
          } absolute w-full px-3 lg:px-10 py-2 ${sBar ? "" : "home-nav-bg"}`}
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
            </div>
            <div className="flex items-center">
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
              <div className="block lg:hidden">
                <AiOutlineMenu
                  onClick={toggleSideBar}
                  className="text-gray-50 text-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNetflixNav;

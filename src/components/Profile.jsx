import React, { useState } from "react";
import { IoMdNotificationsOutline, IoMdArrowDropdown } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const nav = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const handleClick = () => {
    localStorage.clear();
    nav("/signin");
  };

  return (
    <div
      className="flex relative z-[1016]"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="flex items-center gap-1 cursor-pointer">
        <img
          className="rounded w-8"
          src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"
          alt=""
        />
        <div>
          <IoMdArrowDropdown
            className={`${
              hovered ? "rotate-180 duration-300" : "rotate-0 duration-300"
            } text-gray-50 text-xl translate-x-1`}
          />
        </div>
      </div>
      <div
        className={`${
          hovered ? "block" : "hidden"
        } w-[180px] absolute bg-transparent top-7 right-5 p-1`}
      >
        <div className=" p-3 bg-black bg-opacity-60">
          <div className="flex flex-col gap-4 p-1">
            <div className="flex gap-1 items-center cursor-pointer">
              <img
                className="rounded w-8"
                src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"
                alt=""
              />
              <h1 className="text-sm font-semibold text-gray-50 hover:text-gray-400 duration-300">
                Marcus
              </h1>
            </div>
            <div className="flex gap-1 text-center">
              <span>
                <RiEdit2Fill className="text-xl text-gray-50" />
              </span>
              <h1 className="text-xs text-gray-50 hover:text-gray-300 duration-300 cursor-pointer">
                Manage Profile
              </h1>
            </div>
            <div className="flex gap-1 text-center">
              <span className="text-xl text-gray-50">
                <BsBoxArrowUpRight />
              </span>
              <h1 className="text-xs text-gray-50 hover:text-gray-300 duration-300 cursor-pointer">
                Exit Profile
              </h1>
            </div>
            <div className="flex gap-1 text-center">
              <span className="text-xl text-gray-50">
                <FaRegFaceSmileWink />
              </span>
              <h1 className="text-xs text-gray-50 hover:text-gray-300 duration-300 cursor-pointer">
                Transfer Profile
              </h1>
            </div>
            <div className=" flex gap-1 text-center">
              <span className="text-xl text-gray-50">
                <MdOutlineAccountCircle />
              </span>
              <h1 className="text-xs text-gray-50 hover:text-gray-300 duration-300 cursor-pointer">
                Account
              </h1>
            </div>
            <div className="flex gap-1 text-center">
              <span className="text-xl text-gray-50">
                <AiFillQuestionCircle />
              </span>
              <h1 className="text-xs text-gray-50 hover:text-gray-300 duration-300 cursor-pointer">
                Help Center
              </h1>
            </div>
            <p className="border border-x-0 border-t-0 border-gray-300"></p>
            <p
              onClick={handleClick}
              className="text-xs text-gray-50 hover:text-gray-300 font-semibold text-center cursor-pointer"
            >
              Sign out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

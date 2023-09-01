import React, { useState } from "react";
import { IoMdNotificationsOutline, IoMdArrowDropdown } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { AiFillQuestionCircle } from "react-icons/ai";

const Profile = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div className="flex relative">
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className="flex items-center gap-1 "
      >
        <div className="h-[30px] w-[30px] bg-white rounded"></div>
        <div>
          <IoMdArrowDropdown
            className={`${
              hovered ? "rotate-180 duration-300" : "rotate-0 duration-300"
            } text-gray-50`}
          />
        </div>
      </div>
      <div
        className={`${
          hovered ? "opacity-100 duration-300" : "opacity-0 duration-300"
        } w-[180px] absolute bg-black top-10 right-5 p-3`}
      >
        <div className="flex flex-col gap-3">
          <p className="text-gray-50 text-xs flex gap-1 text-center">
            <span>
              <RiEdit2Fill className="text-xl" />
            </span>
            Manage Profile
          </p>
          <p className="text-gray-50 text-xs flex gap-1 text-center">
            <span className="text-xl">
              <BsBoxArrowUpRight />
            </span>
            Exit Profile
          </p>
          <p className="text-gray-50 text-xs flex gap-1 text-center">
            <span className="text-xl">
              <FaRegFaceSmileWink />
            </span>
            Transfer Profile
          </p>
          <p className="text-gray-50 text-xs flex gap-1 text-center">
            <span className="text-xl">
              <MdOutlineAccountCircle />
            </span>
            Account
          </p>
          <p className="text-gray-50 text-xs flex gap-1 text-center">
            <span className="text-xl">
              <AiFillQuestionCircle />
            </span>
            Help Center
          </p>
          <p className="border border-x-0 border-t-0 border-gray-300"></p>
          <p className="text-xs text-gray-50 text-center">Sign out of Netflix</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

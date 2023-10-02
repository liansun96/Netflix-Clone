import { useContext, useState } from "react";
import { ToggleContext } from "../../Context/ToggleProvider";
import {
  MdOutlineModeEdit,
  MdOutlineSettings,
  MdOutlineHelpOutline,
} from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { VscSignOut } from "react-icons/vsc";
import {RxCross2} from 'react-icons/rx'

const SideBar = () => {
  const { handleGetGenreId } = useContext(ToggleContext);
  const {
    sBar,
    toggleSideBar,
    movieShow,
    toggleMovieShow,
    tvShow,
    toggleTvShow,
  } = useContext(ToggleContext);

  return (
    <div
      onClick={toggleSideBar}
      className={`${
        sBar ? "translate-y-0" : "translate-y-[1000px]"
      } w-full h-screen fixed left-0 top-0 block lg:hidden duration-300 z-[10009]`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-[40%] absolute bottom-0 rounded-t-xl bg-neutral-800 "
      >
        <div className="flex flex-col gap-6 p-3">
          <div className="flex items-center gap-2 text-white">
            <MdOutlineModeEdit className="text-3xl" />
            <p className="font-semibold">Manage Profiles</p>
          </div>
          <div className="flex items-center gap-2 text-white">
            <MdOutlineSettings className="text-3xl" />
            <p className="font-semibold">App Settings</p>
          </div>
          <div className="flex items-center gap-2 text-white">
            <RiUser3Line className="text-3xl" />
            <p className="font-semibold">Account</p>
          </div>
          <div className="flex items-center gap-2 text-white">
            <MdOutlineHelpOutline className="text-3xl" />
            <p className="font-semibold">Help</p>
          </div>
          <div className="flex items-center gap-2 text-white">
            <VscSignOut className="text-3xl" />
            <p className="font-semibold">Sign Out</p>
          </div>
          <p className="text-gray-500 text-sm">Version: 16.1.0 (4535) 5.0.1-0011</p>
          <div onClick={toggleSideBar} className="w-8 h-8 rounded-full flex items-center justify-center bg-black bg-opacity-30 absolute top-2 right-2">
            <RxCross2 className="text-white text-xl"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

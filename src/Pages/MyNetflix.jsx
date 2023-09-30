import React, { useContext } from "react";
import { MdNotifications } from "react-icons/md";
import { HiMiniChevronRight, HiMiniChevronDown } from "react-icons/hi2";
import { HiDownload } from "react-icons/hi";
import MobileBottomMenuBar from "../components/SideBar/MobileBottomMenuBar";
import MyNetflixNav from "../components/MyNetflix/MyNetflixNav";
import { ToggleContext } from "../Context/ToggleProvider";

const MyNetflix = () => {
  const { sBar, toggleSideBar } = useContext(ToggleContext);

  return (
    <div className="block lg:hidden">
      <div className={`bg-[#141414] min-h-screen duration-500 ${sBar ? "scale-90 opacity-80" : "scale-100"}`}>
        <MyNetflixNav />
        <div className="w-full flex flex-col items-center justify-center gap-3 pt-20">
          <div className="flex flex-col items-center justify-center">
            <img
              className="rounded w-20"
              src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"
              alt=""
            />
            <div className="flex items-center">
              <p className="text-neutral-200 text-xl font-bold">Marcus</p>
              <HiMiniChevronDown className="text-white text-2xl" />
            </div>
          </div>
          <div className="w-full px-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                <MdNotifications className="text-white text-2xl" />
              </div>
              <p className="text-neutral-200 text-xl font-bold">
                Notifications
              </p>
            </div>
            <HiMiniChevronRight className="text-white text-2xl" />
          </div>
          <div className="w-full px-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                <HiDownload className="text-white text-2xl" />
              </div>
              <p className="text-neutral-200 text-xl font-bold">Downloads</p>
            </div>
            <HiMiniChevronRight className="text-white text-2xl" />
          </div>
        </div>
        <MobileBottomMenuBar />
      </div>
    </div>
  );
};

export default MyNetflix;

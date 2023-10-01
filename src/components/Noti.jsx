import React, { useContext, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useGetUpcomingTwoQuery } from "../redux/api/movieApi";
import { ToggleContext } from "../Context/ToggleProvider";

const Noti = () => {
  const { data } = useGetUpcomingTwoQuery();

  const { handleGetId, toggleModal } = useContext(ToggleContext);

  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className="flex relative cursor-pointer"
    >
      <div className="relative flex">
        <IoMdNotificationsOutline className="text-white text-2xl" />
        <div className="flex items-center justify-center absolute w-[14px] h-[14px] bg-red-500 rounded-full -right-[4px]">
            <p className="text-[8px] text-gray-50 font-bold">20</p>
        </div>
      </div>
      <div
        className={`${
          hovered ? "block" : "hidden"
        } absolute top-5 -right-2 p-3 z-[1040]`}
      >
        <div className="group flex flex-col bg-black bg-opacity-60 h-[300px] w-[380px] overflow-y-scroll">
          {data?.results?.map((result) => {
            const handelDetail = () => {
              toggleModal();
              handleGetId(result?.id);
            };
            return (
              <div
                key={result?.id}
                onClick={handelDetail}
                className="flex gap-2 items-start py-3 px-2 bg-transparent hover:bg-black hover:bg-opacity-80 border-b border-gray-400"
              >
                <img
                  src={
                    "https://image.tmdb.org/t/p/w300" + result?.backdrop_path
                  }
                  alt=""
                  className="w-[120px] h-[60px] rounded"
                />
                <p className="text-gray-400 text-sm hover:text-gray-50">
                  {result?.overview.substring(0, 100)}...
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Noti;

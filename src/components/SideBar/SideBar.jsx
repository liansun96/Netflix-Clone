import { useContext } from "react";
import { ToggleContext } from "../../Context/ToggleProvider";

const SideBar = () => {
  const { sBar, toggleSideBar } = useContext(ToggleContext);
  return (
    <div
      onClick={toggleSideBar}
      className={`${
        sBar ? "translate-x-0" : "-translate-x-96"
      } w-full h-screen bg-transparent fixed left-0 top-0 block lg:hidden duration-300`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[250px] h-screen absolute bg-black"
      >
        <div className="h-[80px]"></div>
        <div className="flex flex-col gap-1 p-3">
          <div className="flex items-center gap-1">
            <div className="h-[30px] w-[30px] bg-gray-50 rounded"></div>
            <p className="text-gray-50 font-semibold">Marcus</p>
          </div>
          <p className="font-semibold text-gray-400">Account</p>
          <p className="font-semibold text-gray-400">Help Center</p>
          <p className="font-semibold text-gray-400">Sign Out of Netflix</p>
        </div>
        <div className="border-t-[0.5px] border-gray-700"></div>
        <div className="flex flex-col gap-1 p-3">
          <p className="font-semibold text-gray-400">Home</p>
          <p className="font-semibold text-gray-400">My List</p>
          <p className="font-semibold text-gray-400">Trillers</p>
          <p className="font-semibold text-gray-400">Crime</p>
          <p className="font-semibold text-gray-400">Kids & Family</p>
          <p className="font-semibold text-gray-400">Reality TV</p>
          <p className="font-semibold text-gray-400">Action</p>
          <p className="font-semibold text-gray-400">Anime</p>
          <p className="font-semibold text-gray-400">Comedies</p>
          <p className="font-semibold text-gray-400">Fantasy</p>
          <p className="font-semibold text-gray-400">Sci-Fi</p>
          <p className="font-semibold text-gray-400">Horror</p>
          <p className="font-semibold text-gray-400">Stand-Up Comedy</p>
          <p className="font-semibold text-gray-400">Music & Musicals</p>
          <p className="font-semibold text-gray-400">Romance</p>
          <p className="font-semibold text-gray-400">Darama</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

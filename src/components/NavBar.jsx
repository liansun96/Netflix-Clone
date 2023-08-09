import React, { useEffect, useState } from "react";

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
    <nav className="fixed top-0 w-full z-40">
      <div className="px-14 py-3 text-3xl text-white bg-black">Navbar</div>
      <div
        className={`${
          scrollHeight > 100 ? "bg-black" : "bg-transparent"
        } absolute text-white text-3xl w-full px-14 py-3 flex items-center justify-between duration-300`}
      >
        <div className="flex items-center gap-10">
          <h1 className="text-3xl text-gray-50">Movies</h1>
          <button className="bg-black px-2 text-sm border hover:bg-opacity-50 mt-1">
            Genres
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

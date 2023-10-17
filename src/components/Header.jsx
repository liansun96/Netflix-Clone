import { useContext, useEffect, useState } from "react";
import { useGetMovieImageQuery, useGetMovieQuery } from "../redux/api/movieApi";
import { BsPlayFill } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
import { ToggleContext } from "../Context/ToggleProvider";

const Header = () => {
  const {
    genreId,
    handleGetId,
    toggleModal,
    playMovieModal,
    togglePlayMovieModal,
  } = useContext(ToggleContext);

  const [movie, setMovie] = useState([]);
  const { data } = useGetMovieQuery({ genreId });
  console.log(data?.results);

  const movieId = movie?.id;

  const { data: detailImage, isLoading } = useGetMovieImageQuery({ movieId });
  // console.log(detailImage?.logos[0]?.file_path);

  useEffect(() => {
    setMovie(data?.results[Math.floor(Math.random() * data?.results?.length)]);
  }, [data]);

  const handelDetail = () => {
    toggleModal();
    handleGetId(movie?.id);
    console.log("detail");
  };

  const handelPlay = () => {
    togglePlayMovieModal();
    handleGetId(movie?.id);
    console.log("play");
  };

  if (playMovieModal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  return (
    <header
      className="h-screen w-full shadow-inner hidden lg:block"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="flex flex-col gap-5 items-start justify-end w-full h-full pb-40 pl-12">
        <img
          className="w-[350px]"
          src={`https://www.themoviedb.org/t/p/original/${detailImage?.logos[0]?.file_path}`}
          alt=""
        />
        <h1 className="w-[600px] text-white drop-shadow-2xl font-semibold">
          {movie?.overview?.length > 150
            ? movie?.overview?.slice(0, movie?.overview?.indexOf(".", 150) + 1)
            : movie?.overview}
        </h1>
        <div className="flex items-center gap-3">
          <button
            onClick={handelPlay}
            className="flex items-center px-6 h-12 bg-gray-50 hover:bg-gray-400 duration-300 rounded text-lg text-black font-semibold custom-btn-bg"
          >
            <span className="">
              <BsPlayFill className="text-4xl" />
            </span>
            Play
          </button>
          <button
            onClick={handelDetail}
            className="flex items-center gap-2 px-6 h-12 bg-opacity-60 bg-gray-500 hover:bg-opacity-60 hover:bg-gray-700 duration-300 rounded text-lg text-gray-100 font-semibold custom-btn-bg"
          >
            <span className="">
              <BiInfoCircle className="text-4xl" />
            </span>
            More Info
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

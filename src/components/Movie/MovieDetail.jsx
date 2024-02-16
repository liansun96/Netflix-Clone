import { useContext, useEffect, useRef, useState } from "react";
import { ToggleContext } from "../../Context/ToggleProvider";
import {
  useGetDetailRecommendationsQuery,
  useGetDetailVideoQuery,
  useGetMovieDetailQuery,
} from "../../redux/api/movieApi";
import { RxCross1 } from "react-icons/rx";
import { HiOutlinePlus, HiOutlineCheck } from "react-icons/hi";
import YouTube from "react-youtube";
import "./MovieDetail.css";
import SimilarMovie from "./SimilarMovie";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { VscTriangleDown } from "react-icons/vsc";
import { addMovie, removeMovie } from "../../redux/services/favoritMovieSlice";
import { BsHandThumbsUp, BsPlayFill } from "react-icons/bs";

const MovieDetail = () => {
  const [trailer, setTrailer] = useState([]);

  const { toggleModal, id, togglePlayMovieModal } = useContext(ToggleContext);
  const { data } = useGetMovieDetailQuery({ id });
  const { data: recData } = useGetDetailRecommendationsQuery({ id });
  const { data: video } = useGetDetailVideoQuery({ id });
  // console.log(id);
  // console.log(data);
  // console.log(recData?.results);
  // console.log(video);
  const parentRef = useRef(null);
  // console.log(parentRef?.current?.offsetWidth);

  const lastRoom = video?.results[video?.results?.length - 1]?.key;

  useEffect(() => {
    setTrailer(lastRoom);
  });
  // console.log(trailer);

  const opts = {
    height: "455",
    width: "880",
    playerVars: {
      autoplay: 0,
    },
  };
  const opts_sm = {
    height: "300",
    width: `${parentRef?.current?.offsetWidth}`,
    playerVars: {
      autoplay: 0,
    },
  };

  const castNameSm = [];
  for (let i = 0; i < 5; i++) {
    if (data?.credits?.cast) {
      castNameSm.push(data?.credits?.cast[`${i}`]?.name);
    } else {
      break;
    }
  }

  const castName = data?.credits?.cast?.map((cast) => cast.name) || [];
  // console.log(castName);

  const genresName = data?.genres?.map((genre) => genre.name) || [];
  // console.log(genresName);

  const crewName = data?.credits?.crew?.map((crew) => crew.name) || [];
  // console.log(crewName);

  const productionCompanyName =
    data?.production_companies?.map((company) => company.name) || [];
  // console.log(productionCompanyName);

  const productionCountryName =
    data?.production_countries?.map((country) => country.name) || [];
  // console.log(productionCountryName);

  const languageName =
    data?.spoken_languages?.map((language) => language.name) || [];
  // console.log(languageName);

  const languageEngName =
    data?.spoken_languages?.map((language) => language.english_name) || [];
  // console.log(languageEngName);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const castRef = useRef(null);

  const favMovies = useSelector((state) => state.favoriteMovieSlice.favMovies);
  // console.log(favMovies);
  const dispatch = useDispatch();

  const handelPlay = () => {
    togglePlayMovieModal();
    toggleModal();
    handleGetId(data);
  };

  const handleAddFav = () => {
    if (isMovieInList) {
      dispatch(removeMovie(data));
    } else {
      // Movie is not in the list, dispatch addMovie action
      dispatch(addMovie(data));
    }
  };

  const isMovieInList = favMovies?.find((m) => m.id === data?.id);
  // console.log(isMovieInList);

  return (
    <div
      onClick={toggleModal}
      className="fixed inset-0 bg-black bg-opacity-50 overflow-y-scroll transition-all backdrop-blur-sm flex justify-center items-center z-[1011]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="group/item w-[97%] h-[97%] mt-3 lg:h-auto lg:w-[880px] no-scrollbar rounded-xl touch-auto overflow-y-scroll overflow-hidden bg-[#181818] fixed top-0 lg:top-10"
      >
        <div className="relative">
          <YouTube
            className="z-[1006] hidden lg:block"
            videoId={trailer}
            opts={opts}
          />
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex gap-2 absolute bottom-4  right-4 z-[1007] invisible lg:visible"
          >
            <button
              onClick={handelPlay}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white hover:duration-300"
            >
              <BsPlayFill className="text-white text-3xl" />
            </button>
            <div
              onClick={() => handleAddFav(data)}
              className="group/my-list relative h-10 w-10 rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white hover:duration-300 group/edit cursor-pointer"
            >
              {isMovieInList ? (
                <HiOutlineCheck className="text-xl text-gray-200 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              ) : (
                <HiOutlinePlus className="text-2xl text-gray-200 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              )}
              {isMovieInList ? (
                <div className="invisible group-hover/my-list:visible absolute lg:-right-[50px] -top-[55px] z-[1008] w-max px-2 py-1 bg-white rounded text-cneter">
                  <p className="text-lg font-semibold">Remove From List</p>
                  <VscTriangleDown className="text-white text-3xl translate-x-[71px] -translate-y-2 absolute" />
                </div>
              ) : (
                <div className="invisible group-hover/my-list:visible absolute lg:-right-[50px] -top-[55px] z-[1008] w-max px-2 py-1 bg-white rounded text-cneter">
                  <p className="text-lg font-semibold">Add to My List</p>
                  <VscTriangleDown className="text-white text-3xl translate-x-[45px] -translate-y-2 absolute" />
                </div>
              )}
            </div>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white hover:duration-300">
              <BsHandThumbsUp className="text-xl text-gray-200" />
            </button>
          </div>
        </div>

        <div ref={parentRef} className="">
          <YouTube
            className="z-[1006] block lg:hidden"
            videoId={trailer}
            opts={opts_sm}
          />
        </div>

        <div className="block lg:hidden">
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex gap-2 z-[1007] p-2"
          >
            <button
              onClick={handelPlay}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white hover:duration-300"
            >
              <BsPlayFill className="text-white text-4xl" />
            </button>
            <div
              onClick={() => handleAddFav(data)}
              className="group/my-list relative h-10 w-10 rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white hover:duration-300 group/edit cursor-pointer"
            >
              {isMovieInList ? (
                <HiOutlineCheck className="text-xl text-gray-200 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              ) : (
                <HiOutlinePlus className="text-2xl text-gray-200 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              )}
              {isMovieInList ? (
                <div className="invisible group-hover/my-list:visible absolute left-[-47px] lg:-right-[50px] -top-[55px] z-[1008] w-max px-2 py-1 bg-white rounded text-cneter">
                  <p className="text-lg font-semibold">Remove From List</p>
                  <VscTriangleDown className="text-white text-3xl translate-x-[45px] -translate-y-2 absolute" />
                </div>
              ) : (
                <div className="invisible group-hover/my-list:visible absolute left-[-47px] lg:-right-[50px] -top-[55px] z-[1008] w-max px-2 py-1 bg-white rounded text-cneter">
                  <p className="text-lg font-semibold">Add to My List</p>
                  <VscTriangleDown className="text-white text-3xl translate-x-[45px] -translate-y-2 absolute" />
                </div>
              )}
            </div>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white hover:duration-300">
              <BsHandThumbsUp className="text-xl text-gray-200" />
            </button>
            <button
              onClick={toggleModal}
              className="ms-auto w-10 h-10 rounded-full flex justify-center items-center text-center bg-white bg-opacity-50 hover:bg-opacity-80 duration-150"
            >
              <RxCross1 className="text-white font-bold scale-150" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-10 p-2 lg:p-10 text-white">
          <div className="w-full lg:w-[65%]">
            <div className="flex justify-between gap-5">
              <p className="font-bold text-green-500">
                <span>{data?.vote_average?.toFixed(1) * 10}%</span> Match
              </p>
              <p className="text-sm font-semibold text-[#747474]">
                Release Date :{" "}
                <span className="text-base text-white">
                  {data?.release_date}
                </span>
              </p>
            </div>
            <br />
            <p className="text-justify">{data?.overview}</p>
          </div>
          <div className="w-full lg:w-[50%]">
            <div className="">
              <span className="text-sm font-semibold text-[#747474]">Cast</span>{" "}
              :
              {castNameSm.map((name, index) => (
                <p key={index} className="inline">
                  {name} ,{" "}
                </p>
              ))}
              <i
                onClick={() => scrollToRef(castRef)}
                className="font-bold cursor-pointer"
              >
                more
              </i>
            </div>
            <br />
            <div>
              <span className="text-sm font-semibold text-[#747474]">
                Genres
              </span>{" "}
              :
              {genresName.map((name, i) => (
                <>
                  <p key={i} className="inline">
                    {name}
                  </p>
                  {i !== genresName.length - 1 && <span>, </span>}
                </>
              ))}
            </div>
            <br />
            <div>
              <span className="text-sm font-semibold text-[#747474]">
                Spoken Languages
              </span>{" "}
              :
              {languageName.map((name, index) => (
                <>
                  <p key={index} className="inline">
                    {name}
                  </p>
                  {index !== languageName.length - 1 && <span>, </span>}
                </>
              ))}{" "}
              /{" "}
              {languageEngName.map((name, index) => (
                <>
                  <p key={index} className="inline">
                    {name}
                  </p>
                  {index !== languageEngName.length - 1 && <span>, </span>}
                </>
              ))}
            </div>

            <br />
            <p>
              <span className="text-sm font-semibold text-[#747474]">
                Status
              </span>{" "}
              : {data?.status}
            </p>
          </div>
        </div>

        <h1 className="text-2xl text-white font-semibold p-2 lg:p-10">
          More Like This
        </h1>

        <div className="flex gap-2 lg:gap-6 justify-between flex-wrap px-2 lg:px-10">
          {recData?.results.map((result, index) => (
            <SimilarMovie key={index} result={result} />
          ))}
        </div>

        <div className="p-2 lg:p-10 space-y-3" ref={castRef}>
          <h1 className="text-2xl text-white font-semibold ">
            About{" "}
            <span className="text-3xl font-bold">{data?.original_title}</span>
          </h1>
          <div className="text-justify">
            <span className="text-sm font-semibold text-[#747474]">
              Cast :{" "}
            </span>
            {castName.map((name, index) => (
              <>
                <p key={index} className="inline text-sm text-white">
                  {name}
                </p>
                {index !== castName.length - 1 && (
                  <span className="text-white">, </span>
                )}
              </>
            ))}
          </div>
          <div className="text-justify">
            <span className="text-sm font-semibold text-[#747474]">
              Crew :{" "}
            </span>
            {crewName.map((name, index) => (
              <>
                <p key={index} className="inline text-sm text-white">
                  {name}
                </p>
                {index !== crewName.length - 1 && (
                  <span className="text-white">, </span>
                )}
              </>
            ))}
          </div>
          <div>
            <span className="text-sm font-semibold text-[#747474]">
              Genres :
            </span>
            {genresName.map((name, index) => (
              <>
                <p key={index} className="inline text-sm text-white">
                  {name}
                </p>
                {index !== genresName.length - 1 && (
                  <span className="text-white">, </span>
                )}
              </>
            ))}
          </div>
          <div>
            <span className="text-sm font-semibold text-[#747474]">
              Spoken Languages :
            </span>{" "}
            {languageName.map((name, index) => (
              <>
                <p key={index} className="inline text-sm text-white">
                  {name}
                </p>
                {index !== languageName.length - 1 && <span>, </span>}
              </>
            ))}
          </div>
          <p className="text-sm font-semibold text-[#747474]">
            Release Date :{" "}
            <span className="text-base text-white">{data?.release_date}</span>
          </p>
          <p className="text-sm font-semibold text-[#747474]">
            Website :{" "}
            <Link
              to={data?.homepage}
              target="_blank"
              className="text-sm text-white cursor-pointer"
            >
              {data?.homepage}
            </Link>
          </p>
          <div>
            <span className="text-sm font-semibold text-[#747474]">
              Production Companies :
            </span>
            {productionCompanyName.map((name, index) => (
              <>
                <p key={index} className="inline text-sm text-white">
                  {name}
                </p>
                {index !== productionCompanyName.length - 1 && (
                  <span className="text-white">, </span>
                )}
              </>
            ))}
          </div>
          <div>
            <span className="text-sm font-semibold text-[#747474]">
              Production Countries :
            </span>
            {productionCountryName.map((name, index) => (
              <>
                <p key={index} className="inline text-sm text-white">
                  {name}
                </p>
                {index !== productionCountryName.length - 1 && (
                  <span className="text-white">, </span>
                )}
              </>
            ))}
          </div>
        </div>

        <button
          onClick={toggleModal}
          className="invisible lg:visible -top-10 group-hover/item:top-5 w-10 h-10 rounded-full flex justify-center items-center absolute left-[48%] text-center bg-black bg-opacity-70 hover:bg-opacity-80 duration-150"
        >
          <RxCross1 className="text-white font-bold scale-150" />
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;

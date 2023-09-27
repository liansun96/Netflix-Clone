import { useContext, useEffect, useRef, useState } from "react";
import { ToggleContext } from "../../Context/ToggleProvider";
import {
  useGetDetailRecommendationsQuery,
  useGetDetailVideoQuery,
  useGetMovieDetailQuery,
} from "../../redux/api/movieApi";
import { RxCross1 } from "react-icons/rx";
import YouTube from "react-youtube";
import "./MovieDetail.css";
import SimilarMovie from "./SimilarMovie";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const [trailer, setTrailer] = useState([]);

  const { toggleModal, id } = useContext(ToggleContext);
  const { data } = useGetMovieDetailQuery({ id });
  const { data: recData } = useGetDetailRecommendationsQuery({ id });
  const { data: video } = useGetDetailVideoQuery({ id });
  // console.log(id);
  // console.log(data);
  // console.log(recData?.results);
  const parentRef = useRef(null);
  // console.log(parentRef?.current?.offsetWidth);

  useEffect(() => {
    // Access the parent div's width after the component has mounted
    if (parentRef.current) {
      const parentWidth = parentRef.current.offsetWidth;
      // console.log('Parent div width:', parentWidth);
    }
  }, []);

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
    height: "300" ,
    width: `${parentRef?.current?.offsetWidth}`,
    playerVars: {
      autoplay: 0,
    },
  };

  const castLength = data?.credits?.cast.length - 1;
  // console.log(castLength);
  const castNameSm = [];
  for (let i = 0; i <= 3; i++) {
    if (data?.credits?.cast) {
      castNameSm.push(data?.credits?.cast[`${i}`]?.name);
    } else {
      break;
    }
  }

  const castName = [];
  for (let i = 0; i <= castLength; i++) {
    if (data?.credits?.cast) {
      castName.push(data?.credits?.cast[`${i}`]?.name);
    } else {
      break;
    }
  }
  // console.log(castName);

  const genresLength = data?.genres.length - 1;
  const genresName = [];
  for (let i = 0; i <= genresLength; i++) {
    if (data?.genres) {
      genresName.push(data?.genres[`${i}`]?.name);
    } else {
      break;
    }
  }
  // console.log(genresName);

  const crewLength = data?.credits?.crew.length - 1;
  // console.log(crewLength);
  const crewName = [];
  for (let i = 0; i <= crewLength; i++) {
    if (data?.credits?.crew) {
      crewName.push(data?.credits?.crew[`${i}`]?.name);
    } else {
      break;
    }
  }
  // console.log(crewName);

  const productionLength = data?.production_companies?.length - 1;
  // console.log(productionLength);
  const productionName = [];
  for (let i = 0; i <= productionLength; i++) {
    if (data?.production_companies) {
      productionName.push(data?.production_companies[`${i}`]?.name);
    } else {
      break;
    }
  }
  // console.log(productionName);

  const countryLength = data?.production_countries?.length - 1;
  // console.log(countryLength);
  const countryName = [];
  for (let i = 0; i <= countryLength; i++) {
    if (data?.production_countries) {
      countryName.push(data?.production_countries[`${i}`]?.name);
    } else {
      break;
    }
  }
  // console.log(countryName);

  const languageLength = data?.spoken_languages?.length - 1;
  // console.log(languageLength);
  const languageName = [];
  for (let i = 0; i <= languageLength; i++) {
    if (data?.spoken_languages) {
      languageName.push(data?.spoken_languages[`${i}`]?.name);
    } else {
      break;
    }
  }
  const languageEngName = [];
  for (let i = 0; i <= languageLength; i++) {
    if (data?.spoken_languages) {
      languageEngName.push(data?.spoken_languages[`${i}`]?.english_name);
    } else {
      break;
    }
  }
  // console.log(languageEngName);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const castRef = useRef(null);

  return (
    <div
      onClick={toggleModal}
      className="fixed inset-0 bg-black bg-opacity-50 overflow-y-scroll transition-all backdrop-blur-sm flex justify-center items-center z-[1006]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="group/item w-[97%] lg:w-[880px] h-min rounded-xl overflow-hidden bg-[#181818] fixed top-20 lg:top-10"
      >
        <div className="">
          <YouTube
            className="z-[1006] hidden lg:block"
            videoId={trailer}
            opts={opts}
          />
        </div>

        <div ref={parentRef} className="">
          <YouTube
            className="z-[1006] block lg:hidden"
            videoId={trailer}
            opts={opts_sm}
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-10 p-5 lg:p-10 text-white">
          <div className="w-full lg:w-[65%]">
            <div className="flex gap-5">
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
            <p>{data?.overview}</p>
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

        <h1 className="text-2xl text-white font-semibold p-5 lg:p-10">
          More Like This
        </h1>

        <div className="flex gap-2 lg:gap-6 justify-between flex-wrap px-5 lg:px-10">
          {recData?.results.map((result, index) => (
            <SimilarMovie key={index} result={result} />
          ))}
        </div>

        <div className="p-5 lg:p-10 space-y-3" ref={castRef}>
          <h1 className="text-2xl text-white font-semibold ">
            About{" "}
            <span className="text-3xl font-bold">{data?.original_title}</span>
          </h1>
          <div className="">
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
          <div className="">
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
            {productionName.map((name, index) => (
              <>
                <p key={index} className="inline text-sm text-white">
                  {name}
                </p>
                {index !== productionName.length - 1 && (
                  <span className="text-white">, </span>
                )}
              </>
            ))}
          </div>
          <div>
            <span className="text-sm font-semibold text-[#747474]">
              Production Countries :
            </span>
            {countryName.map((name, index) => (
              <>
                <p key={index} className="inline text-sm text-white">
                  {name}
                </p>
                {index !== countryName.length - 1 && (
                  <span className="text-white">, </span>
                )}
              </>
            ))}
          </div>
        </div>

        <button
          onClick={toggleModal}
          className="-top-10 group-hover/item:top-5 w-10 h-10 rounded-full flex justify-center items-center absolute left-[48%] text-center bg-black bg-opacity-70 hover:bg-opacity-80 duration-150"
        >
          <RxCross1 className="text-white font-bold scale-150" />
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;

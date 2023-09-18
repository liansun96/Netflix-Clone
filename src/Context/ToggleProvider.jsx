import { useRef } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {

  //search input
  const [search, setSearch] = useState("");

  const [token, setToken] = useState(false);

  const [movieShow, setMovieShow] = useState(false);

  const [tvShow, setTvShow] = useState(false);

  const inputRef = useRef(null);

  const [showInput, setShowInput] = useState(false);
  const handleInput = () => {
    setShowInput(!showInput);
    inputRef.current.focus();
  };

  const submitHandler = () => {
    setToken(!token);
    if (token === true) nav("/");
  };

  //Sidebar
  const [sBar, setSBar] = useState(false);
  const toggleSideBar = () => {
    setSBar(!sBar);
  };

  const toggleMovieShow = () => {
    setMovieShow(!movieShow);
  };

  const toggleTvShow = () => {
    setTvShow(!tvShow);
  };

  //DetailModal
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  //PlayMovieModal
  const [playMovieModal, setPlayMovieModal] = useState(false);
  const togglePlayMovieModal = () => {
    setPlayMovieModal(!playMovieModal);
    console.log("u toggle");
  };

  //PlayTvModal
  const [playTvModal, setPlayTvModal] = useState(false);
  const togglePlayTvModal = () => {
    setPlayTvModal(!playTvModal);
    console.log("u toggle");
  };

  //TvDetailModal
  const [tvModal, setTvModal] = useState(false);
  const toggleTvModal = () => {
    setTvModal(!tvModal);
    console.log("u toggle");
  };

  //
  const [id, setClickedId] = useState(null);
  const handleGetId = (id) => {
    // Set the clicked ID in the state
    setClickedId(id);
  };

  //Get Genres Id
  const [genreId, setGenreId] = useState(null);
  const handleGetGenreId = (genreId) => {
    // Set the clicked ID in the state
    setGenreId(genreId);
  };

  //Get Genres Name
  const [genreName, setGenreName] = useState('Genres');
  const handleGetGenreName = (genreName) => {
    // Set the clicked ID in the state
    setGenreName(genreName);
  };

  //Get Genres Name
  const [tvGenreName, setTvGenreName] = useState('Genres');
  const handleGetTvGenreName = (tvGenreName) => {
    // Set the clicked ID in the state
    setTvGenreName(tvGenreName);
  };

  //Get Country IosName
  const [iosName, setIosName] = useState('');
  const handleGetIosName = (iosName) => {
    setIosName(iosName);
  };
  console.log(iosName);

  //Get Country Name
  const [languageName, setLanguageName] = useState("English");
  const handleGetlanguageName = (languageName) => {
    setLanguageName(languageName);
  };
  console.log(languageName);

  
  

  const value = {    
    search,
    setSearch,
    showInput,
    setShowInput,
    handleInput,
    inputRef,
    modal,
    toggleModal,
    tvModal,
    toggleTvModal,
    playMovieModal,
    togglePlayMovieModal,
    playTvModal,
    togglePlayTvModal,
    genreId,
    handleGetGenreId,
    genreName,
    handleGetGenreName,
    tvGenreName,
    handleGetTvGenreName,
    id,
    handleGetId,
    toggleSideBar,
    sBar,
    setToken,
    token,
    movieShow,
    toggleMovieShow,
    tvShow,
    toggleTvShow,
    iosName,
    handleGetIosName,
    languageName,
    handleGetlanguageName,
  };

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};

export default ToggleProvider;

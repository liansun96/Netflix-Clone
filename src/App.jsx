import React from "react";
import { Route, Routes } from "react-router";
import MovieDetail from "./components/MovieDetail";
import Home from "./Pages/Home";
import Latest from "./Pages/Latest";
import Movies from "./Pages/Movies";
import TvShows from "./Pages/TvShows";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tvshows" element={<TvShows />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/latest" element={<Latest />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default App;

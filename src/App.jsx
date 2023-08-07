
import React from "react";
import Carousel from "./components/Carousel";
import Test from "./components/Test";
import { Route, Routes } from "react-router";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Carousel />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
};


export default App;

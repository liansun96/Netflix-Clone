import React from "react";
import Test from "./components/Test";
import { Route, Routes } from "react-router";
import MovieDetail from "./components/MovieDetail";
import Home from "./components/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
};


export default App;

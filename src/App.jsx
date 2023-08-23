import { Route, Routes } from "react-router";
import MovieDetail from "./components/MovieDetail";
import Home from "./Pages/Home";
import Latest from "./Pages/Latest";
import Movies from "./Pages/Movies";
import TvShows from "./Pages/TvShows";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import MyList from "./Pages/MyList";

const App = () => {
  return (
    <div className="relative">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path=":id" element={<MovieDetail />} />
      </Routes>
      <SideBar />
    </div>
  );
};

export default App;

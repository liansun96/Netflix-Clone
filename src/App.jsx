import { Route, Routes } from "react-router";
import MovieDetail from "./components/MovieDetail";
import Home from "./Pages/Home";
import Latest from "./Pages/Latest";
import Movies from "./Pages/Movies";
import TvShows from "./Pages/TvShows";
import SideBar from "./components/SideBar";
import MyList from "./Pages/MyList";
import Search from "./Pages/Search";

const App = () => {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <SideBar />
    </div>
  );
};

export default App;

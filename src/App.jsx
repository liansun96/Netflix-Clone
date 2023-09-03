import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Latest from "./Pages/Latest";
import Movies from "./Pages/Movies";
import TvShows from "./Pages/TvShows";
import SideBar from "./components/SideBar/SideBar";
import MyList from "./Pages/MyList";
import Search from "./Pages/Search";
import Bbl from "./Pages/Bbl";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

const App = () => {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/bbl" element={<Bbl />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <SideBar />
    </div>
  );
};

export default App;

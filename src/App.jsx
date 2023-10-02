import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Latest from "./Pages/Latest";
import Movies from "./Pages/Movies";
import TvShows from "./Pages/TvShows";
import SideBar from "./components/SideBar/SideBar";
import MyList from "./Pages/MyList";
import Search from "./Pages/Search";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import BrowseByLanguages from "./Pages/BrowseByLanguages";
import MyNetflix from "./Pages/MyNetflix";
import MobileNoti from "./components/MobileNoti";

const App = () => {
  return (
    <div className="relative bg-[#141414]">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/my-netflix" element={<MyNetflix />} />
        <Route path="/notification" element={<MobileNoti />} />
        <Route path="/browse-by-language" element={<BrowseByLanguages />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <SideBar />
    </div>
  );
};

export default App;

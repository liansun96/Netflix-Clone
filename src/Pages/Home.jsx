import Footer from "../components/Footer/Footer";
import Categories from "../components/Home/Categories";
import Header from "../components/Header";
import HomeNav from "../components/Home/HomeNav";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ToggleContext } from "../Context/ToggleProvider";

const Home = () => {
  const nav = useNavigate();
  const { token, setToken } = useContext(ToggleContext);

  useEffect(() => {
    !token && nav("/signin");
    // setIsLoading(true);
    //   setTimeout(() => {
    //     setIsLoading(false);
    //   }, 2000);
  }, []);

  return (
    <div className="bg-[#141414]">
      <HomeNav />
      <div className="">
        <div className="overflow-hidden">
          <Header />
          <Categories />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;

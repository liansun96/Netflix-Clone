import Footer from "../components/Footer/Footer";
import Categories from "../components/Home/Categories";
import Header from "../components/Header";
import HomeNav from "../components/Home/HomeNav";

const Home = () => {
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

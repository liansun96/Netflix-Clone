import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Header from "../components/Header";
import HomeNav from "../components/HomeNav";

const Home = () => {
  return (
    <div className="">
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

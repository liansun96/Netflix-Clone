import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Categories from "../components/Categories";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="">
      <div className="overflow-hidden">
        <Header />
        <Categories />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

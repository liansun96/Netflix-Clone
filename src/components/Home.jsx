import Footer from "./Footer";
import NavBar from "./NavBar";
import Categories from "./Categories";
import Header from "./Header";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <div className="overflow-hidden">
        <Header />
        <Categories />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

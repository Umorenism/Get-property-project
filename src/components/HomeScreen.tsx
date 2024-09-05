import HeroSlider from "../pages/Hero";
import Search from "../pages/Search";

const HomeScreen = () => {
  return (
    <div className="w-full  flex flex-col  min-h-screen">
      <HeroSlider />
      <Search />
    </div>
  );
};

export default HomeScreen;

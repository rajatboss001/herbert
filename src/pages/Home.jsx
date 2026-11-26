import Homepage from "../components/mainsection/Homepage";
import Swiper from "../components/mainsection/Swiper";
import Resource from "../components/mainsection/Resource";
import Faq from "../components/mainsection/Faq";
import Features from "../components/mainsection/Features";
import Plan from "../components/mainsection/Plan";
import Footer from "../components/common/Footer"

const Home = () => {
  return (
    <div>
      <Homepage />
      <Swiper />
      <Features />
      <Plan />
      <Resource />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;

import Homepage from "../components/home/Homepage"
import Swiper from "../components/swiper/Swiper"
import Resource from "../components/resource/Resource"
import Faq from "../components/faq/Faq"
import Features from "../components/features/Features"
import Footer from "../components/footer/Footer"

const Home = () => {
  return (
    <div>
      <Homepage />
      <Swiper />
      <Features />
      <Resource />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home

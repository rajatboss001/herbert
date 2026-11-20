import Homepage from "../components/home/Homepage"
import Swiper from "../components/swiper/Swiper"
import Resource from "../components/resource/Resource"
import Faq from "../components/faq/Faq"
import Features from "../components/features/Features"

const Home = () => {
  return (
    <div>
      <Homepage />
      <Swiper />
      <Resource/>
      <Faq/>
      <Features />
    </div>
  )
}

export default Home

import Homepage from "../components/home/Homepage"
import Swiper from "../components/swiper/Swiper"
import Resource from "../components/resource/Resource"
import Faq from "../components/faq/Faq"
import Features from "../components/features/Features"
import Plan from "../components/pricing plan/Plan"

const Home = () => {
  return (
    <div>
      <Homepage />
      <Swiper />
      <Features />
      <Resource/>
      <Plan />
      <Faq/>
    </div>
  )
}

export default Home

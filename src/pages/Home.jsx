import Homepage from "../components/home/Homepage"
import Swiper from "../components/swiper/Swiper"
import Resource from "../components/resource/Resource"
import Faq from "../components/faq/Faq"

const Home = () => {
  return (
    <div>
      <Homepage />
      <Swiper />
      <Resource/>
      <Faq/>
    </div>
  )
}

export default Home

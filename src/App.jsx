import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Swiper from "./components/swiper/Swiper"
import Resource from "./components/resource/Resource"
import Faq from "./components/faq/Faq"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/swiper" element={<Swiper />} />
      <Route path="/resource" element={<Resource/>}/>
      <Route path="/Faq" element={<Faq/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

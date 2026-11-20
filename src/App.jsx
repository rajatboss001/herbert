import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Swiper from "./components/swiper/Swiper"
import Features from "./components/features/Features"
import Resource from "./components/resource/Resource"
import Faq from "./components/faq/Faq"

import Source from "./pages/Source"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/swiper" element={<Swiper />} />
      <Route path="/Features" element={<Features />} />
      <Route path="/resource" element={<Resource/>}/>
      <Route path="/Faq" element={<Faq/>}/>
      <Route path="/source" element={<Source/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App

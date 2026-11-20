import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Swiper from "./components/swiper/Swiper"
import Features from "./components/features/Features"
import Resource from "./components/resource/Resource"
import Faq from "./components/faq/Faq"
import Plan from "./components/pricing plan/Plan"

import Source from "./pages/Source"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/swiper" element={<Swiper />} />
      <Route path="features" element={<Features />} />
      <Route path="/resource" element={<Resource/>}/>
      <Route path="/Faq" element={<Faq/>}/>
      <Route path="/source" element={<Source/>}/>
      <Route path="/plan" element={<Plan/>}/>
      
    </Routes>
    </BrowserRouter>
  );
};

export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Swiper from "./components/swiper/Swiper";
import Resource from "./components/resource/Resource";
import Faq from "./components/faq/Faq";
import Plan from "./components/pricing plan/Plan";
import Features from "./components/features/Features";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swiper" element={<Swiper />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
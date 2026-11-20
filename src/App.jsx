import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Swiper from "./components/swiper/Swiper";
import Plan from "./components/pricing plan/Plan";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swiper" element={<Swiper />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
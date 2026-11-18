import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Swiper from "./components/swiper/Swiper"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/swiper" element={<Swiper />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

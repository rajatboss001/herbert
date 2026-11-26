import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
gi
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/source" element={<Source />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;

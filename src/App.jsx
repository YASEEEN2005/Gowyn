import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LuxuryPage from "./pages/LuxuryPage";
import HoneyPage from "./pages/HoneyPage";
import AdventurePage from "./pages/AdventurePage";
import CabPage from "./pages/CabPage";
import About from "./componets/About";
import Contact from "./componets/Contact";
// import Adventure from "./pages/Adventure";
// import Cab from "./pages/Cab";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Service Pages */}
        <Route path="/luxury" element={<LuxuryPage />} />
        <Route path="/honeymoon" element={<HoneyPage />} />
        <Route path="/adventure" element={<AdventurePage />} />
        <Route path="/cab" element={<CabPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

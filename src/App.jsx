import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/fonts/fonts.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProShopPage from "./pages/ProShopPage";
import GunTransferPage from "./pages/GunTransferPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/coyoto-valley" element={<AboutPage />} />
      <Route path="/proshop" element={<ProShopPage />} />
      <Route path="/gun-transfer" element={<GunTransferPage />} />
      <Route path="/events" element={<EventsPage />} />
      {/* <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
  );
}

export default App;

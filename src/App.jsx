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
import LodgingPage from "./pages/LodgingPage";
import FAQPage from "./pages/FAQPage";
import CoursesPage from "./pages/CoursesPage";
import RangeRulesPage from "./pages/RangeRulesPage";
import RequirementsPage from "./pages/RequirementsPage";
import FirstTimeShooterPage from "./pages/FirstTimeShooterPage";
import ExperiencePage from "./pages/ExperiencePage";
import PrivateInstructionsPage from "./pages/PrivateInstructionsPage";
import NRA_Pistol_ClassPage from "./pages/NRAPistolClassPage";
import HomeDefensePage from "./pages/HomeDefensePage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/coyoto-valley" element={<AboutPage />} />
      <Route path="/proshop" element={<ProShopPage />} />
      <Route path="/gun-transfer" element={<GunTransferPage />} />
      <Route path="/lodging" element={<LodgingPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/range-rules" element={<RangeRulesPage />} />
      <Route path="/requirements" element={<RequirementsPage />} />
      <Route path="/first-time-shooter" element={<FirstTimeShooterPage />} />
      <Route path="/experience-package" element={<ExperiencePage />} />
      <Route path="/private-instructions" element={<PrivateInstructionsPage />} />
      <Route path="/nra-pistol-class" element={<NRA_Pistol_ClassPage />} />
      <Route path="/home-defense" element={<HomeDefensePage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      {/* <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
  );
}

export default App;

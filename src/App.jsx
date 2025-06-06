import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/fonts/fonts.css";
import Header from "./components/Header";
import Info from "./components/Info";
import WhyChooseUs from "./components/WhyChooseUs";
import FrequentlyAsked from "./components/FrequentlyAsked";
import Gallary from "./components/Gallary";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Experienced from "./components/Experienced";

function App() {  
  return (
    <>
      <Header />
      <Info />
      <FrequentlyAsked />
      <WhyChooseUs />
      <Gallary />
      <Reviews />
      <Experienced />
      <Footer />
    </>
  );
}

export default App;

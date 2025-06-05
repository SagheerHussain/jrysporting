import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/fonts/fonts.css";
import Header from "./components/Header";
import Info from "./components/Info";
import WhyChooseUs from "./components/WhyChooseUs";
import FrequentlyAsked from "./components/FrequentlyAsked";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Info />
      <FrequentlyAsked />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default App;

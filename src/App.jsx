import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/fonts/fonts.css";
import Header from "./components/Header";
import Info from "./components/Info";
import Faq from "./components/faq";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      <Header />
      <Info />
      <Faq />
      <WhyChooseUs />
    </>
  );
}

export default App;

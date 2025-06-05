import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import "./assets/fonts/fonts.css";

function App() {
  return (
    <>
      <Header />
      <div className="my-4">
        <div className="max-w-sm mx-auto px-5 py-4 rounded-t-xl border-t border-l border-r border-dashed border-[#818062] bg-[#818062]/10 text-center shadow-md">
          <h3 className="text-lg md:text-xl font-bold text-[#818062]">
            Safety rules <br /> are strictly enforced.
          </h3>
          <p className="text-sm md:text-base font-bold text-[#818062] mt-1">
            <a
              href="#"
              className="text-[#818062] underline hover:text-[#6e6c54] transition"
            >
              See FAQs
            </a>
          </p>
        </div>

        <div className="max-w-sm mx-auto p-6 bg-white dark:bg-gray-900 border border-dashed border-gray-500 dark:border-gray-700 rounded-b-xl shadow-xl transition-shadow duration-300">
          <h3 className="text-center text-2xl font-extrabold text-primary_bg mb-6 uppercase tracking-wide">
            Business Hours
          </h3>
          <div className="space-y-4 text-sm font-medium text-gray-800 dark:text-gray-200">
            <div className="flex justify-between items-center border-b pb-2 border-dashed border-gray-600 dark:border-gray-700">
              <span>Mon - Tue</span>
              <span className="text-red-500 font-semibold">Closed</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2 border-dashed border-gray-600 dark:border-gray-700">
              <span>Wed - Fri</span>
              <span>9:00 am - 5:00 pm</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Sat - Sun</span>
              <span>8:00 am - 5:00 pm</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

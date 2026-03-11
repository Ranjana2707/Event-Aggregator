import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AllEvents from "./components/AllEvents"; // ✅ Corrected import
// import Footer from "./components/Footer";
import TopHeadlines from "./components/TopHeadlines";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryEvents from "./components/CountryEvents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllEvents />} /> {/* ✅ Corrected usage */}
          <Route path="/top-headlines/:category" element={<TopHeadlines />} />
          <Route path="/country/:iso" element={<CountryEvents />} />
        </Routes>
        {/* <Cards /> */}
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

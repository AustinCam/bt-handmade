import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import TrainingPage from "./components/TrainingPage";
import AboutPage from "./components/AboutPage";
import EventPage from "./components/EventPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <div className="App">
      <div className=" col-lg-12 p-5 h-100">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<TrainingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

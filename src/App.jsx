// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Your main page content
import SubBrands from "./components/SubBrand"; // Your sub-brands landing page
import ScrollToHash from "./ScrollToHash";
import Construct from "./components/Construct"; // Assuming this is a component you want to use
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub-brands" element={<SubBrands />} />
        <Route path="/construct" element={<Construct />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

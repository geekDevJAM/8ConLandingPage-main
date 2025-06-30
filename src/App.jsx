import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SubBrands from "./components/SubBrand";
import ScrollToHash from "./ScrollToHash";
import Construct from "./components/Construct";
import ConEdge from "./components/Conedge";
import ConCise from "./components/Concise";
import ConVerse from "./components/Converse";
import ConNect from "./components/Connect";
import ConLift from "./components/Conlift";
import ConPact from "./components/Conpact";
import ConQuest from "./components/Conquest";
import ConSpace from "./components/Conspace";
import ConSult from "./components/Consult";
import AboutUs from "./components/AboutUs";
import ScrollUp from "./ScrollUp";
import Loader from "./components/Loader"; // ⬅️ Make sure you created the Loader component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load time (e.g., splash screen)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // change to however long you want

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000", // optional
          }}
        >
          <Loader />
        </div>
      ) : (
        <Router>
          <ScrollToHash />
          <ScrollUp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sub-brands" element={<SubBrands />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/construct" element={<Construct />} />
            <Route path="/conedge" element={<ConEdge />} />
            <Route path="/concise" element={<ConCise />} />
            <Route path="/converse" element={<ConVerse />} />
            <Route path="/connect" element={<ConNect />} />
            <Route path="/conlift" element={<ConLift />} />
            <Route path="/conpact" element={<ConPact />} />
            <Route path="/conquest" element={<ConQuest />} />
            <Route path="/conspace" element={<ConSpace />} />
            <Route path="/consult" element={<ConSult />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage/Homepage";
import Activitypage from "./pages/Activitypage";
import AboutPage from "./pages/AboutPage";
// import Weather from "./components/Weather";

function App() {
  return (
    <div className="App" id="App" style={{ minHeight: "100vh" }}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/activity" element={<Activitypage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

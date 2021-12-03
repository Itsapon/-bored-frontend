import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import "./App.css";

import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage/Homepage";
import Activitypage from "./pages/Activitypage";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App" id="App" style={{ height: "100vh" }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/activity" element={<Activitypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

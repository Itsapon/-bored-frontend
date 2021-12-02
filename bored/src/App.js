import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import "./App.css";

import ActivityCard from "./components/ActivityCard";
import ActivityForm from "./components/ActivityForm";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage/Homepage";
import Activitypage from "./pages/Activitypage";

const Test = () => (
  <Container className="p-5 mb-4 bg-light rounded-3">
    <h1 className="header">Testing components</h1>
    <ActivityCard />
    <ActivityForm />
  </Container>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        {/* <Test /> */}

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/activity" element={<Activitypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

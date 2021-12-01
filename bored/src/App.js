import React from "react";
import "./App.css";

import ActivityCard from "./components/ActivityCard";
import ActivityForm from "./components/ActivityForm";
import { Container } from "react-bootstrap";

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
      <Test />
    </div>
  );
}

export default App;

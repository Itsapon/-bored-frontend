import React from "react";
import { Container } from "react-bootstrap";

export default function AboutPage() {
  return (
    <Container style={{ width: "90%" }}>
      <h4>! Bored is brought to you by:</h4>
      <p>
        <a href="https://github.com/Alinemati1987">Ali</a>
      </p>
      <p>
        <a href="https://github.com/michielfbr">Michiel</a>
      </p>
      <p>
        <a href="https://github.com/Itsapon/">Robin</a>
      </p>
      <p>
        You can check out the code{" "}
        <a href="https://github.com/Itsapon/Bored-frontend/">here</a>
      </p>
    </Container>
  );
}

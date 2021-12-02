import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="#A3320B" expand="lg" className="justify-content-center">
      <Navbar.Brand
        style={{
          fontFamily: "'Comforter', cursive",
          fontWeight: "bolder",
          fontSize: "40px",
          color: "#e5383b",
          textDecoration: "none",
        }}
        as={NavLink}
        to="/"
      >
        ! Bored
      </Navbar.Brand>
    </Navbar>
  );
}

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="#A3320B" expand="lg" className="justify-content-center">
      <Navbar.Brand
        style={{
          fontFamily: "'Bungee Shade'",
          fontWeight: "bolder",
          fontSize: "150px",
          color: "#e5383b",
        }}
        as={NavLink}
        to="/"
      >
        ! Bored
      </Navbar.Brand>
    </Navbar>
  );
}

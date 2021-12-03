import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar expand="lg" className="justify-content-center">
      <Navbar.Brand id="Logo"
        style={{
          fontFamily: "'Bungee Shade'",
          fontWeight: "bolder",
          fontSize: "12vw",
        }}
        as={NavLink}
        to="/"
      >
        ! Bored
      </Navbar.Brand>
    </Navbar>
  );
}

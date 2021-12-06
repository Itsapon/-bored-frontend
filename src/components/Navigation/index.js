import React from "react";
import { Navbar, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Weather from "../Weather";

export default function Navigation() {
  return (
    <Navbar as={Row} expand="true">
      <Col md={{ span: 8, offset: 2 }}>
        <Navbar.Brand
          id="Logo"
          className="justify-content-center"
          style={{
            fontFamily: "'Bungee Shade'",
            fontWeight: "bolder",
            fontSize: "11vw",
          }}
          as={NavLink}
          to="/"
        >
          ! Bored
        </Navbar.Brand>
      </Col>
      <Col>
        <Weather />
      </Col>
    </Navbar>
  );
}

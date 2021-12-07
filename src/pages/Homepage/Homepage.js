import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { fetchRandom } from "../../store/activities/actions";
import { fetchCity } from "../../store/weather/actions";

export default function Homepage() {
  const dispatch = useDispatch();

  const questionStyle = {
    fontSize: "45px",
    fontWeight: "bolder",
  };

  const buttonStyle = {
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "30px",
    paddingRight: "30px",
    fontWeight: "bolder",
    fontSize: "25px",
    boxShadow: " 4px 3px darkblue , 3px 3px",
    borderRadius: "15px",
    margin: "20px",
  };

  function getNewRandomBackgroundColor() {
    const colorArray = [
      {
        backgroundcolor: "#5B5F97",
        fontcolor: "#FFFFFB",
        logocolor: "#4C191B",
      }, // purple bg
      {
        backgroundcolor: "#FFC145",
        fontcolor: "#373D20",
        logocolor: "#e5383b",
      }, // yellow bg
      {
        backgroundcolor: "#FF6B6C",
        fontcolor: "#FFFFFB",
        logocolor: "#3E442B",
      }, // pinkish bg
    ];
    const colorSheme =
      colorArray[Math.floor(Math.random() * colorArray.length)];
    document.getElementById("App").style.backgroundColor =
      colorSheme.backgroundcolor;
    document.getElementById("App").style.color = colorSheme.fontcolor;
    document.getElementById("Logo").style.color = colorSheme.logocolor;
    document.getElementById("Weather").style.color = colorSheme.fontcolor;
  }

  useEffect(() => {
    getNewRandomBackgroundColor();
    dispatch(fetchCity());
    dispatch(fetchRandom());
  }, [dispatch]);

  return (
    <Container style={{ width: "90%" }}>
      <h1 style={questionStyle}>I'm bored ...</h1>
      <Link
        to={{
          pathname: "/activity",
        }}
      >
        <Button style={buttonStyle}>Give me an activity!</Button>
      </Link>
      <p style={{ marginTop: "20px" }}>
        <Link to={{ pathname: "/about" }}>About !Bored</Link>
      </p>
    </Container>
  );
}

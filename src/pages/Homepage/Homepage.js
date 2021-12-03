//tool imports
import Button from "@restart/ui/esm/Button";
import React, { useDebugValue } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
//actions etc
import { fetchRandom } from "../../store/activities/actions";

//function
export default function Homepage() {
  const dispatch = useDispatch();

  const homepageStyle = {
    width: "90%",
    fontFamily: "Grandstander",
    fontSize: "25px",
  };

  const questionStyle = {
    fontSize: "50px",
  };

  const buttonStyle = {
    width: "400px",
    height: "60px",
    fontWeight: "bolder",
    fontSize: "25px",
    boxShadow: " 4px 3px darkblue , 3px 3px",
    borderRadius: "15px",
    margin: "20px",
  };

  function getNewRandomBackgroundColor() {
    var colorArray = [
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
    var colorSheme = colorArray[Math.floor(Math.random() * colorArray.length)];
    document.getElementById("App").style.backgroundColor =
      colorSheme.backgroundcolor;
    document.getElementById("App").style.color = colorSheme.fontcolor;
    document.getElementById("Logo").style.color = colorSheme.logocolor;
  }

  useEffect(() => {
    getNewRandomBackgroundColor();
    console.log("Homepage fetching first activity"); //runs first.
    dispatch(fetchRandom());
  }, []);

  return (
    <Container style={homepageStyle}>
      <h1 style={questionStyle}>I'm bored</h1>
      <Link
        to={{
          pathname: "/activity",
        }}
      >
        <Button style={buttonStyle}>Give me an activity!</Button>
      </Link>
    </Container>
  );
}

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ActivityCard from "../../components/ActivityCard";
import ActivityForm from "../../components/ActivityForm";
import { useEffect } from "react";

const activitypageStyle = {
  width: "90%",
  fontFamily: "Grandstander",
  fontSize: "25px",
};

const questionStyle = {
  fontSize: "50px",
};

function getNewRandomBackgroundColor() {
  var myArray = ["#B8B8D1", "#5B5F97", "#FFC145", "#FF6B6C"]; // 'B8B8D1'
  var rand = myArray[Math.floor(Math.random() * myArray.length)];
  document.getElementById("App").style.backgroundColor = rand;
}

function buttonClick() {
  console.log("Hi, I'm clicked");
  getNewRandomBackgroundColor();
}

export default function Activitypage() {
  useEffect(() => {
    getNewRandomBackgroundColor();
  }, []);

  return (
    <Container id="ActivityPage" style={activitypageStyle}>
      <Row>
        <h1 style={questionStyle}>Wanna do this?</h1>
      </Row>
      <Row>
        <ActivityCard />
      </Row>
      <Row>
        <ActivityForm buttonClick={buttonClick} />
      </Row>
    </Container>
  );
}

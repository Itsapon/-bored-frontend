//tool imports
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
//components, actions etc
import ActivityCard from "../../components/ActivityCard";
import ActivityForm from "../../components/ActivityForm";
import { fetchRandom } from "../../store/activities/actions";
import { selectActivity } from "../../store/activities/selectors";

export default function Activitypage() {
  const dispatch = useDispatch();
  const newActivity = useSelector(selectActivity);
  const [activity, setActivity] = useState({});
  const activitypageStyle = {
    width: "90%",
    fontFamily: "Grandstander",
    fontSize: "25px",
  };

  const questionStyle = {
    fontSize: "50px",
  };

  function getNewRandomBackgroundColor() {
    var colorArray = [
      { backgroundcolor: "#5B5F97", fontcolor: "#FFFFFB" }, // good combo
      { backgroundcolor: "#FFC145", fontcolor: "#373D20" }, // good combo, also with logo
      { backgroundcolor: "#FF6B6C", fontcolor: "#FFFFFB" },
    ];
    var colorSheme = colorArray[Math.floor(Math.random() * colorArray.length)];
    document.getElementById("App").style.backgroundColor =
      colorSheme.backgroundcolor;
    document.getElementById("App").style.color = colorSheme.fontcolor;
  }

  function buttonClick() {
    console.log("Hi, I'm clicked");
    getNewRandomBackgroundColor();
  }

  useEffect(() => {
    getNewRandomBackgroundColor();
    setActivity(newActivity);
  }, []);

  console.log("activity is ", activity);
  return (
    <Container id="ActivityPage" style={activitypageStyle}>
      <Row>
        <h1 style={questionStyle}>Wanna do this?</h1>
      </Row>
      <Row>
        <ActivityCard activity={activity} />
      </Row>
      <Row>
        <ActivityForm buttonClick={buttonClick} />
      </Row>
    </Container>
  );
}

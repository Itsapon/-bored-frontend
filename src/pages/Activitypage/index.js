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
import Weather from "../../components/Weather";

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
    var myArray = ["#B8B8D1", "#5B5F97", "#FFC145", "#FF6B6C"]; // 'B8B8D1'
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementById("App").style.backgroundColor = rand;
  }

  function buttonClick() {
    console.log("Hi, I'm clicked");
    getNewRandomBackgroundColor();
  }

  useEffect(() => {
    getNewRandomBackgroundColor();
    console.log("Hi there this is useEffect, imma dispatch fetchrandom");
    dispatch(fetchRandom());
    setActivity(newActivity);
  }, [activity]);

  console.log("activity is ", activity);
  return (
    <div>
      <Weather />
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
    </div>
  );
}

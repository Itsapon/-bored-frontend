//tool imports
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
//components, actions etc
import ActivityCard from "../../components/ActivityCard";
import ActivityForm from "../../components/ActivityForm";
import { fetchRandom } from "../../store/activities/actions";
import { selectActivity } from "../../store/activities/selectors";
import Weather from "../../components/Weather";
import { fetchSpecific } from "../../store/activities/actions";

export default function Activitypage() {
  const dispatch = useDispatch();
  const newActivity = useSelector(selectActivity);
  const [activity, setActivity] = useState({ activity: "Loading..." });
  const [type, setType] = useState("select");
  const [participants, setParticipants] = useState("0");

  const questionStyle = {
    fontSize: "50px",
  };

  function buttonClick() {
    dispatch(fetchSpecific(type, participants));
    // console.log("this is the new activity: ", newActivity);
  }

  const onFormActivityChange = (event) => {
    setType(event.target.value);
    // console.log("Form activity type changed", event.target.value, participants);
    dispatch(fetchSpecific(event.target.value, participants));
  };

  const onFormParticipantsChange = (event) => {
    setParticipants(event.target.value);
    // console.log("Form participants changed", type, event.target.value);
    dispatch(fetchSpecific(type, event.target.value));
  };

  useEffect(() => {
    setActivity(newActivity);
  }, [newActivity]);

  return (
    <Container id="ActivityPage" style={{ width: "90%" }}>
      <Weather />
      <Row className="d-flex justify-content-center">
        <h1 style={questionStyle}>Wanna do this?</h1>
      </Row>
      <Row className="d-flex justify-content-center">
        <ActivityCard activity={activity} />
      </Row>
      <ActivityForm
        buttonClick={buttonClick}
        onFormActivityChange={onFormActivityChange}
        onFormParticipantsChange={onFormParticipantsChange}
        type={type}
        participants={participants}
      />
      <p>
        <Link to={{ pathname: "/about" }}>About !Bored</Link>
      </p>
    </Container>
  );
}

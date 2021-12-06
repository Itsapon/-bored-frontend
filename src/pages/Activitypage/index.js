import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ActivityCard from "../../components/ActivityCard";
import ActivityForm from "../../components/ActivityForm";
import { fetchRandom } from "../../store/activities/actions";
import { selectActivity } from "../../store/activities/selectors";
import { fetchSpecific } from "../../store/activities/actions";
import { fetchCity } from "../../store/weather/actions";

export default function Activitypage() {
  const dispatch = useDispatch();
  const newActivity = useSelector(selectActivity);
  const [activity, setActivity] = useState({ activity: "Loading..." });
  const [type, setType] = useState("select");
  const [participants, setParticipants] = useState(-1);

  const questionStyle = {
    fontSize: "45px",
    fontWeight: "bolder",
  };

  function buttonClick() {
    dispatch(fetchRandom());
  }

  const onFormActivityChange = (event) => {
    setType(event.target.value);
    dispatch(fetchSpecific(event.target.value, participants));
  };

  const onFormParticipantsChange = (event) => {
    setParticipants(event.target.value);
    dispatch(fetchSpecific(type, event.target.value));
  };

  useEffect(() => {
    setActivity(newActivity);
    dispatch(fetchCity());
  }, [dispatch, newActivity]);

  return (
    <Container id="ActivityPage" style={{ width: "90%" }}>
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
      <p style={{ marginTop: "20px" }}>
        <Link to={{ pathname: "/about" }}>About !Bored</Link>
      </p>
    </Container>
  );
}

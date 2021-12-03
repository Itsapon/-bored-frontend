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

  function buttonClick() {
    console.log("Hi, I'm clicked");
    console.log("activity page: fetching a new activity");
    dispatch(fetchRandom()); //fetches a new activity
    setActivity(newActivity); //checks selector for new activity, but is quicker than the fetch request of the dispatch action
    //we need to find a way to make the setActivity wait for the store to be updated.
    //An idea to work around the slowness: a countdown intermezzo in between the rendering?
    console.log("this is the new activity: ", newActivity);
  }
  

  useEffect(() => {
    
    setActivity(newActivity);
  }, []);

  console.log("activity is ", activity); //runs twice on first render of page. First empty, then updated.
  return (
    <Container id="ActivityPage" style={activitypageStyle}>
      <Weather />
      <Row class="d-flex justify-content-center">
        <h1 style={questionStyle}>Wanna do this?</h1>
      </Row>
      <Row class="d-flex justify-content-center">
        <ActivityCard activity={activity} />
      </Row>
      <ActivityForm buttonClick={buttonClick} />
    </Container>
  );
}

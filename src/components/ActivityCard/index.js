import React from "react";
import { Container } from "react-bootstrap";

export default function ActivityCard(props) {
  const cardStyle = {
    border: "solid 10px green",
    borderRadius: "50px",
  };
  const activityFull = props.activity; // here we can find every info on the one activity we display.

  // console.log("what is activityFull ", activityFull);

  return (
    <div>
      {!activityFull ? (
        <div>Loading an activity...</div>
      ) : (
        <div>
          <Container style={cardStyle}>
            <p>{activityFull.activity}</p>
          </Container>
        </div>
      )}
    </div>
  );
}
/*
filter all people > 6 && type == relax
*/

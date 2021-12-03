import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function ActivityCard(props) {
  const cardStyle = {
    padding: "25px",
    border: "solid 2px darkblue",
    borderRadius: "40px",
  };
  const activityFull = props.activity; // here we can find every info on the one activity we display.

  // console.log("what is activityFull ", activityFull);

  const imgUrl =
    "https://michielbrongers.nl/someimages/" + activityFull.type + ".png";

  return (
    <div>
      {!activityFull ? (
        <div>Loading an activity...</div>
      ) : (
        <Col md={{ span: 8, offset: 2 }}>
          <Container style={cardStyle}>
            <Row class="d-flex justify-content-center">
              <Col xs={12}>
                <p>{activityFull.activity}</p>
              </Col>
            </Row>
            <Row class="d-flex justify-content-center">
              <Col md={{ span: 6, offset: 3 }}>
                <Image src={imgUrl} alt={activityFull.type} fluid></Image>
              </Col>
            </Row>
          </Container>
        </Col>
      )}
    </div>
  );
}
/*
filter all people > 6 && type == relax
*/

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function ActivityCard(props) {
  const cardStyle = {
    padding: "25px",
    border: "solid 2px darkblue",
    borderRadius: "40px",
    fontSize: "27px",
    fontWeight: "bolder",
  };
  const activity = props.activity;

  const imgUrl =
    "https://michielbrongers.nl/someimages/" + activity.type + ".png";

  return (
    <div>
      {!activity ? (
        <div>Loading...</div>
      ) : (
        <Col md={{ span: 8, offset: 2 }}>
          <Container style={cardStyle}>
            <Row className="d-flex justify-content-center">
              <Col xs={12}>
                <p>{activity.activity}</p>
                <p>{activity.error}</p>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col xs={8}>
                <Image
                  src={imgUrl}
                  alt={activity.type}
                  fluid
                  style={{ maxHeight: "300px" }}
                ></Image>
              </Col>
            </Row>
          </Container>
        </Col>
      )}
    </div>
  );
}

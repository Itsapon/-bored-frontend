import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

//function
export default function ActivityForm(props) {
  const {
    buttonClick,
    onFormActivityChange,
    onFormParticipantsChange,
    type,
    participants,
  } = props;

  const buttonStyle = {
    width: "400px",
    height: "60px",
    fontWeight: "bolder",
    fontSize: "25px",
    boxShadow: " 4px 3px darkblue , 3px 3px",
    borderRadius: "15px",
    margin: "20px",
  };

  return (
    <Container id="ActivityForm">
      <Row className="d-flex justify-content-center">
        <Col>
          <button style={buttonStyle} onClick={() => buttonClick()}>
            No! Give me something else ...
          </button>
        </Col>
      </Row>

      <Form as={Row} className="d-flex justify-content-center">
        <Col xs="auto">I want to</Col>
        <Col xs="auto">
          <Form.Select
            // defaultValue="select"
            value={type}
            onChange={(event) => onFormActivityChange(event)}
          >
            <option value="select">do anything</option>
            <option value="education">learn something</option>
            <option value="recreational">do fun things</option>
            <option value="social">do something social</option>
            <option value="diy">make somethng</option>
            <option value="charity">help people</option>
            <option value="cooking">get to the kitchen</option>
            <option value="relaxation">relax</option>
            <option value="music">be musical</option>
            <option value="busywork">be busy</option>
          </Form.Select>
        </Col>
        <Col xs="auto">
          <Form.Select
            // defaultValue="-1"
            value={participants}
            onChange={onFormParticipantsChange}
          >
            <option value="-1">
              by myself, with other people, I dont care!
            </option>
            <option value="1">by myself please.</option>
            <option value="2">with somebody else.</option>
            <option value=">2">with a lot of people!</option>
          </Form.Select>
        </Col>
      </Form>
    </Container>
  );
}

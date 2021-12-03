import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import "./index.css";

export default function ActivityForm(props) {
  const { buttonClick } = props;

  const buttonStyle = {
    width: "400px",
    height: "60px",
    fontWeight: "bolder",
    fontSize: "25px",
    boxShadow: " 4px 3px darkblue , 3px 3px",
    borderRadius: "5px",
    margin: "20px",
  };

  return (
    <Container id="ActivityForm">
      <div class="button">
        <a onClick={() => buttonClick()}>No! Give me something else ...</a>
      </div>
      {/* <button style={buttonStyle} onClick={() => buttonClick()}>
        No! Give me something else ...
      </button> */}
      <Form>
        <Row>
          <Col xs="auto">I want to</Col>
          <Col xs="auto">
            <Form.Select defaultValue="anything">
              <option>do anything</option>
              <option>learn something</option>
              <option>do fun things</option>
              <option>learn something</option>
              <option>do something social</option>
              <option>make somethng</option>
              <option>help peopel</option>
              <option>get to the kitchen</option>
              <option>relax</option>
              <option>be musical</option>
              <option>be busy</option>
            </Form.Select>
          </Col>
          {/* <Col xs="auto">
        with
        </Col> */}
          <Col xs="auto">
            <Form.Select defaultValue="...">
              <option>by myself, with other people, I dont care!</option>
              <option>by myself please.</option>
              <option>with somebody else.</option>
              <option>with a lot of people!</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

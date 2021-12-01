import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function ActivityForm() {
  return (
    <Container>
      <h1>component.ActivityForm</h1>
      <Form>
        I want to
        <Form.Select defaultValue="Choose...">
          <option disabled selected>
            select
          </option>
          <option>learn something</option>
          <option>do fun things</option>
          <option>learn something</option>
        </Form.Select>
        with
        <Form.Select defaultValue="Choose...">
          <option disabled selected>
            select
          </option>
          <option>myself</option>
          <option>somebody else</option>
          <option>a lot of people</option>
        </Form.Select>
      </Form>
    </Container>
  );
}

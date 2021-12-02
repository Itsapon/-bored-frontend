import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function ActivityForm() {
  return (
    <Container>
      <Button
        style={{
          boxShadow: " 5px 3px 5px lightblue , 3px 3px 3px grey",
          borderRadius: "30px",
          margin: "20px",
        }}
        onClick={() =>
          console.log("Hi, I'm clicked. Add onClick re-render or sth like that")
        }
      >
        No! Give me something else ...
      </Button>
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

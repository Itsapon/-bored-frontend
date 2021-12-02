import React from "react";
import { Container } from "react-bootstrap";

export default function ActivityCard() {
  const cardStyle = {
    border: "solid 10px green",
    borderRadius: "50px",
  };
  return (
    <Container style={cardStyle}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
        nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
        felis nec erat
      </p>
    </Container>
  );
}
/*
filter all people > 6 && type == relax
*/

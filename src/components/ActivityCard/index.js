import React from "react";
import { Container } from "react-bootstrap";

export default function ActivityCard() {
  const cardStyle = {
    padding: "25px",
    border: "solid 2px darkblue",
    borderRadius: "40px",
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

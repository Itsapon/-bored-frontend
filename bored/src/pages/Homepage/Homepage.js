import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h2>I'm bored</h2>

      <Link
        to={{
          pathname: "/activity",
        }}
      >
        <Button
          style={{
            boxShadow: " 5px 3px 5px lightblue , 3px 3px 3px grey",
            borderRadius: "30px",
          }}
        >
          Give me an activity!
        </Button>
      </Link>
    </div>
  );
}

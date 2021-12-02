//tool imports
import Button from "@restart/ui/esm/Button";
import React, { useDebugValue } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//actions etc
import { fetchRandom } from "../../store/activities/actions";

//function
export default function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Hi there this is useEffect, imma dispatch fetchrandom");
    dispatch(fetchRandom());
  }, []);

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

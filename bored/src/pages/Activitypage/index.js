//tool imports
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//components, actions etc
import ActivityCard from "../../components/ActivityCard";
import ActivityForm from "../../components/ActivityForm";
import { fetchRandom } from "../../store/activities/actions";

export default function Activitypage() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Hi there this is useEffect, imma dispatch fetchrandom");
    dispatch(fetchRandom);
  }, [dispatch]);
  return (
    <div>
      <h1>Wanna do this?</h1>
      <ActivityCard />
      <ActivityForm />
    </div>
  );
}

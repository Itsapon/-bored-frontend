//tool imports
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//components, actions etc
import ActivityCard from "../../components/ActivityCard";
import ActivityForm from "../../components/ActivityForm";
import { fetchRandom } from "../../store/activities/actions";
import { selectActivity } from "../../store/activities/selectors";

export default function Activitypage() {
  const dispatch = useDispatch();
  const newActivity = useSelector(selectActivity);
  const [activity, setActivity] = useState({});

  useEffect(() => {
    console.log("Hi there this is useEffect, imma dispatch fetchrandom");
    dispatch(fetchRandom());
    setActivity(newActivity);
  }, [activity]);

  console.log("activity is ", activity);
  return (
    <div>
      <h1>Wanna do this?</h1>
      <ActivityCard activity={activity} />
      <ActivityForm />
    </div>
  );
}

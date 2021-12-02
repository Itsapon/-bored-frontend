import React from "react";
import axios from "axios";
import { useState } from "react";

export default function ActivityCard() {
  const [activity, setActivity] = useState(null);
  const fetchRandom = async () => {
    const res = await axios.get("http://www.boredapi.com/api/activity/");
    setActivity(res);
  };
  const fetchByTypeAndPeople = async () => {};
  console.log("this is activity: ", activity);
  return (
    <div>
      <h1>ActivityCard</h1>
      <button onClick={fetchRandom}>Click for a random activity</button>
      {!activity ? <div>Loading..</div> : <div>{activity.data.activity}</div>}
    </div>
  );
}
/*
filter all people > 6 && type == relax
*/

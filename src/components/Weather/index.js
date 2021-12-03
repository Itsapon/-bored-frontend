import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherForecast } from "../../store/weather/actions";
import { selectForecast } from "../../store/weather/selectors";

export default function Weather() {
  const dispatch = useDispatch();
  const weatherForecast = useSelector(selectForecast);

  console.log("weatherForecast is:", weatherForecast);

  useEffect(() => {
    dispatch(fetchWeatherForecast("Utrecht"));
  }, [dispatch]);

  return <div>test the Weather</div>;
}

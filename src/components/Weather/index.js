import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherForecast } from "../../store/weather/actions";
import { selectForecast } from "../../store/weather/selectors";

export default function Weather() {
  const dispatch = useDispatch();
  const weatherForecast = useSelector(selectForecast);

  // console.log("weatherForecast in component is:", weatherForecast);

  const [city, setCity] = useState("");

  const specificConditions = weatherForecast ? weatherForecast[city] : null;

  const temp = Math.round(
    (specificConditions && specificConditions.currentConditions.temp - 32) *
      (5 / 9)
  );

  const weatherState =
    specificConditions && specificConditions.currentConditions.icon;

  const statusImage =
    weatherState === null
      ? null
      : weatherState === "Overcast" ||
        weatherState === "cloudy-day" ||
        weatherState === "cloudy-night" ||
        weatherState === "cloudy" ||
        weatherState === "cloudy-day" ||
        weatherState === "cloudy-night"
      ? "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638538917/Carso/cloudy_ats6eq.png"
      : weatherState === "partly-cloudy-day" ||
        weatherState === "partly-cloudy-night" ||
        weatherState === "partly-cloudy"
      ? "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638538917/Carso/partially_l3nvph.png"
      : weatherState === "Rain"
      ? "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638538917/Carso/raining_d03but.png"
      : weatherState === "Clear" ||
        weatherState === "clear-night" ||
        weatherState === "clear-day"
      ? "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638538917/Carso/sunny_lxxccl.png"
      : weatherState === "Snow" ||
        weatherState === "Snow-day" ||
        weatherState === "Snow-night"
      ? "https://res.cloudinary.com/dkdzt4lca/image/upload/v1638540089/Carso/snow_wcv4fz.png"
      : null;

  function submitForm(event) {
    event.preventDefault();
    // console.log("type city", typeof city);

    dispatch(fetchWeatherForecast(city));
  }

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          value={city}
          type="text"
          placeholder="Enter your city"
          aria-describedby="basic-addon2"
          onChange={(event) => setCity(event.target.value)}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          type="submit"
          onClick={submitForm}
        >
          Check the weather
        </Button>
      </InputGroup>
      {specificConditions === null ? null : (
        <div>
          <p>{specificConditions.address}</p>
          <p>
            Weather is:
            {weatherState}
            <span>
              <img src={statusImage} alt="" />
            </span>
          </p>
          <p>Temp is: {temp} C</p>
        </div>
      )}
    </div>
  );
}

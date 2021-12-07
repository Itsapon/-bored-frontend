import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectForecast } from "../../store/weather/selectors";

export default function Weather() {
  const weatherForecast = useSelector(selectForecast);

  const specificConditions = weatherForecast ? weatherForecast : null;

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

  return (
    <>
      <Container id="Weather">
        {specificConditions === null ? (
          <></>
        ) : (
          <Navbar.Brand
            
            className="justify-content-end"
            style={{
              alignItems: "right",
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            {specificConditions.id}
            <br />
            <img
              alt=""
              src={statusImage}
              width="50"
              height="50"
              // className="d-inline-block align-top"
            />{" "}
            {temp}&deg;c
          </Navbar.Brand>
        )}
      </Container>
    </>
  );
}

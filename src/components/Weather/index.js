import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
  Image,
  Card,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherForecast } from "../../store/weather/actions";
import { selectForecast } from "../../store/weather/selectors";

export default function Weather() {
  const dispatch = useDispatch();
  const weatherForecast = useSelector(selectForecast);

  // console.log("weatherForecast in component is:", weatherForecast);

  const [city, setCity] = useState("");

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

  function submitForm(event) {
    event.preventDefault();
    // console.log("type city", typeof city);

    dispatch(fetchWeatherForecast(city));
  }

  const buttonStyle = {
    width: "400px",
    height: "60px",
    fontWeight: "bolder",
    fontSize: "25px",
    boxShadow: " 4px 3px darkblue , 3px 3px",
    borderRadius: "15px",
    margin: "20px",
  };

  return (
    <>
      <Container>
        {/* <InputGroup className="mb-3">
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
          Check weather
        </Button>
      </InputGroup> */}

        {specificConditions === null ? (
          <></>
        ) : (
          // <div
          //   style={{
          //     display: "flex",
          //     justifyContent: "center",
          //     alignItems: "center",
          //   }}
          // >
          //   {/* <p>{specificConditions.address}</p> */}
          //   {/* <p> */}
          //   {/* Weather is:
          //     {weatherState} */}
          //   {/* <span> */}
          //   <Image
          //     src={statusImage}
          //     alt="Weather status"
          //     style={{ maxWidth: "100%", backgroundSize: "cover" }}
          //     responsive
          //   />
          //   {/* </span> */}
          //   {/* </p> */}
          //   <p >Temp is: {temp} C</p>
          // </div>
          <Card style={{ width: "120px" }}>
            <Card.Img variant="top" src={statusImage} />
            <Card.ImgOverlay>
              {/* <Card.Title>{temp}&deg;c</Card.Title> */}
              <Card.Text>
                <label style={{ marginTop: "12px" }}>
                  {specificConditions.id}
                  <br />
                  {temp}&deg;c
                </label>
              </Card.Text>
            </Card.ImgOverlay>
            {/* <Card.Body>
            <Card.Title>{temp}&deg;c</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body> */}
          </Card>
        )}
      </Container>
    </>
  );
}

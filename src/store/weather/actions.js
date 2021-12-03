import axios from "axios";

const ApiUrl = "https://visual-crossing-weather.p.rapidapi.com/forecast";

const forecast = (data) => {
  return {
    type: "WEATHER/fetchdata",
    payload: data,
  };
};

export const fetchWeatherForecast = (city) => {
  return async (dispatch, getState) => {
    try {
      const options = {
        method: "GET",
        url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
        params: {
          aggregateHours: "24",
          location: "Washington,DC,USA",
          contentType: "json",
          unitGroup: "us",
          shortColumnNames: "0",
        },
        headers: {
          "x-rapidapi-host": "visual-crossing-weather.p.rapidapi.com",
          "x-rapidapi-key":
            "4df10cf0c9msh637416424d742ecp19936ajsnc27e706d5b6f",
        },
      };
      const response = await axios.request(options);
      console.log("weather response is: ", response);
      dispatch(forecast(response.data));
    } catch (e) {
      console.log("error", e);
    }
  };
};

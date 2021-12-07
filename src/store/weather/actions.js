import axios from "axios";

const ApiUrl = "https://visual-crossing-weather.p.rapidapi.com/forecast";

export const forecast = (data) => ({
  type: "WEATHER/fetchdata",
  payload: data,
});

export const fetchCity = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://ip-api.com/json?fields=city`);
      const city = response.data.city;
      dispatch(fetchWeatherForecast(city));
    } catch (e) {
      console.log("error", e);
    }
  };
};

export const fetchWeatherForecast = (city) => {
  return async (dispatch, getState) => {
    try {
      const options = {
        method: "GET",
        url: ApiUrl,
        params: {
          aggregateHours: "1",
          location: city,
          contentType: "json",
          unitGroup: "us",
          shortColumnNames: "0",
        },
        headers: {
          "x-rapidapi-host": "visual-crossing-weather.p.rapidapi.com",
          "x-rapidapi-key":
            "6dc5a0c91emsh37f70d69304f0e7p16f1acjsna2b912c0d1ed",
        },
      };
      const response = await axios.request(options);

      console.log("weather response is: ", response.data.locations[city]);
      dispatch(forecast(response.data.locations[city]));
    } catch (e) {
      console.log("error", e);
    }
  };
};

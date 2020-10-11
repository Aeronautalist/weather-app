import * as weatherApi from "../api/weatherApi";

export function loadWeatherSuccess(weatherData) {
  return { type: "GET_WEATHER_SUCCESS", weatherData };
}

export function loadWeather(location) {
  return function (dispatch) {
    return weatherApi
      .getWeatherByLocation(location)
      .then((weatherData) => {
        dispatch(loadWeatherSuccess(weatherData));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

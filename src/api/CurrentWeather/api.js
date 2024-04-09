import * as Api from "@/api/api";

const api = process.env.REACT_APP_CURRENT_WEATHER_API;

export const requestCurrentWeatherData = Api.get({
  path: "/weather",
  api,
});

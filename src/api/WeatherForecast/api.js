import * as Api from "@/api/api";

const api = process.env.REACT_APP_WEATHER_FORECAST_API;

export const requestWeatherForecastData = Api.get({
  path: "/forecast",
  api,
});

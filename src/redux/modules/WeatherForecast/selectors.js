import { createSelector } from "reselect";

const weatherForecastSelector = (state) => state.weatherForecast;

export const weatherDataSelector = createSelector(
  weatherForecastSelector,
  (state) => state?.weatherData
);

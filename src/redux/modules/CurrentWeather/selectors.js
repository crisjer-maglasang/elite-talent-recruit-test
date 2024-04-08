import { createSelector } from "reselect";

const currentWeatherSelector = (state) => state.currentWeather;

export const weatherDataSelector = createSelector(
  currentWeatherSelector,
  (state) => state?.weatherData
);

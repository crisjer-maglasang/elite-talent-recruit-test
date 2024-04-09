import { createSelector } from "reselect";

const weatherHistorySelector = (state) => state.weatherHistory;

export const weatherDataSelector = createSelector(
  weatherHistorySelector,
  (state) => state?.weatherData
);

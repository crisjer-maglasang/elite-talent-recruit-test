import { createSelector } from "reselect";

const loadingSelector = (state) => state.loading;

export const currentWeatherDataLoadingSelector = createSelector(
  loadingSelector,
  (state) => state.requestCurrentWeather?.isLoading
);

export const weatherHistoryDataLoadingSelector = createSelector(
  loadingSelector,
  (state) => state.requestWeatherHistory?.isLoading
);

export const weatherForecastDataLoadingSelector = createSelector(
  loadingSelector,
  (state) => state.requestWeatherForecast?.isLoading
);

export const getGeoDataLoadingSelector = createSelector(
  loadingSelector,
  (state) => state.getGeoData?.isLoading
);

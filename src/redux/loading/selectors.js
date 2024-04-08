import { createSelector } from "reselect";

const loadingSelector = (state) => state.loading;

export const currentWeatherDataLoadingSelector = createSelector(
  loadingSelector,
  (state) => state.requestCurrentWeather?.isLoading
);

export const getGeoDataLoadingSelector = createSelector(
  loadingSelector,
  (state) => state.getGeoData?.isLoading
);

import { createSelector } from "reselect";

const locationSelector = (state) => state.location;

export const locationDataSelector = createSelector(
  locationSelector,
  (state) => state?.locationData
);

import { createReducer } from "@/redux/root";

import {
  cityNameToGeocodeNameSpace,
  getCityNameToGeocodeAsync,
} from "./actions";

const initialState = {
  locationData: [],
};

export const locationDataReducer = createReducer(
  cityNameToGeocodeNameSpace,
  initialState,
  {
    [getCityNameToGeocodeAsync.success]: ({ state, action }) => {
      state.locationData = action.payload ?? [];
    },
  }
);

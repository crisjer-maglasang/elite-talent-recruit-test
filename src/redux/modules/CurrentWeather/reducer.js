import { createReducer } from "@/redux/root";

import { currentWeatherNameSpace, requestCurrentWeatherAsync } from "./actions";

const initialState = {
  weatherData: {},
};

export const currentWeatherReducer = createReducer(
  currentWeatherNameSpace,
  initialState,
  {
    [requestCurrentWeatherAsync.success]: ({ state, action }) => {
      state.weatherData = action.payload ?? {};
    },
  }
);

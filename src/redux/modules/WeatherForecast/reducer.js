import { createReducer } from "@/redux/root";

import {
  weatherForecastNameSpace,
  requestWeatherForecastAsync,
} from "./actions";

const initialState = {
  weatherData: {},
};

export const weatherForecastReducer = createReducer(
  weatherForecastNameSpace,
  initialState,
  {
    [requestWeatherForecastAsync.success]: ({ state, action }) => {
      state.weatherData = action.payload ?? {};
    },
  }
);

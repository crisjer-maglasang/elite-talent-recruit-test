import { createReducer } from "@/redux/root";

import { weatherHistoryNameSpace, requestWeatherHistoryAsync } from "./actions";

const initialState = {
  weatherData: {},
};

export const weatherHistoryReducer = createReducer(
  weatherHistoryNameSpace,
  initialState,
  {
    [requestWeatherHistoryAsync.success]: ({ state, action }) => {
      state.weatherData = action.payload ?? {};
    },
  }
);

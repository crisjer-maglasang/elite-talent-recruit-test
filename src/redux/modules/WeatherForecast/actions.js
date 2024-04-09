import { createAsyncAction } from "@/redux/root";

import { nameSpace } from "../../nameSpace";

export const weatherForecastNameSpace = `${nameSpace}/weatherForecast`;

export const requestWeatherForecastAsync = createAsyncAction(
  `${nameSpace}/GET_WEATHER_FORECAST`
);

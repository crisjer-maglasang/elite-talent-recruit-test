import { createAsyncAction } from "@/redux/root";

import { nameSpace } from "../../nameSpace";

export const currentWeatherNameSpace = `${nameSpace}/currentWeather`;

export const requestCurrentWeatherAsync = createAsyncAction(
  `${nameSpace}/GET_CURRENT_WEATHER`
);

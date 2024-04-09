import { createAsyncAction } from "@/redux/root";

import { nameSpace } from "../../nameSpace";

export const weatherHistoryNameSpace = `${nameSpace}/weatherHistory`;

export const requestWeatherHistoryAsync = createAsyncAction(
  `${nameSpace}/GET_WEATHER_HISTORY`
);

import * as Api from "@/api/api";

const api = process.env.REACT_APP_WEATHER_HISTORY_API;

export const requestWeatherHistoryData = Api.get({
  path: "/history/city",
  api,
});

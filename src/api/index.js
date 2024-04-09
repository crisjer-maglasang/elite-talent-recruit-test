import * as currentWeatherApis from "./CurrentWeather/api";
import * as weatherForecastApis from "./WeatherForecast/api";
import * as weatherHistoryApis from "./WeatherHistory/api";
import * as getCityNameToGeocodeApis from "./LocationReverse/api";

import * as getCityNameToGeocodeMappers from "./LocationReverse/mappers";
import * as weatherHistoryMappers from "./WeatherHistory/mappers";

const combinedApis = {
  ...currentWeatherApis,
  ...weatherForecastApis,
  ...weatherHistoryApis,
  ...getCityNameToGeocodeApis,
};

export const Mapper = {
  ...getCityNameToGeocodeMappers,
  ...weatherHistoryMappers,
};

export default combinedApis;

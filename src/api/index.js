import * as currentWeatherApis from "./MainView/api";
import * as getCityNameToGeocodeApis from "./LocationReverse/api";

import * as getCityNameToGeocodeMappers from "./LocationReverse/mappers";

const combinedApis = {
  ...currentWeatherApis,
  ...getCityNameToGeocodeApis,
};

export const Mapper = {
  ...getCityNameToGeocodeMappers,
};

export default combinedApis;

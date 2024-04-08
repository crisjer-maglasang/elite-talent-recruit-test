import { createAsyncAction } from "@/redux/root";

import { nameSpace } from "../../nameSpace";

export const cityNameToGeocodeNameSpace = `${nameSpace}/cityNameToGeocode`;

export const getCityNameToGeocodeAsync = createAsyncAction(
  `${nameSpace}/CITY_NAME_TO_GEOCODE`
);

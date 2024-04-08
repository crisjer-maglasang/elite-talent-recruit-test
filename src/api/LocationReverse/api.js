import * as Api from "@/api/api";

const api = process.env.REACT_APP_GEOCODING_API;

export const getCityNameToGeocode = Api.get({
  path: "/direct",
  api,
});

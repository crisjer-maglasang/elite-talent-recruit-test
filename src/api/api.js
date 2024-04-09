import axios from "axios";
import qs from "qs";
import { HandleCookies } from "@/lib/api";

axios.defaults.withCredentials = true;

export const getUrl = ({ path, api }, params = {}) => {
  const baseUrl = {
    [process.env.REACT_APP_CURRENT_WEATHER_API]:
      process.env.REACT_APP_CURRENT_WEATHER_API_URL,
    [process.env.REACT_APP_WEATHER_HISTORY_API]:
      process.env.REACT_APP_WEATHER_HISTORY_API_URL,
    [process.env.REACT_APP_WEATHER_FORECAST_API]:
      process.env.REACT_APP_WEATHER_FORECAST_API_URL,
    [process.env.REACT_APP_GEOCODING_API]:
      process.env.REACT_APP_GEOCODING_API_URL,
  }[api];

  return `${baseUrl}${path}?${qs.stringify(params, {
    arrayFormat: "brackets",
  })}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
};

const getResponseData = (response) => response.data;

const getHeaders = () =>
  Object.fromEntries(
    [
      ["Content-Type", "application/json"],
      ["Authorization", getAuthorizationHeaderValue()],
    ].filter(([, value]) => ![undefined, null, ""].includes(value))
  );

const getAuthorizationHeaderValue = () => {
  const tokenPayload = HandleCookies.get("tokenPayload");

  if (tokenPayload) {
    return `Bearer ${tokenPayload}`;
  }

  return null;
};

const createMethod = async (config) => {
  const response = await axios(config);
  return getResponseData(response);
};

export const createEndpoint = (endpointClass) => {
  const instance = new endpointClass();

  const endpoint = instance.endpoint;
  endpoint.requestPayload = instance.requestPayload;
  endpoint.successPayload = instance.successPayload;
  endpoint.failurePayload = instance.failurePayload;

  return endpoint;
};

export const get =
  ({ ...urlProps }) =>
  (params, config = {}) =>
    createMethod({
      method: "get",
      url: getUrl(urlProps, params),
      headers: getHeaders(),
      ...config,
    });

export const post =
  (urlProps) =>
  (data, config = {}) =>
    createMethod({
      method: "post",
      url: getUrl(urlProps),
      data,
      headers: getHeaders(),
      ...config,
    });

export const patch =
  (urlProps) =>
  (data, config = {}) =>
    createMethod({
      method: "patch",
      url: getUrl(urlProps),
      data,
      headers: getHeaders(),
      ...config,
    });

export const put =
  (urlProps) =>
  (data, config = {}) =>
    createMethod({
      method: "put",
      url: getUrl(urlProps),
      data,
      headers: getHeaders(),
      ...config,
    });

export const remove =
  (urlProps) =>
  (data, config = {}) =>
    createMethod({
      method: "delete",
      url: getUrl(urlProps),
      data,
      headers: getHeaders(),
      ...config,
    });

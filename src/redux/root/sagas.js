import { all } from "redux-saga/effects";
import { currentWeatherWatcher } from "@/redux/modules/CurrentWeather";
import { getCityNameToGeocodeWatcher } from "@/redux/modules/LocationReverse";

export default function* rootSaga() {
  yield all([currentWeatherWatcher(), getCityNameToGeocodeWatcher()]);
}

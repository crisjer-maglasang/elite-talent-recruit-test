import { all } from "redux-saga/effects";
import { currentWeatherWatcher } from "@/redux/modules/CurrentWeather";
import { weatherForecastWatcher } from "@/redux/modules/WeatherForecast";
import { weatherHistoryWatcher } from "@/redux/modules/WeatherHistory";
import { getCityNameToGeocodeWatcher } from "@/redux/modules/LocationReverse";

export default function* rootSaga() {
  yield all([
    currentWeatherWatcher(),
    getCityNameToGeocodeWatcher(),
    weatherForecastWatcher(),
    weatherHistoryWatcher(),
  ]);
}

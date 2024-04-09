import { combineReducers } from "redux";
import { toastsReducer } from "@/redux/toasts";
import { currentWeatherReducer } from "@/redux/modules/CurrentWeather";
import { weatherForecastReducer } from "@/redux/modules/WeatherForecast";
import { weatherHistoryReducer } from "@/redux/modules/WeatherHistory";
import { locationDataReducer } from "@/redux/modules/LocationReverse";
import { loadingReducer } from "@/redux/loading";
import { errorsReducer } from "@/redux/errors";

const createRootReducer = () =>
  combineReducers({
    toasts: toastsReducer,
    currentWeather: currentWeatherReducer,
    weatherForecast: weatherForecastReducer,
    weatherHistory: weatherHistoryReducer,
    loading: loadingReducer,
    errors: errorsReducer,
    location: locationDataReducer,
  });

export default createRootReducer;

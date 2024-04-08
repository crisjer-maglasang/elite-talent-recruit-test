import { combineReducers } from "redux";
import { toastsReducer } from "@/redux/toasts";
import { currentWeatherReducer } from "@/redux/modules/CurrentWeather";
import { locationDataReducer } from "@/redux/modules/LocationReverse";
import { loadingReducer } from "@/redux/loading";
import { errorsReducer } from "@/redux/errors";

const createRootReducer = () =>
  combineReducers({
    toasts: toastsReducer,
    currentWeather: currentWeatherReducer,
    loading: loadingReducer,
    errors: errorsReducer,
    location: locationDataReducer,
  });

export default createRootReducer;

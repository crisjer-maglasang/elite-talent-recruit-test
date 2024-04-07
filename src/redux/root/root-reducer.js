import { combineReducers } from "redux";
import { toastsReducer } from "@/redux/toasts";

const createRootReducer = () =>
  combineReducers({
    toasts: toastsReducer,
  });

export default createRootReducer;

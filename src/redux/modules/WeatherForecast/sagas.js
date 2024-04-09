import { call, put, takeLatest } from "redux-saga/effects";
import { createRequestSaga } from "@/redux/helpers";
import Api from "@/api";
import { addToastsAction } from "@/redux/toasts";
import { mapErrorToastsData } from "@/lib/api";
import { requestWeatherForecastAsync } from "./actions";

function* requestWeatherForecastSaga({ payload }) {
  try {
    const response = yield call(
      Api.requestWeatherForecastData,
      { ...payload },
      { withCredentials: false }
    );

    yield put(requestWeatherForecastAsync.success(response));
  } catch (error) {
    yield put(addToastsAction(mapErrorToastsData(error)));

    throw error;
  }
}

export function* weatherForecastWatcher() {
  yield takeLatest(
    requestWeatherForecastAsync.request.type,
    createRequestSaga(requestWeatherForecastSaga, {
      keyNew: "requestWeatherForecast",
      errKey: "requestWeatherForecast",
      write: true,
    })
  );
}

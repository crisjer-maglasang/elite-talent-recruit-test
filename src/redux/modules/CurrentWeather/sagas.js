import { call, put, takeLatest } from "redux-saga/effects";
import { createRequestSaga } from "@/redux/helpers";
import Api, { Mapper } from "@/api";
import { addToastsAction } from "@/redux/toasts";
import { mapErrorToastsData } from "@/lib/api";
import { requestCurrentWeatherAsync } from "./actions";

function* requestCurrentWeatherSaga({ payload }) {
  try {
    const response = yield call(
      Api.requestCurrentWeatherData,
      { ...payload },
      { withCredentials: false }
    );

    yield put(requestCurrentWeatherAsync.success(response));
  } catch (error) {
    yield put(addToastsAction(mapErrorToastsData(error)));

    throw error;
  }
}

export function* currentWeatherWatcher() {
  yield takeLatest(
    requestCurrentWeatherAsync.request.type,
    createRequestSaga(requestCurrentWeatherSaga, {
      keyNew: "requestCurrentWeather",
      errKey: "requestCurrentWeather",
      write: true,
    })
  );
}

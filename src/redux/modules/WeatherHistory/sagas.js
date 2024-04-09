import { call, put, takeLatest } from "redux-saga/effects";
import { createRequestSaga } from "@/redux/helpers";
import Api, { Mapper } from "@/api";
import { addToastsAction } from "@/redux/toasts";
import { mapErrorToastsData } from "@/lib/api";
import { requestWeatherHistoryAsync } from "./actions";

function* requestWeatherHistorySaga({ payload }) {
  try {
    const response = yield call(
      Api.requestWeatherHistoryData,
      Mapper.prepareDataForRequestWeatherHistory(payload),
      { withCredentials: false }
    );

    yield put(requestWeatherHistoryAsync.success(response));
  } catch (error) {
    yield put(addToastsAction(mapErrorToastsData(error)));

    throw error;
  }
}

export function* weatherHistoryWatcher() {
  yield takeLatest(
    requestWeatherHistoryAsync.request.type,
    createRequestSaga(requestWeatherHistorySaga, {
      keyNew: "requestWeatherHistory",
      errKey: "requestWeatherHistory",
      write: true,
    })
  );
}

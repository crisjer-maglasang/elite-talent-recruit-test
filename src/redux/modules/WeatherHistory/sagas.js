import { call, put, takeLatest } from "redux-saga/effects";
import { createRequestSaga } from "@/redux/helpers";
import Api, { Mapper } from "@/api";
import { addToastsAction } from "@/redux/toasts";
import { mapErrorToastsData } from "@/lib/api";
import { requestWeatherHistoryAsync } from "./actions";

function* requestWeatherHistorySaga({ payload }) {
  console.log("sss");
  try {
    const { data } = payload;
    const response = yield call(
      Api.requestWeatherHistoryData,
      Mapper.prepareDataForRequestWeatherHistory(data),
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

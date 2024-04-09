import { call, put, takeLatest } from "redux-saga/effects";
import { createRequestSaga } from "@/redux/helpers";
import Api, { Mapper } from "@/api";
import { addToastsAction } from "@/redux/toasts";
import { mapErrorToastsData } from "@/lib/api";
import { getCityNameToGeocodeAsync } from "./actions";

function* getCityNameToGeocodeSaga({ payload }) {
  try {
    const response = yield call(
      Api.getCityNameToGeocode,
      { ...payload },
      { withCredentials: false }
    );

    if (response.length === 0) {
      yield put(
        addToastsAction([
          {
            type: "error",
            message: "Unknown location name",
            details:
              "We can't find the matched location. Please input the correct name",
          },
        ])
      );
    }

    yield put(getCityNameToGeocodeAsync.success(Mapper.getGeoData(response)));
  } catch (error) {
    yield put(addToastsAction(mapErrorToastsData(error)));

    throw error;
  }
}

export function* getCityNameToGeocodeWatcher() {
  yield takeLatest(
    getCityNameToGeocodeAsync.request.type,
    createRequestSaga(getCityNameToGeocodeSaga, {
      keyNew: "getGeoData",
      errKey: "getGeoData",
      write: true,
    })
  );
}

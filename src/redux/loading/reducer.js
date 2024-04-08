import { createReducer } from "@/redux/root";

import { nameSpace, setLoadingAction } from "./actions";

const initialState = {};

export const loadingReducer = createReducer(nameSpace, initialState, {
  [setLoadingAction]: ({ state, action }) => {
    const { keyNew, value } = action.payload;

    state[keyNew] = {
      ...state[keyNew],
      isLoading: value,
    };
  },
});

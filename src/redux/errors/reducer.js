import { createReducer } from "@/redux/root";

import { nameSpace, addErrorAction, removeAllErrorsAction } from "./actions";

const initialState = {
  errors: {},
};

export const errorsReducer = createReducer(nameSpace, initialState, {
  [addErrorAction]: ({ state, action }) => {
    const { errKey, error } = action.payload;

    state.errors[errKey] = error;
  },

  [removeAllErrorsAction]: ({ state }) => {
    state.errors = initialState.errors;
  },
});

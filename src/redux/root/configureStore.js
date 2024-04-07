import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "./root-reducer";
import sagas from "./sagas";
import persistState from "./persistState";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { saveState } from "./localStorage";

const configureStore = (initialState = {}) => {
  const persistedState = persistState(initialState);
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(),
    persistedState,
    composeWithDevToolsDevelopmentOnly(applyMiddleware(sagaMiddleware))
  );

  store.subscribe(() => {
    saveState(store.getState().auth);
  });

  sagaMiddleware.run(sagas);

  return { store };
};

export default configureStore;

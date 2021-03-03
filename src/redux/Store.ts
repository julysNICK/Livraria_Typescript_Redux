import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Combinereducers";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const enhace = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, enhace);
sagaMiddleware.run(rootSaga);
export default store;

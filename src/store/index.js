import rootReducer from "../reducers/rootReducer";
import {applyMiddleware, compose, createStore} from "redux";
import {createLogger} from "redux-logger";

const logger = createLogger({});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(logger))
);

export default store

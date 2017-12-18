// import rootReducer from "../reducers/rootReducer";
import {session} from "../reducers/sessionHandling";
import {applyMiddleware, compose, createStore} from "redux";
import {createLogger} from "redux-logger";
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';


const logger = createLogger({});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = {
  key: 'root',
  storage
};

const persistingReducer = persistCombineReducers(config, {session});

const store = createStore(
  persistingReducer,
  composeEnhancers(
    applyMiddleware(logger))
);

export default store

export const persistor = persistStore(store);



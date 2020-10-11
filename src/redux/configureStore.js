import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import locationReducer from "./locationReducer";
import logger from "redux-logger";

export const configureStore = () => {
  return createStore(
    combineReducers({
      locationReducer,
    }),
    applyMiddleware(thunk, logger)
  );
};

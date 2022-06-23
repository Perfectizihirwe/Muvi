import {createStore, compose, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import { createLogger } from "redux-logger";

export default function configureStore(preloadedState) {
    const loggerMiddleware = createLogger({
      predicate: () => __DEV__,
    });
    const middlewares = [loggerMiddleware, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);
  
    const enhancers = [middlewareEnhancer];
    const composedEnhancers = compose(...enhancers);
  
    const store = createStore(rootReducer, preloadedState, composedEnhancers);
  
    return store;
  }

  export const store = configureStore();
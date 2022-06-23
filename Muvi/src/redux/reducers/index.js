import { combineReducers } from "redux";
import fetchTrendingReducers from "./trending.reducers";

export default combineReducers({
  Trending: fetchTrendingReducers,
});

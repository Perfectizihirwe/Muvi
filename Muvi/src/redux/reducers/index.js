import { combineReducers } from "redux";
import fetchTrendingReducers from "./trending.reducers";
import fetchNewReducers from "./new.reducer";
import fetchPopularReducers from "./popular.reducers";

export default combineReducers({
  Trending: fetchTrendingReducers,
  New: fetchNewReducers,
  Popular: fetchPopularReducers,
});

import { combineReducers } from "redux";
import fetchTrendingReducers from "./trending.reducers";
import fetchNewReducers from "./new.reducer";
import fetchPopularReducers from "./popular.reducers";
import seriesReducers from "./series.reducers";
import idReducers from "./video.id.reducers";
import searchReducers from "./search.reducers";

export default combineReducers({
  Trending: fetchTrendingReducers,
  New: fetchNewReducers,
  Popular: fetchPopularReducers,
  LatestSeries: seriesReducers,
  VideoId: idReducers,
  Search: searchReducers,
});

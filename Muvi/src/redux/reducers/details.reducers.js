const initialState = {
  movieDetail: {},
  detail_loading: false,
};

export default (state = initialState, { type, payload }) =>{
  if (type === "GET MOVIE DETAIL") {
    return {
      ...state,
      detail_loading: true,
    };
  }
  if (type === "GET MOVIE DETAIL DONE") {
    return {
      ...state,
      movieDetail: payload,
      detail_loading: false,
    };
  }
  if (type === "GET MOVIE DETAIL FAILED") {
    return {
      ...state,
      detail_loading: false,
    };
  } else {
    return state;
  }
}

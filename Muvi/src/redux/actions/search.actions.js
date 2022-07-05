import axios from "axios";

export const searchAnything = (query) => {
  return (dispatch) => {
    dispatch({
      type: "SEARCHING",
    });

    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/search/multi?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&query=${query}&page=1&include_adult=false`,
    })
      .then((responseData) => {
        const { data } = responseData;
        dispatch({
          type: "SEARCHING_DONE",
          payload: data.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: "SEARCHING_FAILED",
          payload: error.message,
        });
      });
  };
};

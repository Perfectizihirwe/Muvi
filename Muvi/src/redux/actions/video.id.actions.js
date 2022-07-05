import axios, { Axios } from "axios";

export function fetchVideoId(id) {
  return (dispatch) => {
    dispatch({
      type: "GET ID",
    });

    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US`,
    })
      .then((responseData) => {
        const { data } = responseData;
        console.log(data);
        dispatch({
          type: "GET ID SUCCESSFUL",
          payload: data.results,
        });
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({
          type: "GET ID FAILED",
          payload: error.message,
        });
      });
  };
}

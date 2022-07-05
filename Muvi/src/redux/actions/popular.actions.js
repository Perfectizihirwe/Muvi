import axios from "axios"

export const fetchPopularMovies = () => {
    return (dispatch) => {
        
        dispatch({
            type: "POPULAR_MOVIES_FETCHING",
        })

        axios({
            method: "get",
            url: "https://api.themoviedb.org/3/movie/upcoming?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US"
        })
        .then((responseData) => {
            const {data} = responseData;
            dispatch({
                type: "POPULAR_MOVIES_FETCHING_DONE",
                payload: data.results,
            })
        })
        .catch((error) => {
            dispatch({
                type: "POPULAR_MOVIES_FETCHING_FAILED",
                payload: error.message,
            })
        })
    };
};
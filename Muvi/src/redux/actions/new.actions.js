import axios from "axios"

export const fetchNewMovies = () => {
    return (dispatch) => {
        
        dispatch({
            type: "NEW_MOVIES_FETCHING",
        })

        axios({
            method: "get",
            url: "https://api.themoviedb.org/3/movie/upcoming?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=1"
        })
        .then((response) => {
            const {data} = response;
            dispatch({
                type: "NEW_MOVIES_FETCHING_DONE",
                payload: data.results,
            })
        })
        .catch((error) => {
            dispatch({
                type: "NEW_MOVIES_FETCHING_FAILED",
                payload: error.message,
            })
        })
    };
};
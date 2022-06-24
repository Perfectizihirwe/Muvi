const initialState = {
    popular_movies: [],
    error: null,
    popular_loading: true,
};

export default function fetchPopularReducers (state=initialState, action) {
    switch (action.type) {
        case "POPULAR_MOVIES_FETCHING":
                return {
                    popular_loading: true,
                };
        case "POPULAR_MOVIES_FETCHING_DONE":
                return {
                    ...state,
                    popular_movies: action.payload,
                    popular_loading: false,
                };  

        case "POPULAR_MOVIES_FETCHING_FAILED":
                return {
                    ...state,
                    error: action.payload,
                };                  
        default:
            return state;
    }
}


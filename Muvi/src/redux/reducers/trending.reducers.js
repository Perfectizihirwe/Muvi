const initialState = {
    trending_movies: [],
    error: null,
    trending_loading: true,
};

export default function fetchTrendingReducers (state=initialState, action) {
    switch (action.type) {
        case "TRENDING_MOVIES_FETCHING":
                return {
                    trending_loading: true,
                };
        case "TRENDING_MOVIES_FETCHING_DONE":
                return {
                    ...state,
                    trending_movies: action.payload,
                    trending_loading: false,
                };  

        case "TRENDING_MOVIES_FETCHING_FAILED":
                return {
                    ...state,
                    error: action.payload,
                };                  
        default:
            return state;
    }
}


const initialState = {
    new_movies: [],
    error: null,
    new_loading: true,
}

export default function fetchNewReducers (state=initialState, action) {
    switch (action.type) {
        case "NEW_MOVIES_FETCHING":
                return {
                    new_loading: true,
                };
        case "NEW_MOVIES_FETCHING_DONE":
                return {
                    ...state,
                    new_movies: action.payload,
                    new_loading: false,
                };  

        case "NEW_MOVIES_FETCHING_FAILED":
                return {
                    ...state,
                    error: action.payload,
                };                  
        default:
            return state;
    }
}


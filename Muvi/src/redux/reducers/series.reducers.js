const initialState = {
    latest_series: [],
    series_loading: true,
    error: null,
}

export default function seriesReducers (state = initialState, action) {
    switch (action.type) {
        case "SERIES_FETCHING":
            return {
            series_loading: true,
            }
        case "SERIES_FETCHING_DONE":
            return {
            ...state,
            latest_series: action.payload,
            series_loading: false,
            }    
        case "SERIES_FETCHING_FAILED":
            return {
            ...state,
            error: action.payload,
            }

        default:
            return state;
 
    };
};
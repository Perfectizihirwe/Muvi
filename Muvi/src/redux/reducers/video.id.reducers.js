const initialState = {
  video_id: [],
  id_loading: true,
  error: null,
};

export default function idReducers(state = initialState, { type, payload }) {
  switch (type) {
    case "GET ID":
      return {
        ...state,
        id_loading: true,
      };

    case "GET ID SUCCESSFUL":
      return {
        ...state,
        video_id: payload,
        id_loading: false,
      };

    case "GET ID FAILED":
      return {
        ...state,
        id_loading: false,
        error: payload,
      };
    default:
      return state;
  }
}

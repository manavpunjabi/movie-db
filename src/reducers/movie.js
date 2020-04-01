import { GET_MOVIES, MOVIE_ERROR } from "../actions/types";

const initialState = {
  movies: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload
      };
    case MOVIE_ERROR:
      return {
        ...state
      };
    default:
      return state;
  }
}

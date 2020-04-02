import { GET_MOVIES, GET_MOVIE, MOVIE_ERROR } from "../actions/types";

const initialState = {
  movies: [],
  error: false,
  movie: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload.Search
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: payload
      };
    case MOVIE_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}

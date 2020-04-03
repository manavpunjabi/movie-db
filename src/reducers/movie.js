import { GET_MOVIES, GET_MOVIE, MOVIE_ERROR } from "../actions/types";

const initialState = {
  movies: [],
  movie: {},
  error: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload.Search,
        movie: {},
        error: false
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: payload,
        movies: [],
        error: false
      };
    case MOVIE_ERROR:
      return {
        ...state,
        movies: [],
        movie: {},
        error: true
      };
    default:
      return state;
  }
}

import {
  GET_MOVIES,
  GET_MOVIE,
  MOVIE_ERROR,
  ADD_MOVIE
} from "../actions/types";

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

        error: false
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: payload,

        error: false
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: payload
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

import { GET_MOVIES, MOVIE_ERROR } from "./types";
import axios from "axios";

export const getMovies = search => async dispatch => {
  try {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=e0620bd4&s=${search}`
    );
    dispatch({
      type: GET_MOVIES,
      payload: res.data.Search
    });
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: { msg: err.response.text }
    });
  }
};

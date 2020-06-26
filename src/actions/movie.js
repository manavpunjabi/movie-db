import { GET_MOVIES, GET_MOVIE, ADD_MOVIE, MOVIE_ERROR } from "./types";
import axios from "axios";

export const getMovies = (search) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=e0620bd4&s=${search}`
    );
    if (res.data.Response === "True") {
      dispatch({
        type: GET_MOVIES,
        payload: res.data,
      });
    } else {
      dispatch({
        type: MOVIE_ERROR,
      });
    }
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
    });
  }
};

export const getMovie = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=e0620bd4&i=${id}&plot=full`
    );
    dispatch({
      type: GET_MOVIE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
    });
  }
};

export const addMovie = (formData, history) => async (dispatch) => {
  try {
    console.log(formData);
    const [name, year, image] = formData;
    const movie = {
      name,
      year,
      image,
    };
    dispatch({
      type: ADD_MOVIE,
      payload: JSON.stringify(movie),
    });
    history.push("/movies");
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
    });
  }
};

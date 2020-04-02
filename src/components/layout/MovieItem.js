import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getMovie } from "../../actions/movie";

const MovieItem = ({ getMovie, movie: { Title, Year, Poster, imdbID } }) => {
  return (
    <div className="col mb-4">
      <div className="card">
        <img src={Poster} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">Year: {Year}</p>
          <Link to={`/movie/${imdbID}`} className="btn btn-primary">
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  getMovie: PropTypes.func.isRequired
};

export default MovieItem;

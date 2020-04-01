import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMovies } from "../../actions/movie";
import MovieItem from "./MovieItem";

const Movies = ({ getMovies, movie: { movies } }) => {
  return (
    <div className="row row-cols-2 row-cols-md-4">
      {movies.length > 0 ? (
        movies.map(movie => <MovieItem movie={movie} />)
      ) : (
        <h4>No movie found</h4>
      )}
    </div>
  );
};

Movies.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps, { getMovies })(Movies);

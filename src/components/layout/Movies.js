import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMovies } from "../../actions/movie";
import MovieItem from "./MovieItem";

const Movies = ({ getMovies, movie: { movies, error } }) => {
  return (
    <Fragment>
      {movies.length > 0 ? (
        <Fragment>
          <div className="row row-cols-2 row-cols-md-4">
            {movies.map(movie => (
              <MovieItem movie={movie} />
            ))}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {error ? (
            <h4 className="text-center">No movie(s) found</h4>
          ) : (
            <h4 className="text-center">Search over 1 million movie titles</h4>
          )}
        </Fragment>
      )}
    </Fragment>
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

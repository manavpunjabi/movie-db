import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";
import { getMovies } from "../../actions/movie";

const Movies = ({ getMovies, match, movie: { movies, error, loading } }) => {
  useEffect(() => {
    getMovies(match.params.search);
  }, [getMovies, match.params.search]);
  return (
    <Fragment>
      {movies.length > 0 ? (
        <div className="row row-cols-2 row-cols-md-4">
          {movies.map((movie) => (
            <MovieItem movie={movie} />
          ))}
        </div>
      ) : (
        <Fragment>
          {error ? <h4 className="text-center">No movie(s) found</h4> : <></>}
        </Fragment>
      )}
    </Fragment>
  );
};

Movies.propTypes = {
  movie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movie,
  getMovies: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, { getMovies })(Movies);

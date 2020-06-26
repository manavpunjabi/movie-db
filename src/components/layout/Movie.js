import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMovie } from "../../actions/movie";

const Movie = ({
  getMovie,
  movie: {
    movie: {
      Title,
      Year,
      Released,
      Runtime,
      Genre,
      Director,
      Writer,
      Actors,
      Plot,
      Language,
      Country,
      Awards,
      Poster,
      imdbRating,
      BoxOffice,
      Production
    }
  },
  match
}) => {
  useEffect(() => {
    getMovie(match.params.id);
  }, [getMovie, match.params.id]);
  return (
    <Fragment>
      <div className="row">
        <div className="col-sm">
          <img
            src={Poster}
            alt=""
            style={{ height: "600px", width: "400px" }}
          />
        </div>
        <div className="col-sm">
          <h5>{Title}</h5>
          <p>
            <small className="text-muted">Year: {Year}</small>
          </p>
          <p>Actors: {Actors}</p>
          <p>Director: {Director}</p>
          <p>Writer: {Writer}</p>
          <p>Runtime: {Runtime}</p>
          <p>Genre: {Genre}</p>
          <p>Language: {Language}</p>
          <p>Country: {Country}</p>
          <p>Awards: {Awards}</p>
          <p>BoxOffice: {BoxOffice}</p>
          <p>Production: {Production}</p>
          <p>IMDB Rating: {imdbRating}</p>
          <p>Plot: {Plot}</p>
        </div>
      </div>
    </Fragment>
  );
};

Movie.propTypes = {
  getMovie: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps, { getMovie })(Movie);

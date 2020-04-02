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
      <img
        src={Poster}
        alt=""
        className="float-left"
        style={{ height: "300px", width: "200px" }}
      />
      <div className="float-right">
        <h5>{Title}</h5>
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
        <p>
          <small className="text-muted">Year: {Year}</small>
        </p>
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

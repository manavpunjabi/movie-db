import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { getMovies } from "../../actions/movie";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Search = ({ getMovies }) => {
  const [text, setText] = useState("");

  return (
    <Fragment>
      <h1 className="text-primary text-center">Movie Finder</h1>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Search by title"
            value={text}
            onChange={e => setText(e.target.value)}
            required
          />
          <Link
            to={`/movies/${text}`}
            className="btn btn-primary my-1 btn-lg btn-block"
          >
            Search
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

Search.propTypes = {
  getMovies: PropTypes.func.isRequired
};

export default connect(null, { getMovies })(Search);

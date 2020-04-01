import React, { useState } from "react";
import PropTypes from "prop-types";
import { getMovies } from "../../actions/movie";
import { connect } from "react-redux";

const Search = ({ getMovies }) => {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        getMovies(text);
        setText("");
      }}
    >
      <div className="form-group">
        <h1 className="text-primary text-center">Search for a movie</h1>
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="Search by title"
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input
          type="submit"
          className="btn btn-primary my-1 btn-lg btn-block"
          value="Search"
        />
      </div>
    </form>
  );
};

Search.propTypes = {
  getMovies: PropTypes.func.isRequired
};

export default connect(null, { getMovies })(Search);

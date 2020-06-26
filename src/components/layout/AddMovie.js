import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { addMovie } from "../../actions/movie";
import { connect } from "react-redux";
const AddMovie = ({ addMovie, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    year: ""
  });
  const { name, image, year } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    addMovie(formData, history);
  };
  return (
    <Fragment>
      <h1 className="text-primary text-center">Add A Movie</h1>
      <form className="form-group" onSubmit={e => onSubmit(e)}>
        <input
          type="text"
          placeholder="name"
          className="form-control"
          id="name"
          required
          value={name}
          name="name"
          onChange={e => onChange(e)}
        />
        <input
          type="text"
          placeholder="image URL"
          className="form-control"
          id="image"
          required
          name="image"
          value={image}
          onChange={e => onChange(e)}
        />
        <input
          type="number"
          placeholder="year"
          className="form-control"
          id="year"
          name="year"
          required
          value={year}
          onChange={e => onChange(e)}
        />
        <input
          type="submit"
          value="Add"
          className="btn btn-primary btn-block"
        />
      </form>
    </Fragment>
  );
};

AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired
};

export default connect(null, { addMovie })(AddMovie);
